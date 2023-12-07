import { IProduct, IProductImage } from '@/interfaces/product/interface'
import { ProductsPagesSlugs } from '@/lib/utils/menuUtils'
import { H2, Price } from '@/ui'
import { ProductNew } from '@/ui/components'
import Button from '@/ui/components/button/Button'
import Image from 'next/image'
import Link from 'next/link'

interface IParams {
  params: {
    category: ProductsPagesSlugs
  }
}

const fetchProducts = async (): Promise<IProduct[]> => {
  const res = await fetch('http://localhost:3000/api/products')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const fetchCategories = async (): Promise<ICategory[]> => {
  const res = await fetch('http://localhost:3000/api/categories')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const categoriesForThepage = {
  [ProductsPagesSlugs.all]: [1, 101, 104, 105, 106],
  [ProductsPagesSlugs.cakes]: [201],
  [ProductsPagesSlugs.presents]: [14],
}

export default async function Products({ params }: IParams) {
  const { category } = params
  const productsPromise = fetchProducts()
  const categoriesPromise = fetchCategories()
  const [products, categories] = await Promise.all([productsPromise, categoriesPromise])
  const getMiainProductImage = (images: IProductImage[]) => images?.find((i) => i.position === 1)?.image
  const getProductsFromCategory = (categoryId: ICategoryId) =>
    products?.length
      ? products
          .filter((prod) => {
            const relatedCategoriesIds = prod.categories?.map((c) => c.id) || []
            return relatedCategoriesIds.includes(categoryId)
          })
          .sort((a, b) => a.position - b.position)
      : []

  if (!categories?.length) return null

  const filteredCategories = categories.filter((cat) => categoriesForThepage[category]?.includes(cat.id))

  return (
    <main>
      {filteredCategories.map(({ id, title }) => (
        <div key={`category_${id}`}>
          <H2 className="my-8">/ {title}</H2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getProductsFromCategory(id).map((product) => (
              <div key={`product_in_category_${product.id}`} className="text-center">
                <Link href={`${category}/${product.id}`}>
                  <div className="flex items-center justify-center mb-8">
                    {getMiainProductImage(product.images) ? (
                      <Image
                        src={`/images/products/${getMiainProductImage(product.images)}`}
                        alt={title}
                        width="300"
                        height="300"
                      />
                    ) : (
                      <Image
                        src={`/images/products/default.jpeg`}
                        alt={title}
                        width="300"
                        height="300"
                        className="opacity-70"
                      />
                    )}
                  </div>

                  <Price value={product.price} />
                  <Button variant="light">{product.title}</Button>
                  <div>
                    <ProductNew product={product} />
                  </div>
                  {!product.isNew && <p className="text-grey font-din">{product.short_description}</p>}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}

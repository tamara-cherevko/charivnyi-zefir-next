import { IProduct } from '@/interfaces/product/interface'
import { Price } from '@/ui'
import { ProductNew, ProductGallery, Breadcrumbs, BuyButton } from '@/ui/components'
import ProductDefaultImage from '@/ui/components/product/ProductDefaultImage'
import { H3 } from '@/ui/text'
import { ReactNode } from 'react'

interface IParams {
  params: {
    productId: string
  }
}

const fetchProductDetails = async (productId: string): Promise<IProduct> => {
  const res = await fetch(`http://localhost:3000/api/product-details?id=${productId}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function ProductDetails({ params }: IParams) {
  const { productId } = params
  const product = await fetchProductDetails(productId)
  const {
    images,
    title,
    id,
    description,
    price,
    delivery_option_title,
    netto,
    shelf_life,
    ingredients,
    proteins,
    fats,
    carbohydrates,
    caloric_value,
  } = product
  const descriptionLines = description?.split('/n') || null

  const InfoContent = ({ children, title }: { children: ReactNode; title?: string }) => (
    <div className="text-grey my-1">
      {!!title && <strong className="font-selection">{title}: </strong>}
      {children}
    </div>
  )
  return (
    <>
      <Breadcrumbs />

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-5">
          {images?.length ? <ProductGallery images={images} /> : <ProductDefaultImage alt={title} />}
        </div>
        <div className="col-span-7 font-fixel">
          <H3>{title}</H3>
          <div className="my-4 flex">
            <Price value={price} />
          </div>
          <div className="my-4">
            <BuyButton product={product} />
          </div>
          <div className="my-4">
            <ProductNew product={product} />
          </div>
          <InfoContent title="Артікул">{id}</InfoContent>
          <div className="mb-4">
            {!!descriptionLines?.length && (
              <InfoContent>
                {descriptionLines.map((line, i) => (
                  <p key={`description_line_${i}`}>{line}</p>
                ))}
              </InfoContent>
            )}
          </div>
          {!!delivery_option_title && <InfoContent title="Доставимо">{delivery_option_title}</InfoContent>}
          {!!netto && <InfoContent title="Вага, г">{netto}</InfoContent>}
          {!!shelf_life && <InfoContent title="Термін зберігання">{shelf_life}</InfoContent>}
          {!!ingredients?.length && (
            <InfoContent title="Склад">
              {ingredients.map((ingredient, i) => (
                <span key={`ingredient_${i}`}>
                  {ingredient}
                  {i < ingredients.length - 1 ? ', ' : ''}
                </span>
              ))}
            </InfoContent>
          )}
          {!!proteins && <InfoContent title="Білки, г">{proteins}</InfoContent>}
          {!!fats && <InfoContent title="Жири, г">{fats}</InfoContent>}
          {!!carbohydrates && <InfoContent title="Вуглеводи, г">{carbohydrates}</InfoContent>}
          {!!caloric_value && <InfoContent title="Калорійність, кКал / 100г">{caloric_value}</InfoContent>}
        </div>
      </div>
    </>
  )
}

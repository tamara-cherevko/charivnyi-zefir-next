import React from 'react'
import { IProduct } from '@/interfaces/product/interface'

interface Iprops {
  product: IProduct
}

const ProductNew = ({ product }: Iprops) => {
  if (product.isNew === 0) return null
  return (
    <span className="relative">
      <span className="absolute top-2 left-1 -right-1 -bottom-1 bg-blue-300 rounded-sm"> </span>
      <span className="uppercase relative font-bold text-[1.1rem]">Новинка!</span>
    </span>
  )
}

export default ProductNew

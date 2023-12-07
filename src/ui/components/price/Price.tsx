import React from 'react'
import { IProductPrice } from '@/interfaces/product/interface'

interface IProps {
  value: IProductPrice
}

const Price = ({ value }: IProps) => (
  <div className="text-center">
    <strong className="text-2xl font-selection">{value}грн</strong>
  </div>
)

export default Price

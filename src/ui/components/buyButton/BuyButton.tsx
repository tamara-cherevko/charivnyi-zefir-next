'use client'

import { toast } from 'react-toastify'
import Button from '../button/Button'
import { addProduct } from '@/redux/reducers/cartSlice'
import { IProduct } from '@/interfaces/product/interface'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

interface IProps {
  product: IProduct
}

const cartInitialValue = 1

const BuyButton = ({ product }: IProps) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(cartInitialValue)
  const buy = () => {
    dispatch(addProduct({ product, quantity }))
    setQuantity(cartInitialValue)
    toast.success('❤️  Товар доданий до кошика')
  }

  const increase = () => {
    setQuantity((q) => q + 1)
  }

  const decrease = () => {
    quantity > cartInitialValue && setQuantity((q) => q - 1)
  }

  return (
    <div className="flex">
      <Button
        variant="light"
        className="w-10 px-0 my-0 text-2xl"
        onClick={() => decrease()}
        disabled={quantity <= cartInitialValue}
      >
        -
      </Button>
      <div className="border border-current w-10 flex items-center justify-center -mx-[1px]">{quantity}</div>
      <Button variant="light" className="w-10 px-0 my-0 mr-4 text-2xl" onClick={() => increase()}>
        +
      </Button>
      <Button onClick={() => buy()}>В кошик</Button>
    </div>
  )
}

export default BuyButton

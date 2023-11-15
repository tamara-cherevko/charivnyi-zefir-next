'use client'
// import QuickCart from './QuickCart'
import Image from 'next/image'
import useCartSelector from '@/redux/selectors/useCartSelector'
import { useToggle } from '@/lib/hooks/common/useToggle'
import CartImage from '@/public/images/cart.svg'

const Cart = () => {
  const { items: cartItems, totalPrice: cartTotalPrice } = useCartSelector()
  const productsCount = cartItems?.length || 0
  const [isSliderOpen, toggleSlider] = useToggle(false)

  return (
    <button className="flex items-center justify-between p-1 gap-3" onClick={() => toggleSlider()}>
      <div className="relative mb-1">
        <Image src={CartImage} alt="Cart logo" width="30" />
        <span className="absolute top-3.5  right-0  text-white w-[30px] text-xs">{productsCount}</span>
      </div>
      {cartTotalPrice > 0 && <div className="text-lg">{cartTotalPrice} грн</div>}
    </button>
  )
}

export default Cart

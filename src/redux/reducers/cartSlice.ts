import { ICart, ICartItem } from '@/interfaces/cart/interface'
import { IProductId } from '@/interfaces/product/interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ICart = {
  items: [],
  totalPrice: 0,
}

const calculateTotalPrice = (items: ICartItem[]) => {
  return items.reduce((total, item) => {
    const price = item.product.price || 0
    const quantity = item.quantity || 0
    return total + price * quantity
  }, 0)
}

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICartItem>) => {
      const { product, quantity } = action.payload
      const existingItemIndex = state.items?.findIndex((item) => item.product.id === product.id)

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += quantity
      } else {
        state.items.push({
          product: product,
          quantity: quantity,
        })
      }
      state.totalPrice = calculateTotalPrice(state.items)
    },

    removeProducts: (state, action: PayloadAction<IProductId>) => {
      state.items = state.items?.filter((item) => item.product.id !== action.payload) || []
      state.totalPrice = calculateTotalPrice(state.items)
    },

    clear: (state) => {
      state.totalPrice = calculateTotalPrice(initialState.items)
      return initialState
    },

    updateTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload
    },
  },
})

export const { addProduct, removeProducts, clear } = cart.actions

export default cart.reducer

import { ICart } from '@/interfaces/cart/interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ICart = {
  items: [],
  totalPrice: 0,
}

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      return {
        ...state,
        items: state.items.concat({
          product: action.payload,
          quantity: 1,
        }),
      }
    },

    removeProducts: (state, action: PayloadAction<IProductId>) => {
      return {
        ...state,
        items: state.items?.length ? state.items.filter((item) => item.product.id !== action.payload) : [],
      }
    },

    clear: () => {
      return initialState
    },

    increaseQuntityByOne: (state, action: PayloadAction<IProductId>) => {
      return initialState // TO DO
    },

    decreaseQuntityByOne: (state, action: PayloadAction<IProductId>) => {
      return initialState // TO DO
    },

    setQantity: (state, action: PayloadAction<IProductId>) => {
      return initialState // TO DO
    },
  },
})

export const { addProduct, removeProducts, clear, increaseQuntityByOne, decreaseQuntityByOne, setQantity } =
  cart.actions

export default cart.reducer

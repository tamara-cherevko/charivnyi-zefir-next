export interface ICartItem {
  product: IProduct
  quantity: number
}

export interface ICart {
  items: ICartItem[]
  totalPrice: number
}

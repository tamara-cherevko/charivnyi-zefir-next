export type IProductId = number
export type IProductPrice = number

export interface IProductImage {
  image: string
  position: number
}

export interface IProductCategory {
  id: ICategoryId
  title: string
}

export interface IProduct {
  id: IProductId
  name: string
  categories: IProductCategory[]
  images: IProductImage[]
  title: string
  delivery_option_id: number
  delivery_option_title: string
  tech_description: string
  short_description: string
  description: string
  slug: string
  price: number
  weight: string
  image: string
  position: number
  modifiers_min: number
  modifiers_max: number
  created_at: null
  updated_at: null
  isNew: 0 | 1
  netto: string
  shelf_life: string
  ingredients: string[]
  proteins: number
  fats: number
  carbohydrates: number
  caloric_value: number
}

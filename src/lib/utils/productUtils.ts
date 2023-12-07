import { IProductImage } from '@/interfaces/product/interface'

export const getMiainProductImage = (images: IProductImage[]) => images?.find((i) => i.position === 1)?.image

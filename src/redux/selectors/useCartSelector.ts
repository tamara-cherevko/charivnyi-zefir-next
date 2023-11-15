import { useAppSelector } from '../store'

export const useCartSelector = () => {
  return useAppSelector((state) => state.cartReducer)
}

export default useCartSelector

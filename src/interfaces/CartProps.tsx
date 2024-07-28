import { ProductInterface } from '../classes/ProductClass'

interface CartProps {
    products: ProductInterface[]
    setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>
}
  
export default CartProps
import { ProductInterface } from '../classes/ProductClass'

interface ProductDisplayProps {
    products: ProductInterface[];
    setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;
}
  
export default ProductDisplayProps
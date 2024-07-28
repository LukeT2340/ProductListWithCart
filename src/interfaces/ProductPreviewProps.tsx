import { ProductInterface } from '../classes/ProductClass'

interface ProductPreviewProps {
    product: ProductInterface;
    isSelected: Boolean;
    setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;
}
  
export default ProductPreviewProps
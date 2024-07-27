import { ProductInterface } from '../ProductClass'

interface ProductPreviewProps {
    product: ProductInterface;
  }
  
  const ProductPreview: React.FC<ProductPreviewProps> = ({ product }) => {
    return (
      <>
        <img className="rounded-[8px]" src={`/assets/images/image-${product.imageName}-desktop.jpg`} alt={product.shortTitle}></img>
      </>
    )
  }

export default ProductPreview
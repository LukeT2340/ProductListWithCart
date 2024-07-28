import ProductPreview from './ProductPreview'
import ProductDisplayProps from '../interfaces/ProductDisplayProps'

const ProductsDisplay: React.FC<ProductDisplayProps> = ({ products, setProducts}) => {
    // Check if a product is selected based on longTitle
    const isProductSelected = (productLongTitle: string) => {
        return products.some(product => product.longTitle === productLongTitle && product.amount > 0)
    }

    return (
      <>
        <h1 className='text-[40px] font-RedHat font-bold mb-[32px]'>Desserts</h1>
        <div className='grid grid-cols-3 gap-[24px]'>
          {products.map((product)=>(
            <ProductPreview key={product.longTitle} product={product} isSelected={isProductSelected(product.longTitle)} setProducts={setProducts}/>
          ))}
        </div>
      </>
    )
  }

export default ProductsDisplay
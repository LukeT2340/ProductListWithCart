import ProductPreview from './ProductPreview'
import ProductDisplayProps from '../interfaces/ProductDisplayProps'

const ProductsDisplay: React.FC<ProductDisplayProps> = ({ products, setProducts}) => {
    // Check if a product is selected based on longTitle
    const isProductSelected = (productLongTitle: string) => {
        return products.some(product => product.longTitle === productLongTitle && product.amount > 0)
    }

    return (
      <div className='flex flex-col lg:w-[800px]'>
        <h1 className='text-[40px] font-RedHat font-bold mb-[32px]'>Desserts</h1>
        <div className='grid md:grid-cols-3 grid-col-1 gap-[24px]'>
          {products.map((product)=>(
            <ProductPreview key={product.longTitle} product={product} isSelected={isProductSelected(product.longTitle)} setProducts={setProducts}/>
          ))}
        </div>
      </div>
    )
  }

export default ProductsDisplay
import productsList from '../ProductsList'
import ProductPreview from './ProductPreview'

function ProductsDisplay() {
    const products = productsList;
  
    return (
      <>
        <h1 className='text-3xl font-bold'>Desserts</h1>
        <div className='grid grid-cols-3 gap-[24px]'>
          {products.map((product)=>(
            <ProductPreview key={product.longTitle} product={product} />
          ))}
        </div>
      </>
    )
  }

export default ProductsDisplay
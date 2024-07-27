import productsList from '../ProductsList'
import ProductPreview from './ProductPreview'
import { ProductInterface } from '../ProductClass'
import { useState } from 'react'

function ProductsDisplay() {
    const products = productsList;
    const [selectedProducts, setSelectedProducts] = useState<ProductInterface[]>([]);

    // Check if a product is selected based on longTitle
    const isProductSelected = (productLongTitle: String) => {
        return selectedProducts.some(selectedProduct => selectedProduct.longTitle === productLongTitle);
    }


    return (
      <>
        <h1 className='text-[40px] font-RedHat font-bold mb-[32px]'>Desserts</h1>
        <div className='grid grid-cols-3 gap-[24px]'>
          {products.map((product)=>(
            <ProductPreview key={product.longTitle} product={product} isSelected={isProductSelected(product.longTitle)} setSelectedProducts={setSelectedProducts}/>
          ))}
        </div>
      </>
    )
  }

export default ProductsDisplay
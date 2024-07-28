import './App.css'
import ProductsDisplay from './components/ProductsDisplay'
import Cart from './components/Cart'
import productsList from './ProductsList'
import { useState } from 'react'

function App() {
  const [products, setProducts] = useState(productsList);

  return (
    <div className="flex flex-row bg-lightCream p-[88px] gap-[32px]">
      <div className='flex flex-col w-[800px]'>
        <ProductsDisplay products={products} setProducts={setProducts} />
      </div>
      <div className='w-[384px]'>
        <Cart products={products} />
      </div>
    </div>
  )
}

export default App

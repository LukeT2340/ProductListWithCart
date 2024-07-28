import './App.css'
import ProductsDisplay from './components/ProductsDisplay'
import Cart from './components/Cart'
import productsList from './ProductsList'
import { useState } from 'react'

function App() {
  const [products, setProducts] = useState(productsList);

  return (
    <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center bg-lightCream lg:p-[88px] gap-[32px] p-[24px] md:p-[40px] lg:p-[88px]">
      <ProductsDisplay products={products} setProducts={setProducts} />
      <Cart products={products} setProducts={setProducts} />
    </div>
  )
}

export default App

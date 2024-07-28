import './App.css'
import ProductsDisplay from './components/ProductsDisplay'
import Cart from './components/Cart'

function App() {
  return (
    <div className="flex flex-row bg-lightCream p-[88px] gap-[32px]">
      <div className='flex flex-col w-[800px]'>
        <ProductsDisplay />
      </div>
      <div className='w-[384px]'>
        <Cart />
      </div>
    </div>
  )
}

export default App

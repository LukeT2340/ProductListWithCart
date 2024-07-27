import './App.css'
import ProductsDisplay from './components/ProductsDisplay'

function App() {
  return (
    <div className="flex flex-row bg-lightCream py-[88px]">
      <div className='flex flex-col w-3/4 mx-[150px]'>
        <ProductsDisplay />
      </div>
      <div className='w-1/4'>
        <h1>test</h1>
      </div>
    </div>
  )
}

export default App

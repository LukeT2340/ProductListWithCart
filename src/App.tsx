import './App.css'
import ProductsDisplay from './components/ProductsDisplay'

function App() {
  return (
    <div className="flex flex-row bg-lightCream p-[88px]">
      <div className='flex flex-col w-[800px]'>
        <ProductsDisplay />
      </div>
      <div className='w-[384px]'>
        <h1>test</h1>
      </div>
    </div>
  )
}

export default App

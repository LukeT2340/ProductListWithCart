import { ProductInterface } from '../classes/ProductClass'
import React from 'react'
import ProductPreviewProps from '../interfaces/ProductPreviewProps'

const ProductPreview: React.FC<ProductPreviewProps> = ({ product, isSelected, setProducts }) => {
    // Handle increment product amount in cart
    const handleIncrementProductAmount = (product: ProductInterface) => {
        setProducts(prevProducts => 
            prevProducts.map(p =>
                p.longTitle === product.longTitle ? { ...p, amount: p.amount + 1 } : p
            )
        )
    }

    // Handle decre,emt product amount in cart
    const handleDecrementProductAmount = (product: ProductInterface) => {
        setProducts(prevProducts => 
            prevProducts.map(p =>
                p.longTitle === product.longTitle ?
                    p.amount > 0 ? 
                        { ...p, amount: p.amount - 1 } : p 
                        : p
            )
        )
    }
    

    return (
        <div className='flex flex-col font-RedHat'>
            <div className='relative flex justify-center items-center'>
                <img className={`rounded-[8px] z-1 mb-[22px] ${product.amount > 0 ? 'border-2 border-customRed' : ''}`} src={`/assets/images/image-${product.imageName}-desktop.jpg`} alt={product.shortTitle} />
                {isSelected ? (
                    <div className='px-5 flex z-2 items-center justify-between absolute bottom-0 bg-red-600 w-[160px] rounded-full h-[44px]'>
                        <button onClick={() => handleDecrementProductAmount(product)} className="flex justify-center items-center border w-[20px] h-[20px] border-white rounded-full">
                            <img src="/assets/images/icon-decrement-quantity.svg" alt="add item icon"></img>
                        </button>
                        <p className='text-[14px] text-white font-semibold'>{product.amount}</p>
                        <button onClick={() => handleIncrementProductAmount(product)} className="flex justify-center items-center border w-[20px] h-[20px] border-white rounded-full">
                            <img src="/assets/images/icon-increment-quantity.svg" alt="remove item icon"></img>
                        </button>
                    </div>
                ) : (
                    <button onClick={() => handleIncrementProductAmount(product)} className='gap-1 flex z-2 absolute border-rose-900 border-[1px] bottom-0 bg-white w-[160px] rounded-full h-[44px] justify-center items-center'>
                        <img src="/assets/images/icon-add-to-cart.svg" alt="Add item to cart icon"></img>
                        <p className='font-semibold text-[14px]'>Add to Cart</p>
                    </button>
                )}
            </div>
            <div className='flex flex-col text-left gap-1 mt-[16px]'>
                <p className='text-rose-900 text-[14px]'>{product.shortTitle}</p>
                <p className='text-black font-semibold text-[16px]'>{product.longTitle}</p>
                <p className='text-rose-700 text-[16px] font-semibold'>${product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default ProductPreview
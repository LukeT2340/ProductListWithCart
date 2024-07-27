import { ProductInterface } from '../ProductClass'
import React from 'react'

interface ProductPreviewProps {
    product: ProductInterface;
    isSelected: Boolean;
    setSelectedProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;
}
  
const ProductPreview: React.FC<ProductPreviewProps> = ({ product, isSelected, setSelectedProducts }) => {
    // Handle add to cart button clicked
    const handleAddToCartClicked = (product: ProductInterface) => {
        setSelectedProducts(prevProducts => [...prevProducts, product])
    }

    return (
        <div className='flex flex-col font-RedHat'>
            <div className='relative flex justify-center items-center'>
                <img className="rounded-[8px] z-1 mb-[22px]" src={`/assets/images/image-${product.imageName}-desktop.jpg`} alt={product.shortTitle} />
                {isSelected ? (
                    <div className='px-5 flex z-2 absolute bottom-0 bg-red-600 w-[160px] rounded-[999px] h-[44px]'>
                        <button>
                            <img src="/assets/images/icon-decrement-quantity.svg"></img>
                        </button>
                        <p></p>
                        <button>

                        </button>
                    </div>
                ) : (
                    <button onClick={() => handleAddToCartClicked(product)} className='gap-1 flex z-2 absolute border-rose-900 border-[1px] bottom-0 bg-white w-[160px] rounded-[999px] h-[44px] justify-center items-center'>
                        <img src="/assets/images/icon-add-to-cart.svg"></img>
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
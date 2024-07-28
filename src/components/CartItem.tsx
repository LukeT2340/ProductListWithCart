import CartItemInterface from "../interfaces/CartItemInterface"

const CartItem: React.FC<CartItemInterface> = ({ product, setProducts }) => {
    // Remove item from cart
    const removeItem = () => {
        setProducts(prevProducts => prevProducts.map((p) => (
            p.longTitle === product.longTitle ? { ...p, amount: 0 } : p
        )))
    }

    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col font-RedHat">
                    <p className="text-[14px] font-semibold">{product.longTitle}</p>
                    <div className="flex flex-row items-center gap-[8px]">
                        <p className="text-rose-600 font-semibold text-[14px]">{product.amount}x</p>
                        <p className="text-customRose">@ ${product.price.toFixed(2)}</p>
                        <p className="text-lightBrown text-[14px] font-semibold">${(product.price * product.amount).toFixed(2)}</p>
                    </div>
                </div>
                <button onClick={() => removeItem()} className="flex justify-center items-center rounded-full w-[18px] h-[18px] border border-customRose">
                    <img src="/assets/images/icon-remove-item.svg" alt="remove item icon" />
                </button>
            </div>
            <div className="w-full h-[0.2px] bg-rose-100"/>
        </>
    )
}

export default CartItem
import CartProps from "../interfaces/CartProps"
import CartItem from "./CartItem"
import { useState } from "react"
import ConfirmOrderModal from "./ConfirmOrderModal"

const Cart: React.FC<CartProps>= ({ products, setProducts }) => {
    const [showConfirmOrderModal, setConfirmOrderModal] = useState(false)

    // Calculate total items in cart
    const totalItems = products.reduce((totalItems, product) => {
        return totalItems + product.amount
    }, 0)

    // Calculate total price of all items in cart
    const totalPrice = products.reduce((totalCost, product) => {
        return totalCost + product.amount * product.price
    }, 0)

    return (
        <div className="flex flex-col font-RedHat bg-white rounded-[12px] text-left p-[24px] gap-[24px] w-full lg:w-[384px]">
            <h1 className="text-[24px] font-bold text-customRed">You Cart ({totalItems})</h1>
            {totalItems > 0 ? (
                <>
                    {products.map((product) => (
                        product.amount > 0 && (
                            <CartItem key={product.longTitle} product={product} setProducts={setProducts} />
                        )
                    ))}
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-[14px]">Order Total</p>
                        <p className="text-[24px] font-bold">${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className="bg-lightCream flex flex-row justify-center items-center rounded-[8px] p-[16px] gap-[8px]">
                        <img src="/assets/images/icon-carbon-neutral.svg" alt="carbon neutral icon" />
                        <p className="text-[14px]">This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
                    </div>
                    <button onClick={() => setConfirmOrderModal(true)} className="flex bg-customRed rounded-full text-white justify-center px-[24px] py-[16px] font-semibold text-[16px]">
                        Confirm Order
                    </button>
                </>
            ) : (
                <div className="flex flex-col items-center">
                    <img src="/assets/images/illustration-empty-cart.svg" alt="empty cart illustration" />
                    <p className="text-[14px] text-lightBrown font-semibold">Your added items appear here</p>
                </div>
            )}
            <ConfirmOrderModal showing={showConfirmOrderModal} products={products} />
        </div>
    )
}

export default Cart
import OrderItemInterface from "../interfaces/OrderItemInterface"
import React from "react"

const OrderItem: React.FC<OrderItemInterface> = ({ product }) => {
    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col font-RedHat">
                    <p className="text-[14px] font-semibold">{product.longTitle}</p>
                    <div className="flex flex-row items-center gap-[8px]">
                        <p className="text-rose-600 font-semibold text-[14px]">{product.amount}x</p>
                        <p className="text-customRose">@ ${product.price.toFixed(2)}</p>
                    </div>
                </div>
                <p className="text-[16px] font-semibold">${(product.price * product.amount).toFixed(2)}</p>
            </div>
            <div className="w-full h-[0.2px] bg-rose-100"/>
        </>
    )
}

export default OrderItem
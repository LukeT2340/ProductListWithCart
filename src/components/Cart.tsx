import CartProps from "../interfaces/CartProps"
import CartItem from "./CartItem"

const Cart: React.FC<CartProps>= ({ products }) => {
    // Calculate total items in cart
    const totalItems = products.reduce((totalItems, product) => {
        return totalItems + product.amount
    }, 0)

    return (
        <div className="font-RedHat bg-white w-[384px] rounded-[12px] text-left p-[24px]">
            <h1 className="text-[24px] font-bold text-customRed mb-[24px]">You Cart ({totalItems})</h1>
            {products.map((product) => (
                product.amount > 0 && (
                    <CartItem key={product.longTitle} product={product} />
                )
            ))}
        </div>
    )
}

export default Cart
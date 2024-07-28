import ConfirmOrderModalInterface from "../interfaces/ConfirmOrderModalInterface"
import OrderItem from "../components/OrderItem"

const ConfirmOrderModal: React.FC<ConfirmOrderModalInterface> = ({ showing, products }) => {
    // Calculate total price of all items in cart
    const totalPrice = products.reduce((totalCost, product) => {
        return totalCost + product.amount * product.price
    }, 0)

    // Handle start new order button clicked (refreshes page)
    const handleStartNewOrderButtonClicked = () => {
        window.location.reload()
    }

    return (
        <div className={`fixed font-RedHat bg-black bg-opacity-50 inset-0 flex justify-center items-center ${showing ? "block" : "hidden"}`}>
            <div className="flex flex-col bg-white p-[40px] rounded-[12px] w-[592px] mx-[16px] md:mx-0">
                <img className="w-[48px] h-[48px]" src="/assets/images/icon-order-confirmed.svg" alt="order confirmed" />
                <h1 className="text-[40px] font-bold">Order Confirmed</h1>
                <p className="text-customRose text-[16px]">We hope you enjoy your food!</p>
                <div className="bg-lightCream rounded-[8px] p-[24px] mt-[32px]">
                    <div className="flex flex-col gap-[16px]">
                        {products.map((product) => (
                            product.amount > 0 && (
                                <OrderItem key={product.longTitle} product={product} />
                            )
                        ))}
                    </div>
                    <div className="flex flex-row justify-between items-center mt-[24px]">
                        <p className="text-[14px]">
                            Order Total
                        </p>
                        <p className="text-[24px] font-bold">
                            ${totalPrice.toFixed(2)}
                        </p>
                    </div>
                </div>
                <button onClick={handleStartNewOrderButtonClicked} className="flex bg-customRed rounded-full text-white justify-center px-[24px] py-[16px] font-semibold text-[16px] mt-[32px]">
                    Start New Order
                </button>
            </div>
        </div>
    )
}

export default ConfirmOrderModal
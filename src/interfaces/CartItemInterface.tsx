import { ProductInterface } from "../classes/ProductClass"

interface CartItemInterface {
    product: ProductInterface
    setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>
}

export default CartItemInterface
import { ProductInterface } from "../classes/ProductClass"

interface ConfirmOrderModalInterface {
    showing: boolean
    products: ProductInterface[]
}

export default ConfirmOrderModalInterface
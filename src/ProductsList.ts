import { Product } from "./ProductClass";

const productsList = [
    new Product("Waffle with Berries", "Waffle", 6.50, "waffle"),
    new Product("Vanilla Bean Crème Brûlée", "Crème Brûlée", 7.00, "creme-brulee"),
    new Product("Macaron Mix of Five", "Macaron", 8.00, "macaron"),
    new Product("Classic Tiramisu", "Tiramisu", 5.50, "Tiramisu"),
    new Product("Pistachio Baklava", "Baklava", 4.00, "Baklava"),
    new Product("Lemon Meringue Pie", "Pie", 5.00, "meringue"),
    new Product("Red Velvet Cake", "Cake", 4.50, "cake"),
    new Product("Salted Caramel Brownie", "Brownie", 5.50, "Brownie"),
    new Product("Vanilla Panna Cotta", "Panna Cotta", 6.50, "panna-cotta")
]

// Add this line to make the file a module
export default productsList;
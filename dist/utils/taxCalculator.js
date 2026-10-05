import { Product } from "Product.ts";
export function calculateTax(product) {
    return product.getPriceWithTax();
}

import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { Product } from "./models/Product";
import { calculateTax } from "./utils/taxCalculator";

const products: Product[] = [
  new PhysicalProduct("P-001", "Laptop", 1000, 2.5),
  new DigitalProduct("D-001", "E-Book", 20, 5),
];

for (const product of products) {
  console.log(product.displayDetails());
  console.log(`Final price with tax: $${calculateTax(product).toFixed(2)}`);
  console.log("---");
}
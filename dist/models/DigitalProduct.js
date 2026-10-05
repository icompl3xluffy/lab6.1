import { Product } from "./Product.js";
export class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    get formattedFileSize() {
        return `${this.fileSize} MB`;
    }
    getPriceWithTax() {
        return this.price;
    }
    displayDetails() {
        return `${super.displayDetails()} | File Size: ${this.formattedFileSize}`;
    }
}

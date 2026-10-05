export class Product {
    sku;
    name;
    price;
    consructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `SKU: ${this.sku} | Name: ${this.name} | Price: $ ${this.price.toFixed(2)}`;
    }
    getPriceWithTax() {
        return this.price;
    }
}

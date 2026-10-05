export  class Product{
    consructor(
    sku:string,
    name:string,
    price:number
    )
}

displayDetails():string{
    return `SKU: ${this.sku} | Name: ${this.name} | Price: $ ${this.price.toFixed(2)}`;
}

getPriceWithTax(): number{
    return this.price;
}
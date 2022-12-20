const dayjs = require("dayjs");

const now = dayjs();

class Product {
  #inStock;
  #price;
  constructor(name, description, price, inStock = 0) {
    this.name = name;
    this.description = description;
    this.#price = price;
    this.#inStock = inStock;
    this.created_at = now.format("DD/MM/YYYY HH:mm:ss");
  }

  get inStock() {
    return this.#inStock;
  }

  set inStock(amount) {
    this.#inStock = amount;
  }

  get price() {
    return this.#price;
  }

  set price(amount) {
    this.#price = amount;
  }

  addToStock(amount) {
    this.inStock += amount;
  }
  removeFromStock(amount) {
    this.inStock -= amount;
  }

  get data() {
    return {
      name: this.name,
      description: this.description,
      price: this.#price,
      inStock: this.#inStock,
      created_at: this.created_at,
    };
  }
}

module.exports = Product;

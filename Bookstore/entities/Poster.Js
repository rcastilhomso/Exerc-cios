const Product = require("./Product");

class Poster extends Product {
  constructor(name, description, heigth, widht, price, inStock = 0) {
    super(name, description, price, inStock);
    this.heigth = heigth;
    this.widht = widht;
  }
}

module.exports = Poster;

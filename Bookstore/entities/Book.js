const Product = require("./Product");

class Book extends Product {
  #title;
  #synopsis;
  #genre;
  #pages;
  #author;
  constructor(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock = 0
  ) {
    super(`Livro: ${title}`, description, price, inStock);
    this.#title = title;
    this.#synopsis = synopsis;
    this.#genre = genre;
    this.#pages = pages;
    this.#author = author;
  }

  get data() {
    return {
      title: this.#title,
      synopsis: this.#synopsis,
      genre: this.#genre,
      pages: this.#pages,
      description: this.description,
      author: this.#author,
      price: this.price,
      inStock: this.inStock,
    };
  }
}

module.exports = Book;

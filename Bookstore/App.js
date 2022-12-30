const Database = require("./Database");
const Author = require("./entities/Author");
const User = require("./entities/User");
const Poster = require("./entities/Poster");
const Book = require("./entities/Book");
const Order = require("./entities/Order");

class App {
  static #database = new Database();

  createUser(id, name, email, password) {
    const user = new User(id, name, email, password);
    App.#database.saveUser(user);
  }

  createAuthor(name, nationality, bio) {
    const author = new Author(name, nationality, bio);
    App.#database.saveAuthor(author);
  }

  createPoster(name, description, heigth, widht, price, inStock) {
    const poster = new Poster(name, description, heigth, widht, price, inStock);
    App.#database.savePoster(poster);
  }

  createBook(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock
  ) {
    const book = new Book(
      title,
      synopsis,
      genre,
      pages,
      author,
      description,
      price,
      inStock
    );
    App.#database.saveBook(book);
  }

  addBook(book, quantity) {
    App.#database.addBookToStock(book, quantity);
  }

  removeBook(book, quantity) {
    App.#database.removeBookFromStock(book, quantity);
  }

  addPoster(poster, quantity) {
    App.#database.addPosterToStock(poster, quantity);
  }

  removePoster(poster, quantity) {
    App.#database.removePosterFromStock(poster, quantity);
  }

  createOrder(items, user) {
    const order = new Order(items, user);
    App.#database.saveOrder(order);
    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        this.removeBook(product.name, quantity);
      } else if (product instanceof Poster) {
        this.removePoster(product.name, quantity);
      }
    });
  }

  findAuthorByName(name) {
    return App.#database.findAuthorByName(name).name;
  }
  getUsers() {
    return App.#database.find("users");
  }

  getAuthors() {
    return App.#database.find("authors");
  }

  getPosters() {
    return App.#database.find("posters");
  }

  getBooks() {
    return App.#database.find("books");
  }

  getOrders() {
    return App.#database.find("orders");
  }

  showDatabase() {
    App.#database.showStorage();
  }
}

module.exports = App;

const Product = require("./entities/Product");

class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };
  find(key) {
    return this.#storage[key];
  }

  findAuthorByName(name) {
    return this.#storage.authors.find((a) => a.name === name);
  }

  findBookByName(name) {
    return this.#storage.books.find((b) => b.name === name);
  }

  findPosterByName(name) {
    return this.#storage.posters.find((p) => p.name === name);
  }

  findOrderByName(name) {
    return this.#storage.orders.find((o) => o.name === name);
  }

  findUserByName(name) {
    return this.#storage.users.find((u) => u.name === name);
  }

  findUserByEmail(email) {
    return this.#storage.users.find((u) => u.email === email);
  }

  saveAuthor(author) {
    if (this.findAuthorByName(author.name)) {
      throw new Error("Author already exists");
    }
    this.#storage.authors.push(author);
  }

  saveBook(book) {
    if (this.findBookByName(book.name)) {
      throw new Error("Book already exists");
    }
    this.#storage.books.push(book);
  }

  addBookToStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.addToStock(quantity);
  }

  removeBookFromStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.removeFromStock(quantity);
  }

  addPosterToStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.addToStock(quantity);
  }

  removePosterFromStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.removeFromStock(quantity);
  }

  savePoster(poster) {
    if (this.findPosterByName(poster.name)) {
      throw new Error("Poster already exists");
    }
    this.#storage.posters.push(poster);
  }
  saveOrder(order) {
    this.#storage.orders.push(order);
  }
  saveUser(user) {
    if (this.findUserByEmail(user.email)) {
      throw new Error("User already exists");
    }
    this.#storage.users.push(user);
  }

  showStorage() {
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.orders.map((o) => o.data));
    console.table(this.#storage.users);
  }
}

module.exports = Database;

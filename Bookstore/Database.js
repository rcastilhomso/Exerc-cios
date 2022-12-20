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

  addBookToStock(book, quantity) {
    if (!this.findBookByName(book.name)) {
      throw new Error("Book not found");
    }
    book?.addToStock(quantity);
  }

  removeBookFromStock(book, quantity) {
    if (!this.findBookByName(book.name)) {
      throw new Error("Book not found");
    }
    book?.removeFromStock(quantity);
  }
  savePoster(poster) {
    if (this.findPosterByName(poster.name)) {
      throw new Error("Poster already exists");
    }
    this.#storage.posters.push(poster);
  }
  saveOrder(order) {
    if (this.findOrderByName(order.name)) {
      throw new Error("Order already exists");
    }
    this.#storage.orders.push(order);
  }
  saveUser(user) {
    if (this.findUserByName(user.name)) {
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

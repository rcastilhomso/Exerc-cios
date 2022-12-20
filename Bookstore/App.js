const Database = require("./Database");
const Author = require("./entities/Author");
const User = require("./entities/User");

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

  getUsers() {
    return App.#database.find("users");
  }

  getAuthors() {
    return App.#database.find("authors");
  }

  get data() {
    return {
      users: this.getUsers(),
      authors: this.getAuthors(),
    };
  }
}

module.exports = App;

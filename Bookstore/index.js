const App = require("./App");

const app = new App();

app.createAuthor(
  "J. K. Rowling",
  "British",
  "J. K. Rowling is a British author."
);
app.createAuthor(
  "Stephen King",
  "American",
  "Stephen King is an American author."
);

const authors = app.getAuthors();

app.createBook(
  "Harry Potter and the Philosopher's Stone",
  "...",
  "Fantasy",
  223,
  authors[0],
  "...",
  19.99
);

const books = app.getBooks();

app.addBook(books[0].name, 5);

app.createPoster("harry-potter", "...", 30, 20, 9.99);

const posters = app.getPosters();

app.addPoster(posters[0].name, 5);

app.createUser("John", "john@doe.com", "123456");

const users = app.getUsers();

app.createOrder(
  [
    { product: books[0], quantity: 1 },
    { product: posters[0], quantity: 1 },
  ],
  users[0]
);

const orders = app.getOrders();

console.log(app.showDatabase());

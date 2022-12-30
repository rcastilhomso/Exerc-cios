const App = require("./App");

App.createUser("João", "joao@email.com");
App.createUser("Maria", "maria@email.com");
App.createUser("José", "jose@email.com");

console.log(App.users[0].account.balance);

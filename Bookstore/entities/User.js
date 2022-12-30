const dayjs = require("dayjs");

const now = dayjs();

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.created_at = now.format("DD/MM/YYYY HH:mm:ss");
  }
}

module.exports = User;

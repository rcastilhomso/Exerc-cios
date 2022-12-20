const dayjs = require("dayjs");

const now = dayjs();

class User {
  #password;
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
    this.created_at = now.format("DD/MM/YYYY HH:mm:ss");
  }

  get password() {
    return this.#password;
  }

  set password(newPassword) {
    this.#password = newPassword;
  }
}

module.exports = User;

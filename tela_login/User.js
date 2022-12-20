class User {
  #email;
  #password;
  constructor(email, password) {
    this.#email = email;
    this.#password = password;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  get password() {
    return this.#password;
  }

  set password(newPassword) {
    this.#password = newPassword;
  }
}

export default User;

const user = new User("raphael@castilho", "123456");

console.log(user.email);

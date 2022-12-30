const Deposit = require("./entities/Deposit");
const User = require("./entities/User");
const Withdraw = require("./entities/Withdraw");
const Transfer = require("./entities/Transfer");
const Loan = require("./entities/Loan");

class App {
  static #users = [];

  static findUser(email) {
    const user = App.#users.find((u) => u.email === email);
    return user ?? null;
  }

  static createUser(name, email) {
    if (this.findUser(email)) {
      throw new Error("O usuário já existe.");
    }
    const user = new User(name, email);
    App.#users.push(user);
    return user;
  }

  static deposit(email, value) {
    const user = this.findUser(email);
    if (!user) {
      throw new Error("O usuário não existe.");
    }
    const newDeposit = new Deposit(value);
    user.account.addDeposit(newDeposit);
  }

  static withdraw(email, value) {
    const user = this.findUser(email);
    if (!user) {
      throw new Error("O usuário não existe.");
    }
    const newWithdraw = new Withdraw(value);
    user.account.addWithdraw(newWithdraw);
  }

  static transfer(fromEmail, toEmail, value) {
    const fromUser = this.findUser(fromEmail);
    const toUser = this.findUser(toEmail);
    if (!fromUser || !toUser) {
      throw new Error("O usuário não existe.");
    }
    const newTransfer = new Transfer(fromUser, toUser, value);
    toUser.account.transfer(newTransfer);
    fromUser.account.transfer(newTransfer);
  }

  static takeLoan(email, value, numberOfInstallments) {
    const user = this.findUser(email);
    if (!user) {
      throw new Error("O usuário não existe.");
    }
    const newLoan = new Loan(value, numberOfInstallments);
    user.account.addLoan(newLoan);
  }

  static changeLoanFee(newFeePercentage) {
    Loan.feeTax = newFeePercentage;
  }

  static get users() {
    return App.#users;
  }
}

module.exports = App;

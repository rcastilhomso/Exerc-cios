const Installment = require("./Installment");

class Loan {
  static #feeTax = 1.05;

  constructor(value, installments) {
    this.value = value;
    this.isPaid = false;
    this.installments = [];
    for (let i = 1; i <= installments; i++) {
      this.installments.push(
        new Installment((value * Loan.#feeTax) / installments, i)
      );
    }
  }
  static get feeTax() {
    return Loan.#feeTax;
  }

  static set feeTax(feePercentage) {
    Loan.#feeTax = 1 + feePercentage / 100;
  }
}

module.exports = Loan;

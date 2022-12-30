class Account {
  #balance;

  constructor(user) {
    this.owner = user;
    this.#balance = 0;
    this.deposits = [];
    this.withdraws = [];
    this.transfers = [];
    this.loans = [];
  }

  get balance() {
    return this.#balance;
  }

  addDeposit(deposit) {
    this.#balance += deposit.value;
    this.deposits.push(deposit);
  }

  addLoan(loan) {
    this.#balance += loan.value;
    this.loans.push(loan);
  }

  addWithdraw(withdraw) {
    if (withdraw.value > this.#balance) {
      throw new Error("Saldo insuficiente");
    }
    this.#balance -= withdraw.value;
    this.withdraws.push(withdraw);
  }

  transfer(transfer) {
    if (transfer.value > transfer.fromUser.account.balance) {
      throw new Error("Saldo insuficiente");
    }
    if (transfer.toUser.email === this.owner.email) {
      this.#balance += transfer.value;
      this.transfers.push(transfer);
      return;
    }
    this.#balance -= transfer.value;
    this.transfers.push(transfer);
  }
}

module.exports = Account;

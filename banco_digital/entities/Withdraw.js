const dayjs = require("dayjs");

const date = dayjs();

class Withdraw {
  constructor(value) {
    this.value = value;
    this.date = date.format("DD/MM/YYYY HH:mm:ss");
  }
}

module.exports = Withdraw;

const dayjs = require("dayjs");

const date = dayjs();

class Transfer {
  constructor(fromUser, toUser, value) {
    this.toUser = toUser;
    this.fromUser = fromUser;
    this.value = value;
    this.date = date.format("DD/MM/YYYY HH:mm:ss");
  }
}

module.exports = Transfer;

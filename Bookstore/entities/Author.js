const dayjs = require("dayjs");

const now = dayjs();

class Author {
  constructor(name, nationality, bio) {
    this.name = name;
    this.nationality = nationality;
    this.bio = bio;
    this.created_at = now.format("DD/MM/YYYY HH:mm:ss");
  }
}

module.exports = Author;

import dayjs from "dayjs";

export class Comment {
  constructor(username, content) {
    this.username = username;
    this.content = content;
    this.createdAt = dayjs().format("DD/MM/YYYY HH:mm:ss");
  }
}

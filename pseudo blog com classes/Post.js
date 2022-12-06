import dayjs from "dayjs";
import { Comment } from "./Comment.js";

export class Post {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.comments = [];
    this.createdAt = dayjs().format("DD/MM/YYYY HH:mm:ss");
  }

  addComment(username, content) {
    this.comments.push(new Comment(username, content));
  }
}

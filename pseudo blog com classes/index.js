import { Author } from "./Author.js";

const raphael = new Author("Raphael");
const post = raphael.writePost("Meu primeiro Post", "Oi, mundo");

post.addComment("Cintia", "Muito bom!");
setTimeout(() => {
  post.addComment("Raphael", "Obrigado!");
  console.log(post.comments);
}, 2000);

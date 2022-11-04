/**
 Challenge:

 With the 5 blog post objects, display the `title` and `body`
properties of the first 5 posts on the browser page.
 
 Hints: 
 * Create a `div` in the HTML file to store these items
 * Loop over the items creating a string of HTML elements you 
   can then put into the div with `innerHTML`
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
      const postsArr = data.slice(0, 5);
      const postsHTML = postsArr.map((_, post) => {
          return `
          <h3>${postsArr[post].title}</h3>
          <p>${postsArr[post].body}</p>
          <hr>`;
      }).join("");
      document.querySelector("#container").innerHTML = postsHTML;
  }).catch((err) => {
      console.log(err);
  }
);

document.getElementById('new-post').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('post-title').value;
    const body = document.getElementById('post-content').value;
    const data = {
        title,
        body
    };  

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            document.getElementById("container").innerHTML = `
            <h3 class="blah">${post.title}</h3>
            <p>${post.body}</p>
            <hr />
            ${document.getElementById("container").innerHTML}
        `
        }).catch((err) => {
            console.log(err);
        }
    );
});
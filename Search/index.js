document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName("name");

    for (const element of allNamesDOMCollection) {
      const currentName = element.textContent.toLowerCase();
      if (currentName.includes(searchQuery)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  });

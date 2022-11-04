document.getElementById("searchInput").addEventListener("keyup", function (event) {
    let searchQuery = event.target.value.toLowerCase()
    let allNamesDOMCollection = document.getElementsByClassName("name")

    for (let index = 0; index < allNamesDOMCollection.length; index++) {
        const currentName = allNamesDOMCollection[index].textContent.toLowerCase()
        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[index].style.display = "block"
        } else {
            allNamesDOMCollection[index].style.display = "none"
        }
    }

})






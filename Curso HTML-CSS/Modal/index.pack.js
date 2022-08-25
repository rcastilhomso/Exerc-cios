const openBtn = document.getElementById("open-modal")
const closeBtn = document.getElementById("close-modal")
const overlay = document.getElementById("overlay")

openBtn.addEventListener("click", function () {
    overlay.style.display = "block";
})


closeBtn.addEventListener("click", function () {
    document.getElementById("overlay").style.display = "none";
})




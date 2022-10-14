/*
DESCRIPTION:
You job is to enable users to give a rating between 1 (bad) and 5 (great), 
and then display that rating in the form of an emoji. The users should give 
their ratings by pressing a key on their keyboards (the numbers 1 to 5). 
Here's the numbers' corresponding emojis:

5 = 😁
3 = 🙂
3 = 😐
2 = ☹️
1 = 🤬

event listeners, keyboard events, key codes, 
focus, focusout, DOM manipulation, tabindex

*/

const box = document.getElementById("box")
const text = document.getElementById("text")
let isFocus = false

box.addEventListener("focus", function () {
    text.textContent = "Type a number between 1 and 5"
    isFocus = true
    console.log(isFocus)
})

box.addEventListener("focusout", function () {
    text.textContent = "Click here to give your rating"
    isFocus = false
    console.log(isFocus)
})


box.addEventListener("keydown", function (evt) {
    if (isFocus) {
        if (evt.key === "1") {
            text.textContent = "🤬"
        }
        if (evt.key === "2") {
            text.textContent = "☹️"
        }
        if (evt.key === "3") {
            text.textContent = "😐"
        }
        if (evt.key === "4") {
            text.textContent = "🙂"
        }
        if (evt.key === "5") {
            text.textContent = "😁"
        }
    }

})











// Write your code here 👇



/*

DETAILED INSTRUCTIONS
1. Listen for keyboard events when the box has focus
2. Figure out which key the user pressed
3. If it's between 1 and 5, display an emoji in the box!

STRETCH GOALS:
- Animate the emoji onto the screen! Why not go crazy with multiple emojis? 
- Reset the entire app when box doesn't have focus anymore
- Can you improve the overall design?

*/

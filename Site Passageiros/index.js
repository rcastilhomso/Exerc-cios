
let count = 0
let countEl = document.getElementById("count-el")
let savedNumber = document.getElementById("saved-number")
function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

function decrement() {

    if (count <= 0) {

        count = 0

    }

    else
        count += - 1
    countEl.innerText = count


    console.log(count)
}

function save() {
    savedNumber.textContent += `${count} - `
    console.log(savedNumber)
    countEl.textContent = 0
}

function reset() {
    count = 0
    countEl.textContent = 0

}
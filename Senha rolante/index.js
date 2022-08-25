const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const num5 = document.getElementById("num5")
const num6 = document.getElementById("num6")
const message = document.getElementById("message")

num1Value = 0
num2Value = 0
num3Value = 0
num4Value = 0
num5Value = 0
num6Value = 0

num1.addEventListener("click", function () {
    if (num1Value < 9) {
        num1Value++
    } else {
        num1Value = 0
    }
    num1.textContent = num1Value
    unlocked()
})

num2.addEventListener("click", function () {
    if (num2Value < 9) {
        num2Value++
    } else {
        num2Value = 0
    }
    num2.textContent = num2Value
    unlocked()
})

num3.addEventListener("click", function () {
    if (num3Value < 9) {
        num3Value++
    } else {
        num3Value = 0
    }
    num3.textContent = num3Value
    unlocked()
})

num4.addEventListener("click", function () {
    if (num4Value < 9) {
        num4Value++
    } else {
        num4Value = 0
    }
    num4.textContent = num4Value
    unlocked()
})


num5.addEventListener("click", function () {
    if (num5Value < 9) {
        num5Value++
    } else {
        num5Value = 0
    }
    num5.textContent = num5Value
    unlocked()
})

num6.addEventListener("click", function () {
    if (num6Value < 9) {
        num6Value++
    } else {
        num6Value = 0
    }
    num6.textContent = num6Value
    unlocked()
})


function unlocked() {
    if (num1Value === 2 && num2Value === 6 && num3Value === 0 && num4Value === 4 && num5Value === 1 && num6Value === 9) {
        message.style.display = "block"

    } else {
        message.style.display = "none"
    }

}
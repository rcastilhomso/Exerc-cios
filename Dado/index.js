// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const container = document.getElementById("container")

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    // 1. Update the scores for each player
    // 2. Display the scores in their scoreboards

    if (player1Turn) {
        player1Score += randomNumber
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"

        player1Scoreboard.textContent = player1Score
    } else {
        player2Score += randomNumber
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        player2Scoreboard.textContent = player2Score
    }
    player1Turn = !player1Turn
    if (player1Score >= 20) {
        message.textContent = "Player 1 Wins!"
        endGame()
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 Wins!"
        endGame()
    }
})

resetBtn.addEventListener("click", resetGame)

function endGame() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    message.classList.add("win")
    container.classList.add("container-win")

}

function resetGame() {
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = ""
    player2Scoreboard.textContent = ""
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    message.textContent = "Player 1 turn"
    message.classList.remove("win")
    player1Turn = true
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    container.classList.remove("container-win")
}
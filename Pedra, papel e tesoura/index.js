document.addEventListener("DOMContentLoaded", function(event) {
    
let pcHandEl = document.getElementById("pc-hand")
let messageEl = document.getElementById("message")
let playerHandEl = document.getElementById("player-hand")
let playerHand = prompt("Pedra, papel ou tesoura?")

let indexPc = ["pedra", "papel", "tesoura"]

function startGame() {
    let randomNumber = Math.floor(Math.random() * 3)
    let handPc = indexPc[randomNumber]

    if (playerHand === "pedra" && handPc === "pedra") {
        playerHandEl.innerText = "Você escolheu " + playerHand
        
        messageEl.innerText = "Nós empatamos."

    }
    else if (playerHand === "pedra" && handPc === "tesoura") {
        messageEl.innerText = "Você ganhou."
    }

    else if (playerHand === "pedra" && handPc === "papel") {
        messageEl.innerText = "Eu ganhei."
    }

    else if (playerHand === "tesoura" && handPc === "tesoura") {
            messageEl.innerText = "Nós empatamos"

    }

    else if (playerHand === "tesoura" && handPc === "papel") {
        messageEl.innerText = "Você ganhou."

    }
    
    else if (playerHand === "tesoura" && handPc === "pedra") {
        messageEl.innerText = "Eu ganhei."

    }  

    else if (playerHand === "papel" && handPc === "papel") {
        messageEl.innerText = "Nós empatamos"

    }

    else if (playerHand === "papel" && handPc === "pedra") {
    messageEl.innerText = "Você ganhou."

    }

    else if (playerHand === "papel" && handPc === "tesoura") {
    messageEl.innerText = "Eu ganhei."

    }  

   return handPc
}

startGame()

playerHandEl.innerText = "Você colocou " + playerHand
pcHandEl.innerText = "Eu coloquei " + startGame()

})
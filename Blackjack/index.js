
let player = {
    name: "Raphael",
    chips: 1000
}

// const cards = {
//     deck1: {
//         clubs: {
//             two: 2,
//             three: 3,
//             four: 4,
//             five: 5,
//             six: 6,
//             seven: 7,
//             eight: 8,
//             nine: 9,
//             ten: 10,
//             jack: 10,
//             queen: 10,
//             king: 10,
//             ace: 11
//         },
//         hearts: {
//             two: 2,
//             three: 3,
//             four: 4,
//             five: 5,
//             six: 6,
//             seven: 7,
//             eight: 8,
//             nine: 9,
//             ten: 10,
//             jack: 10,
//             queen: 10,
//             king: 10,
//             ace: 11
//         },
//         spades: {
//             two: 2,
//             three: 3,
//             four: 4,
//             five: 5,
//             six: 6,
//             seven: 7,
//             eight: 8,
//             nine: 9,
//             ten: 10,
//             jack: 10,
//             queen: 10,
//             king: 10,
//             ace: 11
//         },
//         diamonds: {
//             two: 2,
//             three: 3,
//             four: 4,
//             five: 5,
//             six: 6,
//             seven: 7,
//             eight: 8,
//             nine: 9,
//             ten: 10,
//             jack: 10,
//             queen: 10,
//             king: 10,
//             ace: 11
//         }
//     }
// }


let cards = []
let cardsDealer = []
let imageCard1 = document.getElementById("image-card-1")
let imageCard2 = document.getElementById("image-card-2")
let firstCard = ""
let secondCard = ""
let firstCardDealer = ""
let secondCardDealer = ""
let sum = 0
let sumDealer = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let dealerEl = document.getElementById("dealer-el")



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": R$" + player.chips



function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}

function settingCards() {
    if (firstCard === 2) {
        imageCard1.src = "images/2_of_clubs.png"
    }

    if (firstCard === 3) {
        imageCard1.src = "images/3_of_clubs.png"
    }

    if (firstCard === 4) {
        imageCard1.src = "images/4_of_clubs.png"
    }

    if (firstCard === 5) {
        imageCard1.src = "images/5_of_clubs.png"
    }

    if (firstCard === 6) {
        imageCard1.src = "images/6_of_clubs.png"
    }

    if (firstCard === 7) {
        imageCard1.src = "images/7_of_clubs.png"
    }

    if (firstCard === 8) {
        imageCard1.src = "images/8_of_clubs.png"
    }

    if (firstCard === 9) {
        imageCard1.src = "images/9_of_clubs.png"
    }

    if (firstCard === 10) {
        imageCard1.src = "images/10_of_clubs.png"
    }

    if (firstCard === 11) {
        imageCard1.src = "images/ace_of_clubs.png"
    }

    if (secondCard === 2) {
        imageCard2.src = "images/2_of_clubs.png"
    }

    if (secondCard === 3) {
        imageCard2.src = "images/3_of_clubs.png"
    }

    if (secondCard === 4) {
        imageCard2.src = "images/4_of_clubs.png"
    }

    if (secondCard === 5) {
        imageCard2.src = "images/5_of_clubs.png"
    }

    if (secondCard === 6) {
        imageCard2.src = "images/6_of_clubs.png"
    }

    if (secondCard === 7) {
        imageCard2.src = "images/7_of_clubs.png"
    }

    if (secondCard === 8) {
        imageCard2.src = "images/8_of_clubs.png"
    }

    if (secondCard === 9) {
        imageCard2.src = "images/9_of_clubs.png"
    }

    if (secondCard === 10) {
        imageCard2.src = "images/10_of_clubs.png"
    }

    if (secondCard === 11) {
        imageCard2.src = "images/ace_of_clubs.png"
    }


}



function startGame() {
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    settingCards()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}


function renderGame() {
    cardsEl.innerText = "Cartas: "

    // for (let i = 0; i < cards.length; i++) {
    //     cardsEl.textContent += cards[i] + "    "
    // }

    if (sum <= 20) {
        message = ("Você quer tirar uma nova carta?")
    } else if (sum === 21) {
        message = ("Blackjack!")
        hasBlackJack = true
        player.chips = player.chips * player.chips
        playerEl.textContent = player.name + ": R$" + player.chips
    } else if (sum > 21) {
        message = ("Você perdeu!")
        isAlive = false

        player.chips = player.chips / 2
        playerEl.textContent = player.name + ": R$" + player.chips
    }


    sumEl.innerText = "Soma: " + sum
    messageEl.innerText = message
}

function newCard() {

    if (isAlive === true) {
        let card = getRandomCard()
        imageCard2.innerHTML = "<img src='images/card back red.png' class='card' id='image-card-2'/>"
        sum += card
        cards.push(card)
        renderGame()
    }

}

function stand() {
    let firstCardDealer = getRandomCard()
    let secondCardDealer = getRandomCard()
    cardsDealer.push(firstCardDealer)
    cardsDealer.push(secondCardDealer)
    dealerEl.innerText = cardsDealer
    let sumDealer = firstCardDealer + secondCardDealer
    if (sumDealer <= 18) {
        let newCardDealer = getRandomCard
        cardsDealer.push(newCardDealer)
        dealerEl.innerText = cardsDealer

    }
    console.log(sumDealer)

}




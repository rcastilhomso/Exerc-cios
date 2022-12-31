import { randomNumber, numeroParaTexto, traduzir } from "./utils.js";
import { CARDS } from "./constants.js";

const drawBtn = document.querySelector("#draw-card");
const newDeckBtn = document.querySelector("#new-deck");
const message = document.querySelector("#message");
const title = document.querySelector("#title");
const chancesMessage = document.querySelector("#chances-message");

const drawedCards = [];
const chances = 6;

let randomCard = null;
let chancesAtuais = chances;
let deckId = null;

function newDeck() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((response) => response.json())
    .then((data) => {
      reset();
      randomCard = traduzir(CARDS[randomNumber(0, CARDS.length - 1)]);
      title.textContent =
        randomCard === "Rainha"
          ? `Tente tirar uma ${randomCard}.`
          : `Tente tirar um ${randomCard}.`;
      const card = document.createElement("img");
      card.setAttribute("id", "card");
      card.setAttribute(
        "src",
        "https://opengameart.org/sites/default/files/card%20back%20red.png"
      );
      document.querySelector(".card-position").appendChild(card);
      deckId = data.deck_id;
      card.src =
        "https://opengameart.org/sites/default/files/card%20back%20red.png";
    })
    .catch((error) => {
      message.textContent = error;
    });
}

function drawCard() {
  if (deckId === null) {
    message.textContent = "Você precisa criar um novo baralho antes.";
    return;
  }
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((response) => response.json())
    .then((data) => {
      drawedCards.push(data.cards[0]);
      const card = document.querySelector("#card");
      card.src = data.cards[0].image;
      chancesAtuais -= 1;
      chancesMessage.textContent =
        chancesAtuais > 1
          ? `Você tem mais ${numeroParaTexto(chancesAtuais)} chances.`
          : `Você tem só mais ${numeroParaTexto(chancesAtuais)}  chance.`;
      if (traduzir(data.cards[0].value) === randomCard) {
        chancesMessage.textContent = "";
        message.textContent = "Parabéns! Você conseguiu.";
        drawBtn.style.display = "none";
        newDeckBtn.textContent = "Reembaralhar";
        showHand();
        return;
      }
      if (drawedCards.length >= chances) {
        chancesMessage.textContent = "";
        message.textContent = "Que pena. Você não conseguiu.";
        newDeckBtn.textContent = "Reembaralhar";
        showHand();
        drawBtn.style.display = "none";
        return;
      }
    });
}

function showHand() {
  document.querySelector(".card-position").innerHTML = "";
  document.querySelector(".hand").innerHTML = "";
  const divHand = document.querySelector(".hand");
  const handMessage = document.createElement("p");
  handMessage.setAttribute("class", "hand-message");
  handMessage.textContent =
    drawedCards.length > 1 ? "Suas cartas:" : "Sua carta:";
  divHand.appendChild(handMessage);
  drawedCards.forEach((card) => {
    const cardImg = document.createElement("img");
    cardImg.setAttribute("id", "hand-card");
    cardImg.setAttribute("src", card.image);
    divHand.appendChild(cardImg);
  });
}

newDeckBtn.addEventListener("click", newDeck);
drawBtn.addEventListener("click", drawCard);

function reset() {
  document.querySelector(".card-position").innerHTML = "";
  document.querySelector(".hand").innerHTML = "";
  drawedCards.length = 0;
  drawBtn.style.display = "block";
  message.textContent = "";
  chancesAtuais = chances;
  chancesMessage.textContent = `Você tem ${numeroParaTexto(
    chancesAtuais
  )} chances.`;

  deckId = null;
}

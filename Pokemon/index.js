const capturedPokemons = [];
const pokemons = new Array(150).fill(0).map((_, i) => i + 1);
const lvlArr = new Array(25).fill(0).map((_, i) => i + 1);

const TYPES = {
  GHOST: "Fantasma",
  PLANT: "Planta",
  FIRE: "Fogo",
  WATER: "Água",
  GRASS: "Grama",
  STEEL: "Aço",
  NORMAL: "Normal",
  FAIRY: "Fada",
  FIGHTING: "Lutador",
  FLYING: "Voador",
  POISON: "Venenoso",
  GROUND: "Terra",
  ROCK: "Pedra",
  BUG: "Inseto",
  DRAGON: "Dragão",
  PSYCHIC: "Psíquico",
  ELECTRIC: "Elétrico",
  ICE: "Gelo",
  DARK: "Sombrio",
};

function newPokemon() {
  return pokemons[random(pokemons)];
}

function play() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemon()}`)
    .then((response) => response.json())
    .then((data) => {
      data.lvl = random(lvlArr);
      const { name, types, sprites, lvl } = data;
      const type = translate(types[0].type.name, TYPES);
      const pokemon = upperCase(name);
      const hp = 5;
      if (capturedPokemons.length >= 6) {
        document.getElementById("activity").innerHTML = `
        <h3>Você formou um time pokémon!</h3>  
        <img id="ash" src="Pokemon-Ash-PNG-Free-Download.png" >
        <h3>Seu time é:</h3>
            ${capturedPokemons
              .map(
                (e) =>
                  `<img alt="An image of a ${e.name}" class="pokemon" src=${e.sprites.front_default}>`
              )
              .join("")}
            <br>
            <button class = "btn btn-dark" onclick="reload()">Reiniciar</button>
    `;
      } else {
        capturedPokemons.push(data);
        document.getElementById("activity").innerHTML = `
        <h3>Você capturou um ${pokemon} LVL ${lvl + 1}!</h3>
        <p>Ele é do tipo ${type}!</p> 
        <img alt="An image of a ${data.name}" class='pokemon' src="${
          sprites.front_default
        }" ><br>
        <p> HP: ${data.stats[hp].base_stat + lvl * 2}</p>
        <button class = "btn btn-dark" id="botao" onclick="play()">Jogue</button>
        <button class = "btn btn-dark" onclick="reload()">Reiniciar</button>
    `;
      }
    });
}

function random(element) {
  return Math.floor(Math.random() * element.length);
}

function upperCase(name) {
  return name[0].toUpperCase() + name.substring(1);
}

function translate(word, types) {
  return types[word.toUpperCase()] ?? word;
}

function reload() {
  window.location.reload();
}

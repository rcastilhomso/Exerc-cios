const capturedPokemons = [];
const pokemons = new Array(150).fill(0).map((_, i) => i + 1);
const lvlArr = new Array(25).fill(0).map((_, i) => i + 1);

function newPokemon() {
  return pokemons[random(pokemons)];
}

function play() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemon()}`)
    .then((response) => response.json())
    .then((data) => {
      data.lvl = random(lvlArr);
      const { name, types, sprites, lvl } = data;
      const type = traduzir(types[0].type.name);
      const pokemon = upperCase(name);
      if (capturedPokemons.length >= 6) {
        document.getElementById("activity").innerHTML = `
        <h3>Você formou um time pokémon!</h3>  
        <img id="ash" src="Pokemon-Ash-PNG-Free-Download.png" >
        <h3>Seu time é:</h3>
            ${capturedPokemons
              .map(
                (e) => `<img class="pokemon" src=${e.sprites.front_default}>`
              )
              .join("")}
            <br>
            <button onclick="reload()">Reiniciar</button>
    `;
      } else {
        capturedPokemons.push(data);
        document.getElementById("activity").innerHTML = `
        <h3>Você capturou um ${pokemon} LVL ${lvl + 1}!</h3>
        <p>Ele é do tipo ${type}!</p> 
        <img class='pokemon' src="${sprites.front_default}" ><br>
        <p> HP: ${data.stats[5].base_stat}</p>
        <button id="botao" onclick="play()">Jogue</button>
        <button onclick="reload()">Reiniciar</button>
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

function traduzir(type) {
  switch (type) {
    case "normal":
      return "Normal";
    case "fighting":
      return "Lutador";
    case "flying":
      return "Voador";
    case "poison":
      return "Veneno";
    case "ground":
      return "Terra";
    case "rock":
      return "Pedra";
    case "bug":
      return "Inseto";
    case "ghost":
      return "Fantasma";
    case "steel":
      return "Aço";
    case "fire":
      return "Fogo";
    case "water":
      return "Água";
    case "grass":
      return "Planta";
    case "electric":
      return "Elétrico";
    case "psychic":
      return "Psíquico";
    case "ice":
      return "Gelo";
    case "dragon":
      return "Dragão";
    case "dark":
      return "Sombrio";
    case "fairy":
      return "Fada";
    default:
      return type;
  }
}
function reload() {
  window.location.reload();
}

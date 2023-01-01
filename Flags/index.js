import { traduzir } from "./traduzir.js";

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  countries.forEach(createCountryCard);
}

function createCountryCard(country) {
  const card = document.createElement("div");
  card.setAttribute("class", "country");
  card.addEventListener("click", () => showInfo(card));

  const countryName = country.name.common;
  const name = document.createElement("h3");
  name.setAttribute("id", "name");
  name.setAttribute("class", "hide");
  name.textContent = traduzir(countryName);

  const flag = document.createElement("img");
  flag.setAttribute("src", country.flags.svg);

  const region = document.createElement("p");
  region.setAttribute("id", "region");
  region.setAttribute("class", "hide");
  region.textContent =
    country.region !== "Americas"
      ? `Continente: ${traduzir(country.region)}`
      : `Continente: ${traduzir(country.subregion)}`;

  card.append(name, flag, region);
  document.querySelector("#countries").append(card);
}

function showInfo(card) {
  card.querySelector("#name").classList.toggle("hide");
  card.querySelector("#region").classList.toggle("hide");
}

getCountries();

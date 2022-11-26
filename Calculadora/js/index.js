import { clear, copyToClipboard, inputKeys } from "./utils.js";
import { switchTheme } from "./theme.js";
import { calculate } from "./calculate.js";

const themeSwitcher = document.querySelector("#themeSwitcher");
const main = document.getElementById("main");
const root = document.querySelector(":root");
const input = document.querySelector("#input");
const resultInput = document.querySelector("#result ");

document.querySelectorAll(".charKey").forEach((btn) => {
  btn.addEventListener("click", () => {
    input.value += btn.dataset.value;
  });
});

input.addEventListener("keydown", inputKeys);

document.getElementById("clear").addEventListener("click", clear);

document.getElementById("equal").addEventListener("click", calculate);

themeSwitcher.addEventListener("click", switchTheme);

document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);

export { main, root, input, resultInput };

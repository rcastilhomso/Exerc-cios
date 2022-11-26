import { input, resultInput } from "./index.js";

export function clear() {
  input.value = "";
  input.focus();
  resultInput.value = "";
  resultInput.classList.remove("error");
}

const allowedKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  ".",
  "(",
  ")",
  " ",
];

export const copyToClipboard = (e) => {
  const button = e.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied!";
    button.classList.add("success");
    navigator.clipboard.writeText(resultInput.value);
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
};

export const inputKeys = (e) => {
  e.preventDefault();
  if (allowedKeys.includes(e.key)) {
    input.value += e.key;
  } else if (e.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  } else if (e.key === "Enter") {
    calculate();
  }
};

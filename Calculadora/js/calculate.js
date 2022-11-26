export function calculate() {
  resultInput.value = "OPERAÇÃO INVÁLIDA";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

import { input, resultInput } from "./index.js";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numeroParaTexto(numero) {
  const TABELA = {
    1: "uma",
    2: "duas",
    3: "três",
    4: "quatro",
    5: "cinco",
    6: "seis",
    7: "sete",
    8: "oito",
    9: "nove",
    10: "dez",
    11: "onze",
    12: "doze",
    13: "treze",
    14: "quatorze",
    15: "quinze",
    16: "dezesseis",
    17: "dezesete",
    18: "dezoito",
    19: "dezenove",
    20: "vinte",
  };

  return TABELA[numero];
}

function traduzir(string) {
  const tabela = {
    ACE: "Ás",
    KING: "Rei",
    QUEEN: "Rainha",
    JACK: "Valete",
    SPADES: "Paus",
    HEARTS: "Copas",
    DIAMONDS: "Ouros",
    CLUBS: "Espadas",
  };
  return tabela[string] ?? string;
}

export { randomNumber, numeroParaTexto, traduzir };

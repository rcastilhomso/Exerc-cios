const personagens = [
  {
    nome: "Luke Skywalker",
    altura: 172,
    peso: 77,
    anoNascimento: 19,
    afiliação: "Aliança Rebelde",
    raca: "Humano",
    genero: "Masculino",
    mundoNatal: "Tatooine",
  },
  {
    nome: "C-3PO",
    altura: 167,
    peso: 75,
    anoNascimento: 112,
    afiliação: "Aliança Rebelde",
    raca: "Droide",
    genero: "Não binário",
    mundoNatal: "Tatooine",
  },
  {
    nome: "R2-D2",
    altura: 96,
    peso: 32,
    raca: "Droide",
    anoNascimento: 33,
    afiliação: "Aliança Rebelde",
    genero: "Não binário",
    mundoNatal: "Naboo",
  },
  {
    nome: "Leia Organa",
    altura: 150,
    peso: 49,
    raca: "Humano",
    anoNascimento: 19,
    afiliação: "Aliança Rebelde",
    genero: "Feminino",
    mundoNatal: "Alderaan",
  },
  {
    nome: "Obi-Wan Kenobi",
    altura: 182,
    peso: 77,
    raca: "Humano",
    anoNascimento: 57,
    afiliação: "Aliança Rebelde",
    genero: "Masculino",
    mundoNatal: "Stewjon",
  },
  {
    nome: "Anakin Skywalker",
    altura: 188,
    peso: 84,
    raca: "Humano",
    anoNascimento: 41.9,
    afiliação: "Império Galáctico",
    genero: "Masculino",
    mundoNatal: "Tatooine",
  },
  {
    nome: "Chewbacca",
    altura: 228,
    peso: 112,
    raca: "Wookie",
    anoNascimento: 200,
    afiliação: "Aliança Rebelde",
    genero: "Masculino",
    mundoNatal: "Kashyyyk",
  },
  {
    nome: "Han Solo",
    altura: 180,
    peso: 80,
    raca: "Humano",
    anoNascimento: 29,
    afiliação: "Aliança Rebelde",
    genero: "Masculino",
    mundoNatal: "Corellia",
  },
  {
    nome: "Greedo",
    altura: 173,
    peso: 74,
    raca: "Rodiano",
    anoNascimento: 44,
    afiliação: "Império Galáctico",
    genero: "Masculino",
    mundoNatal: "Rodia",
  },
  {
    nome: "Jabba Desilijic Tiure",
    altura: 175,
    peso: 1.358,
    raca: "Hutt",
    anoNascimento: 600,
    afiliação: "Império Galáctico",
    genero: "Masculino",
    mundoNatal: "Nal Hutta",
  },
  {
    nome: "Yoda",
    altura: 66,
    peso: 17,
    raca: "Yoda's species",
    anoNascimento: 896,
    afiliação: "Aliança Rebelde",
    genero: "Masculino",
    mundoNatal: "Unknown",
  },
  {
    nome: "Palpatine",
    altura: 170,
    peso: 75,
    raca: "Humano",
    anoNascimento: 82,
    afiliação: "Império Galáctico",
    genero: "Masculino",
    mundoNatal: "Naboo",
  },
  {
    nome: "Boba Fett",
    altura: 183,
    peso: 78.2,
    raca: "Humano",
    anoNascimento: 31.5,
    afiliação: "Império Galáctico",
    genero: "Masculino",
    mundoNatal: "Kamino",
  },
  {
    nome: "IG-88",
    altura: 200,
    peso: 140,
    raca: "Droide",
    anoNascimento: 15,
    afiliação: "Império Galáctico",
    genero: "Não binário",
    mundoNatal: "Unknown",
  },
  {
    nome: "Bossk",
    altura: 190,
    peso: 113,
    raca: "Trandoshan",
    anoNascimento: 53,
    afiliação: "Império Galáctico",
    genero: "Masculino",
    mundoNatal: "Trandosha",
  },
  {
    nome: "Lando Calrissian",
    altura: 177,
    peso: 79,
    raca: "Humano",
    anoNascimento: 31,
    afiliação: "Aliança Rebelde",
    genero: "Masculino",
    mundoNatal: "Socorro",
  },
  {
    nome: "Lobot",
    altura: 175,
    peso: 79,
    raca: "Lobot",
    anoNascimento: 37,
    afiliação: "Império Galáctico",
    genero: "Masculino",
    mundoNatal: "Bespin",
  },
  {
    nome: "Ackbar",
    altura: 180,
    peso: 83,
    raca: "Mon Calamari",
    anoNascimento: 41,
    afiliação: "Aliança Rebelde",
    genero: "Masculino",
    mundoNatal: "Mon Cala",
  },
];

const planetasNatais = personagens.reduce((acc, personagem) => {
  acc[personagem.mundoNatal]
    ? acc[personagem.mundoNatal]++
    : (acc[personagem.mundoNatal] = 1);
  return acc;
}, {});

const racas = personagens.reduce((acc, personagem) => {
  if (acc[personagem.raca]) {
    acc[personagem.raca].push(personagem.nome);
  } else {
    acc[personagem.raca] = [personagem.nome];
  }
  return acc;
}, {});

const afiliações = personagens.reduce((acc, personagem) => {
  if (acc[personagem.afiliação]) {
    acc[personagem.afiliação].push(personagem.nome);
  } else {
    acc[personagem.afiliação] = [personagem.nome];
  }
  return acc;
}, {});

const personagensOrdenados = personagens.slice().sort((a, b) => {
  if (a.nome > b.nome) {
    return 1;
  } else if (b.nome > a.nome) {
    return -1;
  }
  return 0;
});

// console.log(planetasNatais);
// console.log(racas);
// console.log(afiliações);
console.log(personagensOrdenados);

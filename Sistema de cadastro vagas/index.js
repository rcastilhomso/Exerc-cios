const vagas = [];
let menu = ``;
do {
  mostraMenu();
  switch (menu) {
    case "1":
      listarVagas();
      break;
    case "2":
      cadastrarVaga();
      break;
    case "3":
      visualizarVaga();
      break;
    case "4":
      adicionarCandidato();
      break;
    case "5":
      excluirVaga();
      break;
    case "6":
      excluirCandididato();
      break;
    case "7":
      alert("Obrigado por utilizar o sistema de cadastro de vagas.");
      break;
    default:
      alert("Opção inválida!");
  }
} while (menu !== "7");

function listarVagas() {
  if (vagas.length === 0) {
    alert("Não há vagas cadastradas.");
  } else {
    let lista = ``;
    vagas.forEach((element, i) => {
      lista += `${i + 1} - ${element.nome} - R$ ${element.salario},00 - ${
        vagas[i].candidatos.length === 0
          ? "Sem candidatos"
          : `${vagas[i].candidatos.length} candidato(s)`
      }\n`;
    });
    alert(lista);
  }
}

function cadastrarVaga() {
  const vaga = {
    nome: prompt("Digite o nome da vaga:"),
    descricao: prompt("Digite a descrição da vaga:"),
    salario: prompt("Digite o salário da vaga:"),
    candidatos: [],
  };
  const confirmacao = confirm(`Você tem certeza que deseja cadastrar esta vaga?
  Nome: ${vaga.nome}
  Descrição: ${vaga.descricao}
  Salário: R$ ${vaga.salario},00  `);
  if (confirmacao) {
    vagas.push(vaga);
    alert("Vaga cadastrada com sucesso!");
  } else {
    alert("Operação cancelada.");
  }
}

function excluirVaga() {
  if (vagas.length === 0) {
    alert("Não há vagas cadastradas.");
    return;
  }
  const vagaExcluida = prompt("Digite o número da vaga que deseja excluir:");
  if (vagaExcluida > vagas.length) {
    alert("Vaga não encontrada.");
    return;
  }
  const vaga = vagas[vagaExcluida - 1];
  const confirmacao = confirm(
    `Você tem certeza que deseja excluir a vaga ${vagaExcluida}?
    Vaga: ${vaga.nome}
    Descrição: ${vaga.descricao}
    Salário: R$ ${vaga.salario},00
    Candidatos: ${
      vaga.candidatos.length === 0 ? "Sem candidatos" : vaga.candidatos
    }`
  );
  if (confirmacao) {
    vagas.splice(vagaExcluida - 1, 1);
    alert("Vaga excluída com sucesso!");
  } else {
    alert("Operação cancelada.");
  }
}

function visualizarVaga() {
  if (vagas.length === 0) {
    alert("Não há vagas cadastradas.");
    return;
  }
  const vaga = prompt("Digite o número da vaga que deseja visualizar:");
  if (!vaga) {
    alert("Operação cancelada.");
    return;
  }
  if (vaga > vagas.length) {
    alert("Vaga não encontrada.");
  } else {
    const candidatosEmTexto = vagas[vaga - 1].candidatos.join(", ");
    alert(`Vaga ${vaga} - ${vagas[vaga - 1].nome}
    Descrição: ${vagas[vaga - 1].descricao}
    Salário: R$ ${vagas[vaga - 1].salario},00
    Candidatos: ${
      candidatosEmTexto.length === 0 ? "Sem candidatos" : candidatosEmTexto
    }`);
  }
}

function adicionarCandidato() {
  if (vagas.length === 0) {
    alert("Não há vagas cadastradas.");
    return;
  }
  const candidato = prompt("Digite o nome do candidato:");
  const numeroVaga = prompt(
    "Digite o número da vaga que deseja cadastrar o candidato:"
  );
  const vaga = vagas[numeroVaga - 1];
  if (numeroVaga > vagas.length) {
    alert("numeroVaga não encontrada.");
  } else {
    const confirmacao = confirm(
      `Você tem certeza que deseja candidatar ${candidato} à vaga ${numeroVaga}?
      Vaga: ${vaga.nome}
      Descrição: ${vaga.descricao}
      Salário: R$ ${vaga.salario},00`
    );
    if (confirmacao) {
      vagas[numeroVaga - 1].candidatos.push(candidato);
      alert("Candidato cadastrado com sucesso!");
    } else {
      alert("Operação cancelada.");
    }
  }
}

function excluirCandididato() {
  if (vagas.length === 0) {
    alert("Não há vagas cadastradas.");
    return;
  }
  const numeroVaga = prompt(
    `Digite o número da vaga que deseja excluir um candidato`
  );
  const vaga = vagas[numeroVaga - 1];
  if (vagas.candidatos.length === 0) {
    alert("Não há candidatos cadastrados para esta vaga.");
    return;
  } else if (numeroVaga > vagas.length) {
    alert("Vaga não encontrada.");
    return;
  }
  const candidato = prompt("Digite o nome do candidato:");
  if (!vagas[numeroVaga - 1].candidatos.includes(candidato)) {
    alert("Candidato não encontrado.");
    return;
  } else {
    const confirmacao = confirm(
      `Você tem certeza que deseja excluir o candidato ${candidato} da vaga ${numeroVaga}?
    Vaga: ${vaga.nome}
    Descrição: ${vaga.descricao}
    Salário: R$ ${vaga.salario},00`
    );
    if (confirmacao) {
      const candidatoExcluido = vaga.candidatos.indexOf(candidato);
      vaga.candidatos.splice(candidatoExcluido, 1);
      alert("Candidato excluído com sucesso!");
      return;
    } else {
      alert("Operação cancelada.");
      return;
    }
  }
}

function mostraMenu() {
  menu = prompt(`Bem-vindo ao Sistema de Cadastro de vagas.
  Escolha uma opção:
  1 - Listar vagas disponíveis.
  2 - Cadastrar nova vaga.
  3 - Visualizar uma vaga.
  4 - Inscrever um candidato em uma vaga.
  5 - Excluir uma vaga.
  6 - Excluir um candidato de uma vaga.
  7 - Sair do sistema.`);
}

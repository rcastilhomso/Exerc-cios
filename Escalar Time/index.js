const jogadoresEscalados = [];

function escalar() {
  const ul = listaUl();
  const posicaoJogador = document.querySelector("#posicao-jogador").value;
  const nomeJogador = document.querySelector("#nome-jogador").value;
  const numeroJogador = document.querySelector("#numero-jogador").value;
  const jogadoresEscaladosElemento = document.querySelector(
    "#jogadores-escalados"
  );
  if (!posicaoJogador || !nomeJogador || !numeroJogador) {
    alert("Preencha todos os campos!");
    return;
  } else {
    switch (posicaoJogador) {
      case "goleiro":
        const goleiroEscalado = document.createElement("li");
        goleiroEscalado.textContent = `${nomeJogador} - ${numeroJogador}`;
        goleiroEscalado.id = `jogador-${numeroJogador}`;
        jogadoresEscalados.push("jogador");
        jogadoresEscaladosElemento.textContent = jogadoresEscalados.length;
        ul.goleiro.appendChild(goleiroEscalado);
        limpaCampos();
        break;
      case "lateral-direito":
        const lateralDireitoEscalado = document.createElement("li");
        lateralDireitoEscalado.textContent = `${nomeJogador} - ${numeroJogador}`;
        lateralDireitoEscalado.id = `jogador-${numeroJogador}`;
        jogadoresEscalados.push("jogador");
        jogadoresEscaladosElemento.textContent = jogadoresEscalados.length;
        ul.lateralDireito.appendChild(lateralDireitoEscalado);
        limpaCampos();
        break;
      case "zagueiro":
        const zagueiroEscalado = document.createElement("li");
        zagueiroEscalado.textContent = `${nomeJogador} - ${numeroJogador}`;
        zagueiroEscalado.id = `jogador-${numeroJogador}`;
        jogadoresEscalados.push("jogador");
        jogadoresEscaladosElemento.textContent = jogadoresEscalados.length;
        ul.zagueiro.appendChild(zagueiroEscalado);
        limpaCampos();
        break;
      case "lateral-esquerdo":
        const lateralEsquerdoEscalado = document.createElement("li");
        lateralEsquerdoEscalado.textContent = `${nomeJogador} - ${numeroJogador}`;
        lateralEsquerdoEscalado.id = `jogador-${numeroJogador}`;
        jogadoresEscalados.push("jogador");
        jogadoresEscaladosElemento.textContent = jogadoresEscalados.length;
        ul.lateralEsquerdo.appendChild(lateralEsquerdoEscalado);
        limpaCampos();
        break;
      case "volante":
        const volanteEscalado = document.createElement("li");
        volanteEscalado.textContent = `${nomeJogador} - ${numeroJogador}`;
        volanteEscalado.id = `jogador-${numeroJogador}`;
        jogadoresEscalados.push("jogador");
        jogadoresEscaladosElemento.textContent = jogadoresEscalados.length;
        ul.volante.appendChild(volanteEscalado);
        limpaCampos();
        break;
      case "meia":
        const meiaEscalado = document.createElement("li");
        meiaEscalado.textContent = `${nomeJogador} - ${numeroJogador}`;
        meiaEscalado.id = `jogador-${numeroJogador}`;
        jogadoresEscalados.push("jogador");
        jogadoresEscaladosElemento.textContent = jogadoresEscalados.length;
        ul.meia.appendChild(meiaEscalado);
        limpaCampos();
        break;
      case "atacante":
        const atacanteEscalado = document.createElement("li");
        atacanteEscalado.textContent = `${nomeJogador} - ${numeroJogador}`;
        atacanteEscalado.id = `jogador-${numeroJogador}`;
        jogadoresEscalados.push("jogador");
        jogadoresEscaladosElemento.textContent = jogadoresEscalados.length;
        ul.atacante.appendChild(atacanteEscalado);
        limpaCampos();
        break;
    }
  }
}

function removerJogador() {
  const ul = listaUl();
  const numeroJogadorRemovido = document.querySelector(
    "#numero-jogador-removido"
  ).value;
  const jogadoresEscaladosElemento = document.querySelector(
    "#jogadores-escalados"
  );

  if (!numeroJogadorRemovido) {
    alert("Digite o número do jogador que deseja remover!");
    return;
  }
  const elementoRemovido = document.querySelector(
    `#jogador-${numeroJogadorRemovido}`
  );
  if (elementoRemovido) {
    elementoRemovido.remove();
  } else {
    alert("Jogador não encontrado!");
  }
  limpaCampos();
  jogadoresEscalados.pop();
  jogadoresEscaladosElemento.textContent = jogadoresEscalados.length;
}

function limpaCampos() {
  document.querySelector("#posicao-jogador").selectedIndex = 0;
  document.querySelector("#nome-jogador").value = "";
  document.querySelector("#numero-jogador").value = "";
  document.querySelector("#numero-jogador-removido").value = "";
}

function listaUl() {
  return {
    goleiro: document.querySelector(".goleiro-ul"),
    lateralDireito: document.querySelector(".lateral-direito-ul"),
    zagueiro: document.querySelector(".zagueiro-ul"),
    lateralEsquerdo: document.querySelector(".lateral-esquerdo-ul"),
    volante: document.querySelector(".volante-ul"),
    meia: document.querySelector(".meia-ul"),
    atacante: document.querySelector(".atacante-ul"),
  };
}

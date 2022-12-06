caixa = {
  1: 0,
  2: 0,
  5: 0,
  10: 0,
  20: 0,
};

do {
  menu = prompt(`Sistema de trocos: 

    Escolha um ação: 
    1 - Adicionar caixa
    2 - Verificar caixa
    3 - Realizar pagamento
    4 - Sair`);

  switch (menu) {
    case "1":
      const valor = prompt("Digite o valor a ser adicionado");
      const confirmacao = confirm(
        `Você deseja adicionar o valor de R$ ${valor} ao caixa?`
      );
      if (confirmacao) {
        let rest = valor;
        caixa["20"] += Math.floor(rest / 20);
        caixa["10"] += Math.floor((rest % 20) / 10);
        caixa["5"] += Math.floor((rest % 10) / 5);
        caixa["2"] += Math.floor((rest % 5) / 2);
        caixa["1"] += Math.floor((rest % 2) / 1);
        alert("Valor adicionado com sucesso!");
      } else {
        alert("Valor não adicionado!");
      }
      break;
    case "2":
      alert(`Caixa:
        ${Object.keys(caixa)
          .map((valor) => {
            return `R$ ${valor}: ${caixa[valor]}
    `;
          })
          .join("")}
        `);
      break;
    case "3":
      const valorCompra = prompt("Digite o valor da compra");
      const valorPago = prompt("Digite o valor pago");
      const troco = valorPago - valorCompra;
      let rest = troco;
      caixa["20"] -= Math.floor(rest / 20);
      caixa["10"] -= Math.floor((rest % 20) / 10);
      caixa["5"] -= Math.floor((rest % 10) / 5);
      caixa["2"] -= Math.floor((rest % 5) / 2);
      caixa["1"] -= Math.floor((rest % 2) / 1);
      alert(`O troco é de R$ ${troco}`);
      break;
    case "4":
      alert("Saindo...");
  }
} while (menu != 4);

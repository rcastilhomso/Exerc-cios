let menu = "";
const imoveis = [];

do {
  menu = prompt(`Imóveis cadastrados: ${imoveis.length}

    Escolha um ação: 
    1 - Cadastrar imóvel
    2 - Listar imóveis
    3 - Sair`);

  switch (menu) {
    case "1":
      const imovel = {
        nomeProprietario: prompt("Digite o nome do proprietário"),
        quantidadeQuartos: prompt("Digite a quantidade de quartos"),
        quantidadeBanheiros: prompt("Digite a quantidade de banheiros"),
        possuiGaragem: confirm("Possui garagem?"),
      };
      const confirmacao = confirm(`Você deseja cadastrar o imóvel?

      Nome do proprietário: ${imovel.nomeProprietario}
      Quantidade de quartos: ${imovel.quantidadeQuartos}
      Quantidade de banheiros: ${imovel.quantidadeBanheiros}
      Possui garagem: ${imovel.possuiGaragem ? "Sim" : "Não"}
      `);

      if (confirmacao) {
        alert("Imóvel cadastrado com sucesso!");
        imoveis.push(imovel);
      } else {
        alert("Imóvel não cadastrado!");
      }
      break;
    case "2":
      alert(`Imóveis cadastrados:
        ${imoveis
          .map((imovel, index) => {
            return `Imóvel ${index + 1}:
            Nome do proprietário: ${imovel.nomeProprietario}
            Quantidade de quartos: ${imovel.quantidadeQuartos}
            Quantidade de banheiros: ${imovel.quantidadeBanheiros}
            Possui garagem: ${imovel.possuiGaragem ? "Sim" : "Não"}
            
            `;
          })
          .join("")}
        `);
      break;
    case "3":
      alert("Saindo...");
  }
} while (menu != 3);

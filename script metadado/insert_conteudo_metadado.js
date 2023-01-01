"use strict";
import excelToJson from "convert-excel-to-json";

const data = excelToJson({
  sourceFile: "classe_medicamento.xlsx",
  columnToKey: {
    A: "id",
    B: "classe 1",
    C: "classe 2",
    D: "classe 3",
    E: "classe 4",
    F: "classe 5",
    G: "classe 6",
    H: "classe 7",
    I: "classe 8",
  },
  sheets: ["Medicamentos"],
});

const exemplo = [
  {
    id: "1",
    "classe 1": ["anti-inflamatório"],
    "classe 2": ["analgésico"],
  },
];

function organizaClasses() {
  const conteudo = data.Medicamentos.map((medicamento) => {
    const classes = [];
    for (let i = 1; i <= 8; i++) {
      const classe = medicamento[`classe ${i}`];
      if (classe && !classes.includes(classe)) {
        classes.push(classe);
      }
    }
    return {
      id: medicamento.id,
      classes,
    };
  });
  return conteudo.slice(1);
}

function separaClasses(conteudo) {
  return conteudo.map((conteudo) => {
    return conteudo.classes.map((classe) => {
      return {
        id: conteudo.id,
        classe: classe.charAt(0).toUpperCase() + classe.slice(1),
      };
    });
  });
}

// console.log(separaClasses(organizaClasses()));

function geraScriptConteudoMetadado(conteudos) {
  let script = "";
  conteudos.forEach((conteudo) => {
    script += conteudo
      .map((conteudo) => {
        return (
          "INSERT INTO `pebmedapps`.`conteudo_metadado` (id_conteudo, id_tipo_metadado, nivel) SELECT " +
          conteudo.id +
          ", id, 'PRINCIPAL' FROM 	`pebmedapps`.`tipo_metadado` WHERE valor =" +
          " '" +
          conteudo.classe +
          "';\n"
        );
      })
      .sort()
      .join("\n");
  });
  return script;
}

function geraScriptAreaDeAtuacao(conteudos) {
  let script = "";
  const classes = [];
  conteudos.forEach((conteudo) => {
    conteudo.forEach((conteudo) => {
      if (!classes.includes(conteudo.classe)) {
        classes.push(conteudo.classe);
      }
    });
  });

  classes.forEach((classe) => {
    script +=
      "INSERT INTO `pebmedapps`.`tipo_metadado_area_atuacao` (id_tipo_metadado, id_area_atuacao) SELECT id, 8 FROM `pebmedapps`.`tipo_metadado` WHERE valor =" +
      " '" +
      classe +
      "';\n";
  });
  return script;
}

console.log(geraScriptConteudoMetadado(separaClasses(organizaClasses())));

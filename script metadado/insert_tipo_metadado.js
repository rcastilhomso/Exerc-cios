"use strict";
import excelToJson from "convert-excel-to-json";

const result = excelToJson({
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

function organizaClasses() {
  const classes = result.Medicamentos.map((medicamento) => {
    const classes = [];
    for (let i = 1; i <= 8; i++) {
      const classe = medicamento[`classe ${i}`];
      if (classe) {
        classes.push(classe);
      }
    }
    return classes;
  });

  const classesSemHeader = classes.slice(1);

  const classesSeparadas = classesSemHeader.reduce((acc, classe) => {
    classe.forEach((c) => {
      if (!acc.includes(c)) {
        acc.push(c);
      }
    });
    return acc;
  }, []);
  const classesComLetraMaiscula = classesSeparadas.map((classe) => {
    return classe.charAt(0).toUpperCase() + classe.slice(1);
  });

  const classesUnicas = classesComLetraMaiscula.reduce((acc, classe) => {
    if (!acc.includes(classe)) {
      acc.push(classe);
    }
    return acc;
  }, []);

  return classesUnicas;
}

function geraScript(classes) {
  return classes
    .map((classe) => {
      return (
        "INSERT INTO `pebmedapps`.`tipo_metadado` (`tipo`, `valor`) VALUES ('CLASSE_MEDICAMENTO' , " +
        `'${classe}');`
      );
    })
    .sort()
    .join("\n");
}

console.log(geraScript(organizaClasses()));

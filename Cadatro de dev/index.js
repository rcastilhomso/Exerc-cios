function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.textContent = text;
  label.htmlFor = htmlFor;
  return label;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const addTechBtn = document.getElementById("addTechBtn");
const form = document.getElementById("devForm");
const developers = [];
let inputRows = 0;

addTechBtn.addEventListener("click", (e) => {
  const stacksInputs = document.getElementById("stackInputs");
  const newRow = document.createElement("li");
  inputRows++;
  newRow.id = `inputRow-${inputRows}`;
  newRow.className = "inputRow";

  const techNameLabel = createLabel("Nome: ", `techName-${inputRows}`);
  const techNameInput = createInput(
    `techName-${inputRows}`,
    "",
    "techName",
    "text",
    "Ex: ReactJS"
  );

  const expLabel = createLabel(" Experiência: ", `exp-${inputRows}`);
  expLabel.className = "m-2";
  techNameInput.className = "ms-2";

  newRow.append(techNameLabel, techNameInput, expLabel);
  stacksInputs.appendChild(newRow);

  expTime.forEach((element, i) => {
    const radio = createInput(
      `exptime-${inputRows}.${i + 1}`,
      element,
      `expTime-${inputRows}`,
      "radio"
    );
    radio.className = "m-2";
    const label = createLabel(element, `exptime-${inputRows}.${i + 1}`);
    newRow.appendChild(radio);
    newRow.appendChild(label);
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remover";
  removeBtn.className = "btn btn-outline-danger m-2";
  removeBtn.addEventListener("click", (e) => {
    const row = e.target.parentNode;
    row.remove();
  });
  newRow.appendChild(removeBtn);
});

const expTime = ["0 a 2 anos", "2 a 5 anos", "5 a 10 anos", "10+ anos"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullNameInput = document.getElementById("fullname");
  const inputRows = document.querySelectorAll(".inputRow");
  const technologies = [];
  inputRows.forEach((row) => {
    const techName = row.querySelector("input[name='techName']").value;
    const expTime = row.querySelector("input[name^='expTime']:checked").value;
    technologies.push({ techName, expTime });
  });
  const newDev = {
    fullName: fullNameInput.value,
    technologies,
  };
  developers.push(newDev);
  console.log(developers);

  fullNameInput.value = "";
  inputRows.forEach((row) => {
    row.remove();
  });
});

import { updateBalance } from "../index.js";

function createTransactionContainer(id) {
  const container = document.createElement("div");
  container.classList.add("transaction");
  container.id = `transaction-${id}`;

  return container;
}

const formater = Intl.NumberFormat("pt-BR", {
  compactDisplay: "long",
  currency: "BRL",
  style: "currency",
});

function createTransactionTitle(name) {
  const title = document.createElement("span");
  title.classList.add("transaction-title");
  title.textContent = `${name}: `;

  return title;
}

function createTransactionAmount(value) {
  const span = document.createElement("span");
  const formatedAmount = formater.format(value);

  if (value > 0) {
    span.textContent = formatedAmount;
    span.classList.add("credit");
  } else {
    span.textContent = formatedAmount;
    span.classList.add("debit");
  }

  return span;
}

function createEditTransactionButton(transaction) {
  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Editar";
  button.addEventListener("click", () => {
    document.querySelector("#id").value = transaction.id;
    document.querySelector("#name").value = transaction.name;
    document.querySelector("#amount").value = transaction.amount;
  });

  return button;
}

function createDeleteTransactionButton(id) {
  const button = document.createElement("button");
  button.classList.add("btn", "btn-danger");
  button.textContent = "Deletar";
  button.addEventListener("click", async () => {
    await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    });

    document.querySelector(`#transaction-${id}`).remove();

    updateBalance();
  });

  return button;
}

export {
  createTransactionContainer,
  createTransactionTitle,
  createTransactionAmount,
  createEditTransactionButton,
  createDeleteTransactionButton,
};

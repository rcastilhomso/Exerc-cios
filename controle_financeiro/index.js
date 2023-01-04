import {
  createTransactionContainer,
  createTransactionTitle,
  createTransactionAmount,
  createEditTransactionButton,
  createDeleteTransactionButton,
} from "./components/create.js";

import { Transaction } from "./entities/Transaction.js";

const transactions = [];
const formater = Intl.NumberFormat("pt-BR", {
  compactDisplay: "long",
  currency: "BRL",
  style: "currency",
});

async function saveTransaction(e) {
  e.preventDefault();

  const id = document.querySelector("#id").value;
  const name = document.querySelector("#name").value;
  const amount = Number(document.querySelector("#amount").value);
  const newTransaction = new Transaction(id, name, amount);

  if (id) {
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    });

    const transaction = await response.json();
    const indexToRemove = transactions.findIndex((t) => t.id === id);
    transactions.splice(indexToRemove, 1, transaction);
    document.querySelector(`#transaction-${id}`).remove();

    renderTransaction(transaction);
    updateBalance();
    return;
  }
  const response = await fetch("http://localhost:3000/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, amount }),
  });

  const result = await response.json();
  transactions.push(result);
  renderTransaction(result);

  e.target.reset();
  updateBalance();
}

document.querySelector("form").addEventListener("submit", saveTransaction);

function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id);
  const title = createTransactionTitle(transaction.name);
  const amount = createTransactionAmount(transaction.amount);
  const editButton = createEditTransactionButton(transaction);
  const deleteButton = createDeleteTransactionButton(transaction.id);

  container.append(title, amount, editButton, deleteButton);
  document.querySelector("#transactions").append(container);
}

async function getTransactions() {
  return await fetch("http://localhost:3000/transactions").then((res) =>
    res.json()
  );
}

export function updateBalance() {
  const balanceSpan = document.querySelector("#balance");
  const balance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  balanceSpan.textContent = formater.format(balance);
}

async function setup() {
  const results = await getTransactions();
  transactions.push(...results);
  transactions.forEach(renderTransaction);
  updateBalance();
}

document.addEventListener("DOMContentLoaded", setup);

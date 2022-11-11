const mesas = [];
const numeroMesa = document.getElementById("numero-mesa");

function novaMesa() {
  if (!numeroMesa.value) {
    alert("Digite o número da mesa!");
    return;
  }
  const mesa = {
    numero: numeroMesa.value,
    pedidos: [],
    total: 0,
  };
  numeroMesa.value = "";
  mesas.push(mesa);
  listarMesas();
}

function listarMesas() {
  document.getElementById("mesas-atendidas").textContent = mesas
    .map((mesa) => mesa.numero)
    .join(", ");
}

function fecharMesa() {
  const mesa = mesas.indexOf(
    mesas.find((mesa) => mesa.numero === numeroMesa.value)
  );
  if (!mesas[mesa] || !numeroMesa.value) {
    alert("Mesa não encontrada");
    numeroMesa.value = "";
    return;
  }
  alert(`Mesa fechada com sucesso!
  Valor total: R$ ${mesas[mesa].total}`);
  mesas.splice(mesa, 1);
  numeroMesa.value = "";
  listarMesas();
}

function adicionarPedido() {
  const mesa = mesas.find((mesa) => mesa.numero === numeroMesa.value);
  const pedido = {
    nome: document.getElementById("nome-item").value,
    valor: document.getElementById("valor-item").value,
  };
  if (!pedido.nome || !mesa) {
    alert("Dados Inválidos");
    return;
  }
  mesa.pedidos.push(pedido);
  mesa.total += Number(pedido.valor);
  numeroMesa.value = "";

  document.getElementById("nome-item").value = "";
  document.getElementById("valor-item").value = "";
}

function listarPedidosMesa() {
  const mesa = mesas.find((mesa) => mesa.numero === numeroMesa.value);
  if (!mesa) {
    alert("Mesa não encontrada");
    numeroMesa.value = "";
    return;
  }
  numeroMesa.value = "";
  const listaPedidos = mesa.pedidos
    .map((pedido) => [`${pedido.nome} - R$ ${pedido.valor}`])
    .join(", \n");
  alert(`Pedidos: 
  ${listaPedidos}
  
  Valor total: R$ ${mesa.total}`);
}

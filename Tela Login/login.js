const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const user = document.getElementById("new-user").value;
  const password = document.getElementById("new-password").value;

  if (user === "" || password === "") {
    alert("Preencha todos os campos!");
    return;
  }
  localStorage.setItem(`user`, user);
  localStorage.setItem("password", password);
  document.getElementById("new-user").value = "";
  document.getElementById("new-password").value = "";
  document.getElementById("overlay").style.display = "none";
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  const userStorage = localStorage.getItem("user");
  const passwordStorage = localStorage.getItem("password");

  if (user === "" || password === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (user !== userStorage || password !== passwordStorage) {
    alert("Usuário ou senha incorretos!");
    return;
  }

  alert("Login realizado com sucesso!");
  document.getElementById("user").value = "";
  document.getElementById("password").value = "";
});

const openBtn = document.getElementById("cadastro");
const closeBtn = document.getElementById("register-btn");
const overlay = document.getElementById("overlay");

openBtn.addEventListener("click", function () {
  overlay.style.display = "block";
});

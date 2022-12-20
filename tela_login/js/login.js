const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("new-email").value;
  const password = document.getElementById("new-password").value;

  if (email === "" || password === "") {
    alert("Preencha todos os campos!");
    return;
  }
  const user = new User(email, password);
  localStorage.setItem(`email`, email);
  localStorage.setItem(`password`, password);
  document.getElementById("new-email").value = "";
  document.getElementById("new-password").value = "";
  document.getElementById("overlay").style.display = "none";
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const localStorageEmail = localStorage.getItem("email");
  const localStoragePassword = localStorage.getItem("password");

  if (email === "" || password === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (email !== localStorageEmail || password !== localStoragePassword) {
    alert("Usuário ou senha incorretos!");
    return;
  }

  alert("Login realizado com sucesso!");
  window.location.href = "./home.html";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

const openBtn = document.getElementById("cadastro");
const overlay = document.getElementById("overlay");

openBtn.addEventListener("click", function () {
  overlay.style.display = "block";
});

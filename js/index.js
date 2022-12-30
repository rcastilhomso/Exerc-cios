function validateEmail(email) {
  if (!email) {
    const err = new Error("Email não pode ser vazio");
    err.input = `email`;
    throw err;
  }
  if (!email.match(/\w{2,}@[a-zA-z]{2,}\.[a-zA-Z]{2,}/)) {
    const err = new Error("Email inválido");
    err.input = `email`;
    throw err;
  }
}

function validatePassword(password) {
  if (
    password.length < 9 ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/[\d]/) ||
    !password.match(/[^a-zA-Z0-9]/)
  ) {
    const err = new Error(
      "Senha deve ter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
    );
    err.input = `password`;
    throw err;
  }
}

const user = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
};

function resetFormStyles() {
  user.name.classList.remove("error");
  user.name.classList.remove("success");
  user.email.classList.remove("error");
  user.email.classList.remove("success");
  user.password.classList.remove("error");
  user.password.classList.remove("success");
  document.querySelector("#email-error").textContent = "";
  document.querySelector("#password-error").textContent = "";
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  resetFormStyles();
  try {
    user.name.classList.add("success");
    validateEmail(user.email.value);
    user.email.classList.add("success");
    validatePassword(user.password.value);
    user.password.classList.add("success");
  } catch (err) {
    user[err.input].classList.add("error");
    document.querySelector(`#${err.input}-error`).textContent = err.message;
  }
  console.log(user);
});

function showPassword() {
  const password = user.password;
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

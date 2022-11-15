const darkBtn = document.getElementById("darkBtn");
const lightBtn = document.getElementById("lightBtn");
const switchBtn = document.getElementById("switchBtn");
isLight = true;

darkBtn.addEventListener("click", () => {
  if (isLight) {
    document.body.classList.add("is-dark");
    document.body.classList.remove("is-light");
    isLight = false;
  }
});

lightBtn.addEventListener("click", () => {
  if (!isLight) {
    document.body.classList.add("is-light");
    document.body.classList.remove("is-dark");

    isLight = true;
  }
});

switchBtn.addEventListener("click", () => {
  if (!isLight) {
    document.body.classList.add("is-light");
    document.body.classList.remove("is-dark");

    isLight = true;
  } else {
    document.body.classList.add("is-dark");
    document.body.classList.remove("is-light");

    isLight = false;
  }
});

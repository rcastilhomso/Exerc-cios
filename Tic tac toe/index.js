const boardRegions = document.querySelectorAll("#gameBoard span");
let vBoard = [];
let turnPlayer = "";

function updateTitle() {
  const playerInput = document.getElementById(turnPlayer);
  document.getElementById("turnPlayer").innerText = playerInput.value;
}

function initializeGame() {
  const player1Input = document.getElementById("player1");
  const player2Input = document.getElementById("player2");

  if (!player1Input.value || !player2Input.value) {
    alert("Digite os nomes dos jogadores");
    return;
  }
  vBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  turnPlayer = "player1";
  document.querySelector(
    "h2"
  ).innerHTML = `Vez de: <span id="turnPlayer"></span>`;
  updateTitle();
  boardRegions.forEach((region) => {
    region.classList.remove("win");
    region.classList.add("cursor-pointer");
    region.textContent = "";
    region.addEventListener("click", handleBoardClick);
    region.style.userSelect = "none";
  });
}
function disableRegion(element) {
  element.removeEventListener("click", handleBoardClick);
  element.classList.remove("cursor-pointer");
}

function handleBoardClick(e) {
  const region = e.currentTarget.dataset.region;
  const rowColumnPair = region.split(".");
  const row = rowColumnPair[0];
  const column = rowColumnPair[1];
  if (turnPlayer === "player1") {
    vBoard[row][column] = "X";
    e.currentTarget.textContent = "X";
  } else {
    vBoard[row][column] = "O";
    e.currentTarget.textContent = "O";
  }
  disableRegion(e.currentTarget);
  console.clear();
  console.table(vBoard);
  const winRegions = getWinRegions();
  if (winRegions.length > 0) {
    handleWin(winRegions);
  } else if (vBoard.flat().includes("")) {
    turnPlayer = turnPlayer === "player1" ? "player2" : "player1";
    updateTitle();
  } else {
    document.querySelector("h2").innerText = "Deu velha!";
    document.getElementById("start").textContent = "Recomeçar";
  }
}
document.getElementById("start").addEventListener("click", initializeGame);

function getWinRegions() {
  const winRegions = [];
  if (
    vBoard[0][0] &&
    vBoard[0][0] === vBoard[0][1] &&
    vBoard[0][0] === vBoard[0][2]
  )
    winRegions.push("0.0", "0.1", "0.2");
  if (
    vBoard[1][0] &&
    vBoard[1][0] === vBoard[1][1] &&
    vBoard[1][0] === vBoard[1][2]
  )
    winRegions.push("1.0", "1.1", "1.2");
  if (
    vBoard[2][0] &&
    vBoard[2][0] === vBoard[2][1] &&
    vBoard[2][0] === vBoard[2][2]
  )
    winRegions.push("2.0", "2.1", "2.2");
  if (
    vBoard[0][0] &&
    vBoard[0][0] === vBoard[1][0] &&
    vBoard[0][0] === vBoard[2][0]
  )
    winRegions.push("0.0", "1.0", "2.0");
  if (
    vBoard[0][1] &&
    vBoard[0][1] === vBoard[1][1] &&
    vBoard[0][1] === vBoard[2][1]
  )
    winRegions.push("0.1", "1.1", "2.1");
  if (
    vBoard[0][2] &&
    vBoard[0][2] === vBoard[1][2] &&
    vBoard[0][2] === vBoard[2][2]
  )
    winRegions.push("0.2", "1.2", "2.2");
  if (
    vBoard[0][0] &&
    vBoard[0][0] === vBoard[1][1] &&
    vBoard[0][0] === vBoard[2][2]
  )
    winRegions.push("0.0", "1.1", "2.2");
  if (
    vBoard[0][2] &&
    vBoard[0][2] === vBoard[1][1] &&
    vBoard[0][2] === vBoard[2][0]
  )
    winRegions.push("0.2", "1.1", "2.0");
  return winRegions;
}

function handleWin(winRegions) {
  winRegions.forEach((region) => {
    const [row, column] = region.split(".");
    boardRegions[row * 3 + parseInt(column)].classList.add("win");
  });
  boardRegions.forEach((region) => {
    disableRegion(region);
  });
  document.querySelector(
    "h2"
  ).innerHTML = `<span id="turnPlayer"></span> venceu!`;
  updateTitle();
  document.getElementById("start").textContent = "Recomeçar";
  return;
}

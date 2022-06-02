console.log("Welcome to backend of Tic Tac Toe");
let turn = "O";
let gameOver = false;

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

const checkWin = () => {
  let boxes = document.getElementsByClassName("xo");
  let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  arr.forEach((i) => {
    if (
      boxes[i[0]].textContent === boxes[i[1]].textContent &&
      boxes[i[1]].textContent === boxes[i[2]].textContent &&
      boxes[i[0]].textContent !== ""
    ) {
      gameOver = true;
      document.querySelector(".chance").textContent = boxes[i[0]].textContent + " WON !";
      document.getElementById("gif").style.width = "200px";
    }
  });
};

let boxes = document.getElementsByClassName("container");
Array.from(boxes).forEach((e) => {
  let stri = e.getElementsByClassName("xo")[0];
  e.addEventListener("click", () => {
    console.log(stri.textContent);
    if (stri.textContent === "") {
      stri.textContent = turn;
      turn = changeTurn();
      checkWin();
      if (gameOver !== true) {
        document.getElementsByClassName("chance")[0].textContent =
          "Turn for " + turn;
      }
    }
  });
});

reset.addEventListener("click", () => {
  let boxes = document.querySelectorAll(".xo");
  Array.from(boxes).forEach((e) => {
    e.textContent = "";
  });
  turn = "O";
  gameOver = false;
  document.getElementsByClassName("chance")[0].textContent = "Turn of " + turn;
  document.getElementById("gif").style.width="0px";
});

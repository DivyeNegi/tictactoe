console.log("Welcome to backend of Tic Tac Toe");
let turn = "O";
let gameOver = false;

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

const checkWin = () => {
  let boxes = document.getElementsByClassName("xo");
  let arr = [
    [0, 1, 2,0,17.5,0],
    [3, 4, 5,0,50,0],
    [6, 7, 8,0,66+17.5,0],
    [0, 3, 6,-33,50,90],
    [1, 4, 7,50,0,90],
    [2, 5, 8,33,50,90],
    [0, 4, 8,0,50,45],
    [6, 4, 2,0,50,135],
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
      document.getElementsByClassName("chance")[0].style.fontWeight="700";
      let line=document.getElementsByClassName("line")[0];
      line.style.width="100%";
      console.log("translate("+high*i[3]*0.01+"px,"+high*i[4]*0.01+"px) rotate("+i[5]+"deg);");
      line.style.webkitTransform="translate("+high*i[3]*0.01+"px,"+high*i[4]*0.01+"px) rotate("+i[5]+"deg)";
    }
  });
};

let boxes = document.getElementsByClassName("container");
let high=document.getElementsByClassName("grid")[0].clientHeight;
console.log(high)
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
  let line=document.getElementsByClassName("line")[0];
  line.style.width='0%'
  turn = "O";
  gameOver = false;
  document.getElementsByClassName("chance")[0].textContent = "Turn of " + turn;
  document.getElementsByClassName("chance")[0].style.fontWeight = "400";
  document.getElementById("gif").style.width="0px";
});

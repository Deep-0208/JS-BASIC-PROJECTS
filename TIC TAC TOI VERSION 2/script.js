let btns = document.querySelectorAll(".btn");
let newBtn = document.querySelector(".new-btn");
let resetBtn = document.querySelector(".reset-btn");
let PlayerO = true;
let msgBox = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  PlayerO = true;
  msgBox.classList.remove("hide")
  enableBtns();
  msg.innerText = "";
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (PlayerO) {
      btn.innerText = "O";
      PlayerO = false;
    } else {
      btn.innerText = "X";
      PlayerO = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});

const disableBtns = () => {
  btns.forEach((btn) => {
    btn.disabled = true;
  });
};

const enableBtns = () => {
  btns.forEach((btn) => {
    btn.disabled = false;
    btn.innerText = "";
  });
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msgBox.classList.remove("hide")

};

const checkWinner = () => {
  for (const pattern of winPatterns) {
    let pos1val = btns[pattern[0]].innerText;
    let pos2val = btns[pattern[1]].innerText;
    let pos3val = btns[pattern[2]].innerText;
    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        disableBtns();
        console.log(pos1val)
        showWinner(pos1val);
        return;
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", () => {
  newBtn.style.display = "none"
});



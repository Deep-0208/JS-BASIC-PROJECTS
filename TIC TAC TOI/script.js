let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnO = true; // PlayerO

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

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turnO === true) {
            btn.innerText = "O";
            turnO = false;
        } else {
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true; 
        checkWinner();
    });
});

const disableBtns = () => {
    btns.forEach(btn => {
        btn.disabled = true;
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}`;
    document.getElementById("hide").style.display = "block"; 
    disableBtns(); // Disable all buttons when a winner is declared
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner is ", pos1);
                showWinner(pos1);
                disableBtns(); // Ensure all buttons are disabled
                return; // Exit the function after finding a winner
            }
        }
    }
};

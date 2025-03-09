let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userPeraScore = document.querySelector("#user-score");
let compPeraScore = document.querySelector("#comp-score");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawGame = () => {
  msg.innerText = "Game was draw! Play again.";
  msg.style.backgroundColor = "black";
};

const showWinnwer = (userWin, compChoice, userChoice) => {
  if (userWin) {
    userScore++;
    userPeraScore.innerText = userScore;
    msg.innerText = `You Win !Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    compScore++;
    compPeraScore.innerText = compScore;
    msg.innerText = `You lose.Your ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "Red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Game Draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor , paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock , scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //userchoice = scissor
      //paper ,rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinnwer(userWin, compChoice, userChoice);
  }
};

choices.forEach((choice) => {
  let userChoice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    playGame(userChoice);
  });
});

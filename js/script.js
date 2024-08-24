const cancleBtn = document.querySelector(".close-btn");
const rulesBtn = document.querySelector(".rule-btn");
const gameRules = document.querySelector(".game-rules");

const comuterScore = document.getElementsByClassName("comp-score")[0];
const userScore = document.getElementsByClassName("user-score")[0];

let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
let yourScore = parseInt(localStorage.getItem("yourScore")) || 0;

comuterScore.innerText = computerScore;
userScore.innerText = yourScore;

// this for changing value of score

const choice = document.querySelectorAll(".bar");

//  This code for computer choices
function getComputer() {
  const computerChoices = ["rock", "paper", "scissor"];
  return computerChoices[Math.floor(Math.random() * 3)];
}
// This code for User Choice
choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    PlayGame(userChoice);
  });
});

// Code for Whole Game
const PlayGame = (userChoice) => {
  console.log("userchoice", userChoice);
  const compChoice = getComputer();
  console.log("computerchoice", compChoice);

  if (userChoice === compChoice) {
    console.log("It's a Draw!");
    localStorage.setItem("userChoice", userChoice);
    localStorage.setItem("computerChoice", compChoice);
    redirect("draw.html");
  } else if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "scissor" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "rock")
  ) {
    console.log("You win!");
    yourScore += 1;
    userScore.innerText = yourScore;
    localStorage.setItem("yourScore", yourScore);
    localStorage.setItem("userChoice", userChoice);
    localStorage.setItem("computerChoice", compChoice);
    redirect("win.html");
  } else {
    console.log("Computer wons!");
    computerScore += 1;
    comuterScore.innerText = computerScore;
    localStorage.setItem("computerScore", computerScore);
    localStorage.setItem("userChoice", userChoice);
    localStorage.setItem("computerChoice", compChoice);
    redirect("lose.html");
  }
};

cancleBtn.addEventListener("click", () => {
  cancleBtn.style.visibility = "hidden";
  gameRules.style.visibility = "hidden";
});
rulesBtn.addEventListener("click", () => {
  cancleBtn.style.visibility = "visible";
  gameRules.style.visibility = "visible";
});

function redirect(page) {
  window.location = `./pages/${page}`;
}

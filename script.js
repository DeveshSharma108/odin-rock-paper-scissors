let powerON = true;
const emoji = { rock: "🪨", paper: "📄", scissors: "✂️", default: "❔" };

let computerScore = 0;
let playerScore = 0;

const controlButtons = document.querySelectorAll(".control-buttons .button");
const resetButton = document.querySelector(".system-buttons #reset");
const powerButton = document.querySelector(".system-buttons #power");

const playerScoreSpan = document.querySelector(".player-score span");
const computerScoreSpan = document.querySelector(".computer-score span");

const playerChoiceDisplay = document.querySelector(".player-choice-display p");
const computerChoiceDisplay = document.querySelector(
  ".computer-choice-display p"
);

const informationAreaDisplay = document.querySelector(".information-area p");

controlButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const choice = btn.dataset.choice;
    playGame(getplayerChoice(choice), getComputerChoice());
  });
});

resetButton.addEventListener("click", reset);
powerButton.addEventListener("click", togglePower);

function getComputerChoice() {
  const choices = {
    0: "rock",
    1: "paper",
    2: "scissors",
  };

  const randomKey = Math.floor(Math.random() * 3);
  const computerChoice = choices[String(randomKey)];

  return computerChoice;
}

function getplayerChoice(playerChoice) {
  return playerChoice;
}

function reset() {
  playerScore = 0;
  computerScore = 0;

  playerChoiceDisplay.textContent = "❔";
  computerChoiceDisplay.textContent = "❔";

  informationAreaDisplay.textContent = "Choose your weapon...";
  playerScoreSpan.textContent = `${playerScore}/5`;
  computerScoreSpan.textContent = `${computerScore}/5`;
}

function togglePower() {
  powerON = !powerON;
}

function playGame(playerChoice, computerChoice) {
  if (!powerON) {
    return;
  }
  if (playerScore >= 5 || computerScore >= 5) {
    return;
  }

  playRound(playerChoice, computerChoice);

  function playRound(playerChoice, computerChoice) {
    let winner = null;
    let msg;

    playerChoiceDisplay.textContent = emoji[playerChoice];
    computerChoiceDisplay.textContent = emoji[computerChoice];

    switch (true) {
      case playerChoice === computerChoice:
        winner = null;
        break;
      case playerChoice === "rock" && computerChoice === "scissors":
        winner = "H";
        break;

      case playerChoice === "paper" && computerChoice === "rock":
        winner = "H";
        break;

      case playerChoice === "scissors" && computerChoice === "paper":
        winner = "H";
        break;

      default:
        winner = "C";
        break;
    }

    if (!winner) {
      msg = `It's a tie.`;
    } else if (winner === "H") {
      playerScore += 1;
      msg = `Player wins!`;
    } else {
      computerScore += 1;
      msg = `CPU wins!`;
    }

    informationAreaDisplay.textContent = msg;
    playerScoreSpan.textContent = `${playerScore}/5`;
    computerScoreSpan.textContent = `${computerScore}/5`;
  }
}

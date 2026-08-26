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

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice (case insensitive)");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  let winner = null;
  let msg;

  switch (true) {
    case humanChoice === "rock" && computerChoice === "scissors":
      winner = "H";
      break;

    case humanChoice === "paper" && computerChoice === "rock":
      winner = "H";
      break;

    case humanChoice === "scissors" && computerChoice === "paper":
      winner = "H";
      break;

    case humanChoice === "scissors" && computerChoice === "rock":
      winner = "C";
      break;

    case humanChoice === "rock" && computerChoice === "paper":
      winner = "C";
      break;

    case humanChoice === "paper" && computerChoice === "scissors":
      winner = "C";
      break;

    default:
      break;
  }

  if (!winner) {
    msg = `Human(${humanChoice})  vs Computer(${computerChoice})
    It's a tie.
    Human: ${humanScore} | Computer: ${computerScore}`;
  } else if (winner === "H") {
    humanScore += 1;
    msg = `Human(${humanChoice})  vs Computer(${computerChoice})
    ${humanChoice} beats ${computerChoice}.
    Human: ${humanScore} | Computer: ${computerScore}`;
  } else {
    computerScore += 1;
    msg = `Human(${humanChoice})  vs Computer(${computerChoice})
    ${computerChoice} beats ${humanChoice}.
    Human: ${humanScore} | Computer: ${computerScore}`;
  }

  console.log(msg);
}

let computerScore = 0;
let humanScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

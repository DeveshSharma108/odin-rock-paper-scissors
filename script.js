function getComputerChoice() {
  const choices = {
    0: "rock",
    1: "paper",
    2: "scissors",
  };

  const randomKey = Math.floor(Math.random() * 3);
  const compChoice = choices[String(randomKey)];

  return compChoice;
}

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice (case insensitive)");
  return humanChoice;
}

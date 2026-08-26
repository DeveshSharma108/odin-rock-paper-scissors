function getComputerChoice() {
  const choices = {
    0: "rock",
    1: "paper",
    2: "scissors",
  };

  const randomKey = Math.floor(Math.random() * 3);
  const choice = choices[String(randomKey)];

  return choice;
}

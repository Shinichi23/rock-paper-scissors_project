function computerPlay() {
  let arrGame = ["rock", "paper", "scissors"];
  return arrGame[Math.floor(Math.random() * arrGame.length)];
}

// alert(computerPlay());

function game(playRound) {
  let i = 0;
  while (i < 5) {
    function playRound(playerSelection, computerSelection) {
      if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
      } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
      ) {
        return "You Lose! Scissors beats Paper";
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "rock"
      ) {
        return "You Lose! Rock beats Scissors";
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
      ) {
        return "You Win! Scissors beats Paper";
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissors"
      ) {
        return "You Win! Rock beats Scissors";
      } else if (playerSelection === computerSelection) {
        return "Equal!!!";
      } else {
        return "ERROR";
      }
    }
    const playerSelection = prompt().toLowerCase();
    const computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
    i++;
  }
  return playRound();
}

alert(game());

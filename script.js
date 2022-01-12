const player = document.querySelectorAll(".player");

function computerPlay() {
  let arrGame = ["rock", "paper", "scissors"];
  return arrGame[Math.floor(Math.random() * arrGame.length)];
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return `You Lose! Paper beats Rock ${(computerScore += 1)}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You Lose! Scissors beats Paper ${(computerScore += 1)}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You Lose! Rock beats Scissors ${(computerScore += 1)}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You Win! Scissors beats Paper ${(playerScore += 1)}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You Win! Paper beats Rock ${(playerScore += 1)}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You Win! Rock beats Scissors ${(playerScore += 1)}`;
  } else if (playerSelection === computerSelection) {
    return "Equal!!!";
  } else {
    return "ERROR";
  }
}

player.forEach((play) => {
  play.addEventListener("click", function (e) {
    const computerSelection = computerPlay();
    alert(playRound(e.target.id, computerSelection));
  });
});

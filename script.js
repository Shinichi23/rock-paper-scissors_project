const player = document.querySelectorAll(".player");

function computerPlay() {
  let arrGame = ["rock", "paper", "scissors"];
  return arrGame[Math.floor(Math.random() * arrGame.length)];
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log((computerScore += 1));
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log((computerScore += 1));
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log((computerScore += 1));
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log((playerScore += 1));
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log((playerScore += 1));
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log((playerScore += 1));
    return "You Win! Rock beats Scissors";
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

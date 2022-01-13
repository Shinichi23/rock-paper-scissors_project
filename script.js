const player = document.querySelectorAll(".player");

function computerPlay() {
  let arrGame = ["rock", "paper", "scissors"];
  return arrGame[Math.floor(Math.random() * arrGame.length)];
}

let computerScore = 0;
let playerScore = 0;

document.getElementById(
  "computerScore"
).textContent = `Computer: ${computerScore}`;
document.getElementById("playerScore").textContent = `Player: ${playerScore}`;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie !!!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `You Lose! Paper beats Rock ${(document.getElementById(
      "computerScore"
    ).textContent = `Computer score : ${(computerScore += 1)}`)}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You Lose! Scissors beats Paper ${(document.getElementById(
      "computerScore"
    ).textContent = `Computer score : ${(computerScore += 1)}`)}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You Lose! Rock beats Scissors ${(document.getElementById(
      "computerScore"
    ).textContent = `Computer score : ${(computerScore += 1)}`)}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You Win! Scissors beats Paper ${(document.getElementById(
      "playerScore"
    ).textContent = `Player score : ${(playerScore += 1)}`)}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You Win! Paper beats Rock ${(document.getElementById(
      "playerScore"
    ).textContent = `Player score : ${(playerScore += 1)}`)}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You Win! Rock beats Scissors ${(document.getElementById(
      "playerScore"
    ).textContent = `Player score : ${(playerScore += 1)}`)}`;
  }
}

function gameScore(playerScore, computerScore) {
  if (playerScore == 5 && computerScore < playerScore) {
    alert("You Win!"),
      document.getElementById("rock").setAttribute("disabled", 1),
      document.getElementById("paper").setAttribute("disabled", 1),
      document.getElementById("scissors").setAttribute("disabled", 1),
      document.getElementById("resetGame").removeAttribute("disabled");
  } else if (computerScore == 5 && computerScore > playerScore)
    alert("You Lose!"),
      document.getElementById("rock").setAttribute("disabled", 1),
      document.getElementById("paper").setAttribute("disabled", 1),
      document.getElementById("scissors").setAttribute("disabled", 1),
      document.getElementById("resetGame").removeAttribute("disabled");
}

function game(player) {
  player.forEach((play) => {
    play.addEventListener("click", function (e) {
      const computerSelection = computerPlay();
      alert(playRound(e.target.id, computerSelection));
      if (gameScore(playerScore, computerScore)) return;
    });
  });
}

game(player);

function resetGame() {
  return (
    document.getElementById("rock").removeAttribute("disabled"),
    document.getElementById("paper").removeAttribute("disabled"),
    document.getElementById("scissors").removeAttribute("disabled"),
    (document.getElementById(
      "playerScore"
    ).textContent = `Player Score : ${(playerScore = 0)}`),
    (document.getElementById(
      "computerScore"
    ).textContent = `Computer Score : ${(computerScore = 0)}`)
  );
}

document.getElementById("resetGame").addEventListener("click", function (e) {
  resetGame(e);
});

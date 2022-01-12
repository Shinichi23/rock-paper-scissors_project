function computerPlay() {
  let arrGame = ["rock", "paper", "scissors"];
  return arrGame[Math.floor(Math.random() * arrGame.length)];
}

// alert(computerPlay());

/*function game(playRound) {
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
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      return "You Win! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You Win! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You Win! Rock beats Scissors";
    } else if (playerSelection === computerSelection) {
      return "Equal!!!";
    } else {
      return "ERROR";
    }
    // }
    const playerSelection = prompt().toLowerCase();
    const computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
    i++;
  }
  return playRound();
} */

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.id);

    function game(playRound) {
      let i = 0;
      while (i < 5) {
        function playRound(playerSelection, computerSelection) {
          if (playerSelection === "rock" && computerSelection === "paper") {
            alert("You Lose! Paper beats Rock");
          } else if (
            playerSelection === "paper" &&
            computerSelection === "scissors"
          ) {
            alert("You Lose! Scissors beats Paper");
          } else if (
            playerSelection === "scissors" &&
            computerSelection === "rock"
          ) {
            alert("You Lose! Rock beats Scissors");
          } else if (
            playerSelection === "scissors" &&
            computerSelection === "paper"
          ) {
            alert("You Win! Scissors beats Paper");
          } else if (
            playerSelection === "paper" &&
            computerSelection === "rock"
          ) {
            alert("You Win! Paper beats Rock");
          } else if (
            playerSelection === "rock" &&
            computerSelection === "scissors"
          ) {
            alert("You Win! Rock beats Scissors");
          } else if (playerSelection === computerSelection) {
            alert("Equal!!!");
          } else {
            alert("ERROR");
          }
        }
        const playerSelection = e.target.id;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        i++;
      }
      return playRound();
    }
    game();
  });
});

const validInput = new Set(["rock", "paper", "scissors"]);

let humanChoice = "";



function getComputerChoice() {
  let rand = Math.random();
  let retval = "";
  if (rand < 0.3) {
    retval += "rock";
  } else if (rand >= 0.3 && rand < 0.6) {
    retval += "paper";
  } else if (rand >= 0.6) {
    retval += "scissors";
  }

  return retval;
}



function getHumanChoice() {
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;
  let playerMsg = document.querySelector("#score-player");
  let computerMsg = document.querySelector("#score-computer");
  let msg = document.querySelector("#output");

  function updateScore() {
    playerMsg.textContent = `${humanScore}`;
    computerMsg.textContent = `${computerScore}`;
  }

  function playRound(humanChoice, computerChoice) {
    roundsPlayed++;
    let winMsg = `${humanChoice} beats ${computerChoice} you win! :)`;
    let loseMsg = `${computerChoice} beats ${humanChoice} you lose! :(`;

    if (humanChoice === computerChoice) {
      msg.textContent = `${humanChoice} draws with ${computerChoice} :|`

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      msg.textContent = winMsg;
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      msg.textContent = "paper beats rock you lose! :(";
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      msg.textContent = winMsg;
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      msg.textContent = loseMsg;
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      msg.textContent = loseMsg;
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      msg.textContent = winMsg;
      humanScore++;
    }
    if (humanScore > computerScore && (humanScore === 5 || computerScore === 5)) {
      msg.textContent = "Game Over! You Win! :)";
    } if (humanScore < computerScore && (humanScore === 5 || computerScore === 5)) {
      msg.textContent = "Game Over! You Lose! :(";
    } if (humanScore === computerScore && (humanScore === 5 || computerScore === 5)) {
      msg.textContent = "Game Over! You Drawed! :|";
    }

    updateScore();
  }
  const con = document.getElementById('rps');
  con.addEventListener('click', (e) => {

    if (roundsPlayed >= 5 &&(humanScore === 5 || computerScore === 5)) return;

    if ((humanScore < 5 && computerScore < 5)) {
      const btn = e.target.closest("#rock, #paper, #scissors");
      if (!btn || !con.contains(btn)) return;

      humanChoice = btn.id;
      playRound(getHumanChoice(), getComputerChoice());
    }

    if ((humanScore === 5 || computerScore === 5)) {
      const div_output = document.querySelector("#div-output");
      const playAgain = document.createElement("button");
      playAgain.textContent = "Play Again";
      playAgain.className = "playAgain";
      div_output.appendChild(playAgain);

      playAgain.addEventListener('click', (e) => {
        roundsPlayed = 0;

        humanScore = 0;
        computerScore = 0;
        msg.textContent = "";
        updateScore();
        playAgain.remove();
      });
    }
  });
}

playGame();

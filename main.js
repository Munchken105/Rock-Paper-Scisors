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

  function updateScore(){
    let playerMsg = document.querySelector("#score-player");
    let computerMsg = document.querySelector("#score-computer");

    playerMsg.textContent = `${humanScore}`;
    computerMsg.textContent = `${computerScore}`;
  }

  function playRound(humanChoice, computerChoice) {
    let msg = document.querySelector("#output");
    let winMsg = `${humanChoice} beats ${computerChoice} you win! :)`;
    let loseMsg = `${humanChoice} beats ${computerChoice} you lose! :(`;
    
    if (humanChoice === computerChoice) {
      msg.textContent = `${humanChoice} draws with ${computerChoice} :|`
      updateScore();

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      msg.textContent = winMsg;
      updateScore();
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      msg.textContent = "paper beats rock you lose! :(";
      computerScore++;
      updateScore();
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      msg.textContent = winMsg;
      humanScore++;
      updateScore();
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      msg.textContent = loseMsg;
      computerScore++;
      updateScore();
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      msg.textContent = loseMsg;
      computerScore++;
      updateScore();
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      msg.textContent = winMsg;
      humanScore++;
      updateScore();
    }
  }
  const con = document.getElementById('rps');
  con.addEventListener('click', (e) => {
    const btn = e.target.closest("#rock, #paper, #scissors");
    if (!btn || !con.contains(btn)) return;

    humanChoice = btn.id;
    playRound(getHumanChoice(),getComputerChoice());
  });
}

playGame();
const validInput = new Set(["rock", "paper", "scissors"]);

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
  let loopCondition = false;
  let retval = "";
  while (!loopCondition) {
    let userInput = prompt("Enter: rock paper or scissors");

    if (userInput === null){
        alert("null is not valid");
        continue;
    }

    userInput = userInput.toLowerCase().replace(/\s/g, "");

    if (validInput.has(userInput)) {
      loopCondition = true;
      retval = userInput;
    }
    else{
        alert("Invalid input rock paper scissors");
    }
  }
  return retval;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`${humanChoice} draws with ${computerChoice} :|`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("rock beats paper you win! :)");
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("paper beats rock you lose! :(");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("paper beats rock you win! :)");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("scissors beats rock you lose! :(");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("rock beats scissors you lose! :(");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("scissors beats paper you win! :)");
      humanScore++;
    }
  }

  for (i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    console.log("you win! :)");
  }

  if (humanScore < computerScore) {
    console.log("you lose! :(");
  }

  if (humanScore === computerScore) {
    console.log("you drawed :|");
  }
}

playGame();

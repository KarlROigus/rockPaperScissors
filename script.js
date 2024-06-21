let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computersChoice = Math.random();
    if (computersChoice < 0.33) {
        return "rock";
    } else if (computersChoice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humansChoice = prompt("Choose rock, paper or scissors");
    return humansChoice;
}


function decideTheWinner(computer, human) {
    if (computer == "rock" && human == "scissors") {
        computerScore++;
    } else if (computer == "scissors" && human == "rock") {
        humanScore++;
    } else if (computer == "scissors" && human == "paper") {
        computerScore++;
    } else if (computer == "paper" && human == "scissors") {
        humanScore++;
    } else if (computer == "paper" && human == "rock") {
        computerScore++;
    } else if (computer == "rock" && human == "paper") {
        humanScore++;
    }
}


const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    const computer = getComputerChoice();
    decideTheWinner(computer, "paper");
    announceScore();
});

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    const computer = getComputerChoice();
    decideTheWinner(computer, "rock");
    announceScore();
    
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    const computer = getComputerChoice();
    decideTheWinner(computer, "scissors");
    announceScore();
});

function announceScore() {
    const scoreAnnouncer = document.querySelector("#scoreContainer");
    scoreAnnouncer.textContent = `Computer: ${computerScore}, Human: ${humanScore}`;
    if (humanScore == 5) {
        scoreAnnouncer.textContent = "GAME OVER! THE WINNER IS HUMAN";
    } else if (computerScore == 5) {
        scoreAnnouncer.textContent = "GAME OVER! THE WINNER IS COMPUTER!";
    }
}




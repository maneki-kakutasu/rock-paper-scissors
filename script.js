function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    
    if(computerChoice === 0) {
        console.log("rock");
        return "rock";
    } else if(computerChoice === 1) {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissors");
        return "scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, scissors?");
    console.log(playerChoice);
    return playerChoice;
}

playerScore = 0;
computerScore = 0;

function playRound(playerChoice, computerChoice) {
    if(playerChoice === "rock" && computerChoice === "scissors") {
        playerScore += 1;
        console.log("YOU WIN!");
        console.log("Your score: ", playerScore);
        console.log("Computer score: ", computerScore);
    } else if(playerChoice === "paper" && computerChoice === "rock") {
        playerScore += 1;
        console.log("YOU WIN!");
        console.log("Your score: ", playerScore);
        console.log("Computer score: ", computerScore);
    } else if(playerChoice === "scissors" && computerChoice === "paper") {
        playerScore += 1;
        console.log("YOU WIN!")
        console.log("Your score: ", playerScore);
        console.log("Computer score: ", computerScore);
    } else if(playerChoice === computerChoice) {
        console.log("DRAW!");
        console.log("Your score: ", playerScore);
        console.log("Computer score: ", computerScore);
    } else {
        computerScore += 1;
        console.log("YOU LOSE!");
        console.log("Your score: ", playerScore);
        console.log("Computer score: ", computerScore);
    }
}

function playGame() {
    let rounds = 1;

    while(rounds <= 5) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        rounds += 1;
    }
}

playGame();
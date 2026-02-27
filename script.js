function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if(choice === 0) {
        console.log("rock");
    } else if(choice === 1) {
        console.log("paper");
    } else {
        console.log("scissors");
    }
}

// function getHumanChoice() {}
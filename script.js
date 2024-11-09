 // Randomly give rock, paper or scissors
function getComputerChoice(){
    // Create a new variable so we don't have to repeat Math.floor(Math.random() * 3)
    let randomNum = Math.floor(Math.random() * 3); // Generates 0, 1, or 2 
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}



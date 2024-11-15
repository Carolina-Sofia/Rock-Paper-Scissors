
function playGame(){
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


//Prompt the userfor their answer
function getHumanChoice() {
    let choice = prompt("Rock Paper Scissors Go!:").toLowerCase();
    
    // Validate the input to ensure it's one of the valid choices
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
        return getHumanChoice(); // Keep asking for a valid input
    }
}

let humanScore = 0;
let computerScore = 0;


    function playRound(){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        if (computerChoice === "rock" && humanChoice === "paper"){
            humanScore++;
            return console.log("You win! Paper beats Rock!")
        }
        else if (computerChoice === "rock" && humanChoice === "scissors"){
            computerScore++;
            return console.log("You lose... Rock beats Scissors!")
        }
        else if (computerChoice === "paper" && humanChoice === "rock"){
            computerScore++;
            return console.log("You lose... Paper beats Rock!")
        }
        else if (computerChoice === "paper" && humanChoice === "scissors"){
            humanScore++;
            return console.log("You win! Scissors beats Paper!")
        }
        else if (computerChoice === "scissors" && humanChoice === "paper"){
            computerScore++;
            return console.log("You lose... Scissors beats Paper!")
        }
        else if (computerChoice === "scissors" && humanChoice === "rock"){
            humanScore++;
            return console.log("You win! Rock beats Scissors!")
        }
        else {
            return console.log("It's a tie!")
        }
}

for (let i = 0; i < 5; i++) {
    playRound();
}


    
}


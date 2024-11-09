 //  randomly give rock, paper or scissors
function getComputerChoice(){
    if ((math.random() * 3) === 0){  //get a random number between 0 and 2
        return "rock"
    }
    else if ((math.random() * 3) === 1){
        return "paper"
    }
    else {
        return "scissors"
    }
}



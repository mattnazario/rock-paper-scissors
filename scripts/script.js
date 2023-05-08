function getComputerChoice(){
    //Gets a random int - 0,1, or 2.
    //0 = rock.
    //1 = paper.
    //2 = scissors.
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";

    }
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    console.log("Player picks: " + playerSelection)
    console.log("Computer picks: " + computerSelection)
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    resultStr = "Its a tie!"
                    return resultStr;
                case "paper":
                    resultStr = "You lose! Paper beats rock."
                    return resultStr;
                case "scissors":
                    resultStr = "You win! Rock beats scissors."
                    return resultStr;
            }
        case "paper":
            switch(computerSelection){
                case "rock":
                    resultStr = "You win! Paper beats rock."
                    return resultStr;
                case "paper":
                    resultStr = "Its a tie!"
                    return resultStr;
                case "scissors":
                    resultStr = "You lose! Scissors beats paper."
                    return resultStr;
            }
        case "scissors":
            switch(computerSelection){
                case "rock":
                    resultStr = "You lose! Rock beats scissors."
                    return resultStr;
                case "paper":
                    resultStr = "You win! Scissors beats paper."
                    return resultStr;
                case "scissors":
                    resultStr = "Its a tie"
                    return resultStr;
            }
    }
}

function game(){
    let x = 0;
    let playerChoice;
    let computerChoice;
    while(x<5){
        playerChoice = getComputerChoice();
        computerChoice = getComputerChoice();
        console.log(playRound(playerChoice,computerChoice));
        x++;
    }
}

game();
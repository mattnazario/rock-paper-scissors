function getComputerChoice(){
    //Gets a random int - 0,1, or 2.
    //0 = rock.
    //1 = paper.
    //2 = scissors.
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            computerImageText.textContent = "Computer picks rock";
            computerImageChoice.src = "https://images.pexels.com/photos/2363901/pexels-photo-2363901.jpeg?auto=compress&cs=tinysrgb&w=300";
            return "rock";
        case 1:
            computerImageText.textContent = "Computer picks paper";
            computerImageChoice.src = "https://images.pexels.com/photos/2575363/pexels-photo-2575363.jpeg?auto=compress&cs=tinysrgb&w=300";     
            return "paper";
        case 2:
            computerImageText.textContent = "Computer picks scissors";
            computerImageChoice.src = "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=300";
            return "scissors";

    }
}

function playRound(playerSelection,computerSelection){
    //RETURN 0 IF PLAYER WINS
    //RETURN 1 IF COMPUTER WINS
    //RETURN 2 IF ITS A TIE
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection){
        case "rock":
            playerImageText.textContent = "Player picks rock";
            switch(computerSelection){
                case "rock":
                    return 2;
                case "paper":
                    return 1;                
                case "scissors":
                    return 0;
            }
        case "paper":
            playerImageText.textContent = "Player picks paper";
            switch(computerSelection){
                case "rock":
                    return 0;
                case "paper":
                    return 2;
                case "scissors":
                    return 1;
            }
        case "scissors":
            playerImageText.textContent = "Player picks scissors";
            switch(computerSelection){
                case "rock":
                    return 1;
                case "paper":
                    return 0;
                case "scissors":
                    return 2;
            }
    }
}


let playerScore = 0;
let playerScoreText = document.querySelector("#player-points");
let playerImageText = document.querySelector("#player-choice-text");

let computerScore = 0;
let computerScoreText = document.querySelector("#computer-points");
let computerImageChoice = document.querySelector("#computer-choice-icon");
let computerImageText = document.querySelector("#computer-choice-text");

const buttons = document.querySelectorAll('.btn');
buttons.forEach( button => button.addEventListener('click', buttonClick ));
buttons.forEach( button => button.addEventListener('transitionend', removeTransition));
let roundResultText = document.querySelector("#computer-text");



function buttonClick(e){
    if(e.target.id === 'reset'){
        resetGame();
    }
    if(computerScore >= 5){
        roundResultText.textContent = "COMPUTER WINS THE MATCH! CLICK RESET TO PLAY AGAIN."
        return;
    }
    if(playerScore >= 5){
        roundResultText.textContent = "YOU WIN THE MATCH! CLICK RESET TO PLAY AGAIN."
        return;
    }

    if(e.target.id !== "reset"){
        let x = playRound(e.target.id,getComputerChoice());
        e.target.classList.add("clicked");
        switch(x){
            case 0:
                playerScore++;
                updateScores();
                roundResultText.textContent = "Player wins this round!"    
                break;            
            case 1:                
                computerScore++;
                updateScores();
                roundResultText.textContent = "Computer wins this round!"                
                break;
            case 2:
                updateScores();
                roundResultText.textContent = "This round is a tie!"                
                break;

        }
    }
    
}

function updateScores(){
    playerScoreText.textContent = `PLAYER POINTS: ${playerScore}`;
    computerScoreText.textContent = `COMPUTER POINTS: ${computerScore}`;
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicked');
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    updateScores();
    computerImageChoice.src = "https://www.theodinproject.com/assets/icons/odin-icon-b5b31c073f7417a257003166c98cc23743654715305910c068b93a3bf4d3065d.svg";
    computerImageText.textContent = "";
    playerImageText.textContent = "";
    roundResultText.textContent = "";
}

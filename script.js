function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            console.log('You tied!');
        } else if (computerSelection === 'paper') {
            computerScore++;
            console.log('Paper covers rock, you lose!');
        } else {
            playerScore++;
            console.log('Rock breaks scissors, you win!');
        }

    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            console.log('Paper covers rock, you win!');
        } else if (computerSelection === 'paper') {
            console.log('You tied!');
        } else {
            computerScore++;
            console.log('Scissors cut paper, you lose!');
        }

    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            console.log('Rock breaks scissors, you lose!');
        } else if (computerSelection === 'paper') {
            playerScore++;
            console.log('Scissors cut paper, you win!');
        } else {
            console.log('You tied!');
        }
    }

    console.log(`Player Score: ${playerScore}`);        
    console.log(`Computer Score: ${computerScore}`);
  }
  
function computerPlay() {
    let computerChoice = (Math.floor(Math.random() * 3) + 1);

    if (computerChoice === 1) {
        return 'rock';
    } else if (computerChoice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function game() {

    let playerSelection = prompt("Please Enter: Rock, Paper or Scissors.");
    let computerSelection = computerPlay();

    let isRunning = true;
    while(isRunning) {

        let playAgain = prompt("Play again? (yes or no)");
        console.log(playAgain);
        if (playAgain.toLowerCase() === 'yes') {
            isRunning = true;
            playerSelection = prompt("Please Enter: Rock, Paper or Scissors.");
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection)
            continue;
        } else {
            isRunning = false;
        } 
    }
}

let playerScore = 0;
let computerScore = 0;
game();
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return alert('You tied!');
        } else if (computerSelection === 'paper') {
            computerScore++;
            return alert('Paper covers rock, you lose!');
        } else {
            playerScore++;
            return alert('Rock breaks scissors, you win!');
        }

    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return alert('Paper covers rock, you win!');
        } else if (computerSelection === 'paper') {
            return alert('You tied!');
        } else {
            computerScore++;
            return alert('Scissors cut paper, you lose!');
        }

    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return alert('Rock breaks scissors, you lose!');
        } else if (computerSelection === 'paper') {
            playerScore++;
            return alert('Scissors cut paper, you win!');
        } else {
            return alert('You tied!');
        }
    }
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

function winner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return alert(`Congratulations, you won! 
        \n Player Score: ${playerScore}
        \n Computer Score: ${computerScore}`);
    } else if (playerScore < computerScore){
        return alert(`Sorry, you lost.
        \n Player Score: ${playerScore}
        \n Computer Score: ${computerScore}`);
    } else {
        return alert(`You tied the computer.
        \n Player Score: ${playerScore}
        \n Computer Score: ${computerScore}`);
    }
}

function game() {

    let playerSelection = prompt("Please Enter: Rock, Paper or Scissors.").toLowerCase();
    let computerSelection = computerPlay();
    
    playRound(playerSelection, computerSelection);
    // console.log(playRound());

    let isRunning = true;
    while(isRunning) {

        console.log(playRound());

        let playAgain = prompt("Play again? (yes or no)");
        console.log(playAgain);
        if (playAgain.toLowerCase() === 'yes') {
            isRunning = true;
            playerSelection = prompt("Please Enter: Rock, Paper or Scissors.").toLowerCase();
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection)
            continue;
        } else {
            isRunning = false;
        } 

    }
    winner(playerScore, computerScore);
}


let playerScore = 0;
let computerScore = 0;
game();
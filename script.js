const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const rockImg = document.getElementById('rock-img');
const paperImg = document.getElementById('paper-img');
const scissorsImg = document.getElementById('scissors-img');

let choose = document.getElementById('choose');
let header = document.getElementById('header');
let vs = document.getElementById('vs');
let player = document.getElementById('player');
let computer = document.getElementById('computer');

yes.style.display = "none";
no.style.display = "none";
let playerScoreDisplay = document.getElementById('player-score');
let computerScoreDisplay = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        player.textContent = "Rock";
        if (computerSelection === 'rock') {
            computer.textContent = "Rock";
        } else if (computerSelection === 'paper') {
            computerScore++;
            computer.textContent = "Paper";
        } else {
            playerScore++;
            computer.textContent = "Scissors";
        }

    } else if (playerSelection === 'paper') {
        player.textContent = "Paper";
        if (computerSelection === 'rock') {
            playerScore++;
            computer.textContent = "Rock";
        } else if (computerSelection === 'paper') {
            computer.textContent = "Paper";
        } else {
            computerScore++;
            computer.textContent = "Scissors";
        }

    } else if (playerSelection === 'scissors') {
        player.textContent = "Scissors";
        if (computerSelection === 'rock') {
            computerScore++;
            computer.textContent = "Rock";
        } else if (computerSelection === 'paper') {
            playerScore++;
            computer.textContent = "Paper";
        } else {
            computer.textContent = "Scissors";
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

function rockSelection() {
    return game('rock');
}

function paperSelection() {
    return game('paper');
}

function scissorsSelection() {
    return game('scissors');
}

function updateScore(playerScore, computerScore) {

    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

function gameOver() {
    choose.textContent = "Do you want to play again?";
    yes.style.display = "block";
    no.style.display = "block";
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none"
    yes.addEventListener('click', playAgain);
    no.addEventListener('click', end);
}

function playAgain() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    yes.style.display = "none";
    no.style.display = "none";
    rock.style.display = "block";
    paper.style.display = "block";
    scissors.style.display = "block";

    header.textContent = "Rock, Paper, Scissors";
    header.style.color = "green";

    choose.textContent = "Choose";
    player.textContent = "Player";
    computer.textContent = "Computer";
}

function end() {
    header.textContent = "Rock, Paper, Scissors";
    header.style.color = "green";

    player.textContent = "Player";
    computer.textContent = "Computer";

    vs.style.fontSize = "4rem";
    vs.style.color = "red";
    vs.textContent = "Game Over!";
}


function game(playerChoice) { 
    playRound(playerChoice, computerPlay());
    updateScore(playerScore, computerScore);


    if (playerScore >= 5) {
        header.style.color = 'red';
        header.textContent = "You Win!"
        gameOver();
    } else if (computerScore >= 5) {
        header.style.color = 'red';
        header.textContent = "The Computer Wins";
        gameOver();
    }
}

rock.addEventListener('click', rockSelection);
paper.addEventListener('click', paperSelection);
scissors.addEventListener('click', scissorsSelection);

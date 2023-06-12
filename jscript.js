

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[(Math.floor(Math.random() * options.length))];
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

const result = playRound(playerSelection, computerSelection);
console.log(result);

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'paper') {
        return `You win! ${computerSelection} beats ${playerSelection}!`;
    } else if (computerSelection === 'rock') {
        return `Tie ${computerSelection} and ${playerSelection} are equivalent!`;
    }  else { 
        return `You lose! ${playerSelection} beats ${computerSelection}!`;
    }
}

function game() {
    
}
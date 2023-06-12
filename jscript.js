

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[(Math.floor(Math.random() * options.length))];
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'paper') {
        return `You win! ${computerSelection} beats ${playerSelection}!`;
    } else {
        return `You lose! ${playerSelection} beats ${computerSelection}!`;
    }
}
console.log(playRound(playerSelection, computerSelection));

function game() {
    
}
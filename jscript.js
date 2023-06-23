let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    function getComputerChoice() {
        const options = ['Rock', 'Paper', 'Scissors'];
        const computerSelectionIndex = Math.floor(Math.random()*options.length);
        return options[computerSelectionIndex];
    }

        const computerSelection = getComputerChoice();

        if (
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
            (playerSelection === 'Rock' && computerSelection === 'Scissors')
        ) {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else if (playerSelection === computerSelection) {
            return `A tie ${playerSelection} and ${computerSelection} are the same`;
        } else {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    } 

function handleButtonClick(event) {
        const playerSelection = event.target.id;
        const result = playRound(playerSelection);
        console.log(result);

    if (playerScore == 5) {
        console.log("Player wins the game!");
        resetGame();
    }   else if (computerScore == 5) {
        console.log("Computer wins the game!");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
        button.addEventListener('click', handleButtonClick);
});

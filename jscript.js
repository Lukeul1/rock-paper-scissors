document.addEventListener('DOMContentLoaded', function() {
    let playerScore = 0;
    let computerScore = 0;

    const messageContainer = document.getElementById('message');

    function playRound(playerSelection) {
        function getComputerChoice() {
            const options = ['Rock', 'Paper', 'Scissors'];
            const computerSelectionIndex = Math.floor(Math.random() * options.length);
            return options[computerSelectionIndex];
        }

        const computerSelection = getComputerChoice();

        if (
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
            (playerSelection === 'Rock' && computerSelection === 'Scissors')
        ) {
            playerScore++;
            const message = `You win! ${playerSelection} beats ${computerSelection}`;
            messageContainer.textContent = message;
        } else if (playerSelection === computerSelection) {
            const message = `A tie ${playerSelection} and ${computerSelection} are the same`;
            messageContainer.textContent = message;
        } else {
            computerScore++;
            const message = `You lose! ${computerSelection} beats ${playerSelection}`;
            messageContainer.textContent = message;
        }

        if (playerScore === 5) {
            const message = "Player wins the game!";
            messageContainer.textContent = message;
            resetGame();
        } else if (computerScore === 5) {
            const message = "Computer wins the game!";
            messageContainer.textContent = message;
            resetGame();
        }
    }

    function handleButtonClick(event) {
        const playerSelection = event.currentTarget.closest('button').id;
        playRound(playerSelection);
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
    }

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', handleButtonClick);
    });
});
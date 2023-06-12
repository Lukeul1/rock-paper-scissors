

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissor'];
    return options[Math.floor(Math.random() * options.length)];
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (computerChoice === playerChoice) {
        return `Tie! ${computerSelection} and ${playerSelection} are equivalent!`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

console.log(playRound(playerSelection, computerSelection));

let outcomeTally = {
    win: 0,
    loss: 0,
    tie: 0,
};

const numRounds = 5;

    for (let i = 0; i < numRounds; i++) {
        const playerSelection = prompt('Enter your choice:').toLowerCase();
        const computerSelection = getComputerChoice();

        const outcome = playRound(playerSelection, computerSelection);

        if(outcome.includes('win')) {
            outcomeTally.win++;
        } else if (outcome.includes('loss')) {
            outcomeTally.loss++;
        } else if (outcome.includes('Tie')) {
            outcomeTally.tie++;
        }
        
    console.log(outcome);
}

console.log(outcomeTally);
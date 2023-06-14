function playRound() {
    function getComputerChoice() {
        const options = ['rock', 'paper', 'scissor'];
        const computerSelectionIndex = Math.floor(Math.random()*options.length);
        return options[computerSelectionIndex];
    }

        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Enter choice:").toLowerCase();

        if (
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissor' && computerSelection === 'paper') ||
            (playerSelection === 'rock' && computerSelection === 'scissor')
        ) {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else if (playerSelection === computerSelection) {
            return `A tie ${playerSelection} and ${computerSelection} are the same`;
        } else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    } 

const finalTally = {
                    win: 0,
                    lose: 0,
                    tie: 0,
};

function game() {

    for(let i = 0; i < 5; i++) {
    const result = playRound();
    console.log(result);

    if(result.includes('win')) {
        finalTally.win++;
    } else if (result.includes('lose')) {
        finalTally.lose++;
    } else {
        finalTally.tie++;
    }
}

console.log("Final Tally", finalTally);
}
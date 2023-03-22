let playerPoint = 0;
let computerPoint = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    let choice;
    switch (random) {
        case 1:
            choice = 'rock';
            break;
        case 2:
            choice = 'paper';
            break;
        case 3:
            choice = 'scissors';
            break;
    }
    return choice;
}

function getPlayerChoice() {
    return prompt('paper, rock or scissors?').toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerPoint++;
        return 'You lose! Paper beats rock';        
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerPoint++;
        return 'You win! Rock beats scissors';        
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerPoint++;
        return 'You win! Paper beats rock';        
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerPoint++;
        return 'You lose! scissors beats paper';        
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerPoint++;
        return 'You win! scissors beats paper';        
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        playerPoint++;
        return 'You lose! scissors beats rock';        
    } else {
        return 'Tie!';
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
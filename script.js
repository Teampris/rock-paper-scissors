let playerPoint = 0;
let computerPoint = 0;
let roundCount = 0;
const container = document.getElementById("container");

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1;
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
        computerPoint++;
        return 'You lose! scissors beats rock';        
    } else {
        return 'Tie!';
    }   
}

function endGame(){
    function activateButtons() {
        buttons.forEach((button) => {
          button.removeEventListener('click', handleButtonClick);
        });
        const playAgainButton = document.createElement('button');
        playAgainButton.textContent = 'Play Again!';
        playAgainButton.id = "play-again-btn";

        container.appendChild(playAgainButton);

        playAgainButton.addEventListener('click', handlePlayAgainButtonClick);
    }
    activateButtons();
    
    if(playerPoint>computerPoint){
        return "You win";
    } else if (playerPoint==computerPoint){
        return "Tie";
    } else {
        return "You lose";
    }
}

const buttons = document.querySelectorAll('#buttons > button');

function handleButtonClick(event) {
    const playerChoice = event.target.id;
    let resultWindow = document.getElementById('result-container');
    resultWindow.innerText = playRound(playerChoice, getComputerChoice());

    document.getElementById('round-count').innerText = `Round: ${++roundCount}`;
    document.getElementsByClassName('player-scores-container')[0].innerText = playerPoint;
    document.getElementsByClassName('computer-scores-container')[0].innerText = computerPoint;

    if(playerPoint === 5 || computerPoint === 5) {
        let result = endGame();
        document.getElementById('result-container').innerText = `${result}`;
    }
}

function handlePlayAgainButtonClick(event) {
    const playAgainButton = document.getElementById('play-again-btn');
    playAgainButton.remove();
    buttons.forEach((button) => {
        button.addEventListener('click', handleButtonClick)
    });
    playerPoint = 0;
    computerPoint = 0;
    roundCount = 0;    
    document.getElementById('round-count').innerText = `Round: ${roundCount}`;
    document.getElementsByClassName('player-scores-container')[0].innerText = playerPoint;
    document.getElementsByClassName('computer-scores-container')[0].innerText = computerPoint;
}

buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick)
});


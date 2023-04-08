let playerPoint = 0;
let computerPoint = 0;
let roundCount = 0;

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
        computerPoint++;
        return 'You lose! scissors beats rock';        
    } else {
        return 'Tie!';
    }   
}

function game(){
    while(playerPoint < 5 || computerPoint < 5){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        console.log("Round " + i + " : " + playRound(playerSelection, computerSelection) 
        + ". You: " + playerPoint 
        + " Computer: " + computerPoint);
    }

    console.log(result());
}

function endGame(){
    function activateButtons() {
        buttons.forEach((button) => {
          button.removeEventListener('click', handleButtonClick);
        });
        document.querySelector('#play-again-btn').addEventListener('click', handlePlayAgainButtonClick);
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
        document.getElementById('round-count').innerText += `
        ${result}`;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick)
});


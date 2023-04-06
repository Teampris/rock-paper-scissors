let playerPoint = 0;
let computerPoint = 0;
let roundCount = 0;
let game = 1;

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
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        console.log("Round " + i + " : " + playRound(playerSelection, computerSelection) 
        + ". You: " + playerPoint 
        + " Computer: " + computerPoint);
    }

    console.log(result());
}

function endGame(){
    game = 0;
    if(playerPoint>computerPoint){
        return "You win";
    } else if (playerPoint==computerPoint){
        return "Tie";
    } else {
        return "You lose";
    }
}

const buttons = document.querySelectorAll('button');

function handleButtonClick(event) {
    const playerChoice = event.target.id;
    console.log(playRound(playerChoice, getComputerChoice()));
    document.getElementById('round-count').innerText = 
    `Round: ${++roundCount}
     You:${playerPoint} Computer:${computerPoint}`;

     if(playerPoint === 5 || computerPoint === 5) {
        let result = endGame();
        document.getElementById('round-count').innerText += `
        ${result}`;
     }
}

buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick)
});


let computerSelection;
let winCount = 0;
let loseCount = 0;
function computerPlay() {
    computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {computerSelection = 'rock';}
    else if (computerSelection === 1) {computerSelection = 'paper';}
    else {computerSelection = 'scissors';}
}
function playRound(e) {
    computerPlay ();
    userSelection = e.dataset.sel;
    if (userSelection === computerSelection) {
        return ('It\'s a tie, you both picked ' + userSelection + '.');
    }
    else if ((userSelection === 'rock' && computerSelection === 'paper') || 
             (userSelection === 'paper' && computerSelection === 'scissors') ||
             (userSelection === 'scissors' && computerSelection === 'rock')) {
                loseCount = loseCount + 1; 
                return ('You lose! Computer\'s ' + computerSelection + 
                        ' beats your ' + userSelection + '.')
    }
    else { winCount = winCount + 1;
        return ('You won! Your ' + userSelection + ' beats computer\'s ' + 
                computerSelection + '.')
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => (playRound(button)))   
});

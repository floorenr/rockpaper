// 0 = rock, 1 = paper, 2, scissors 
let computerSelection;
let winCount = 0;
let loseCount = 0;
function computerPlay() {
    computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {computerSelection = 'rock';}
    else if (computerSelection === 1) {computerSelection = 'paper';}
    else {computerSelection = 'scissors';}
}
function playRound() {
    let userSelection = prompt('Rock, paper or scissors?');
    userSelection = userSelection.toLowerCase();
    computerPlay ();
    if (!['rock','paper','scissors'].includes(userSelection)) {
        alert ('incorrect input');
        return playRound ();
    }
    else if (userSelection === computerSelection) {
        return ('It\'s a tie, you both picked ' + userSelection + '.');
    }
    else if ((userSelection === 'rock' && computerSelection === 'paper') || 
             (userSelection === 'paper' && computerSelection === 'scissors') ||
             (userSelection === 'scissors' && computerSelection === 'rock')) {
                loseCount = loseCount + 1; 
                return ('You lost! Computer\'s ' + computerSelection + ' beats your ' + userSelection + '.')
    }
    else { winCount = winCount + 1;
        return ('You won! Your ' + userSelection + ' beats computer\'s ' + computerSelection + '.')
    }
}
function game() {
    alert('We\'ll play 5 rounds of rock, paper scissors')
    for (i = 0; i < 5; i++) {
        console.log(playRound ());
      }
    console.log(winCount, loseCount)
}
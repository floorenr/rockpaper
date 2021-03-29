let computerSelection;
let winCount = 0;
let loseCount = 0;
let roundCount = 0;
function computerPlay() {
    computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {computerSelection = 'rock';}
    else if (computerSelection === 1) {computerSelection = 'paper';}
    else {computerSelection = 'scissors';}
}
function playRound(e) {
    roundCount += 1;
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
const score = document.querySelector(".score");
const outcome = document.querySelector(".outcome")
const finalScore = document.querySelector(".finalScore")
let roundScore = ""

buttons.forEach((button) => {
  button.addEventListener('click', () => {
      roundScore = document.createTextNode(playRound(button));
      outcome.appendChild(roundScore);
      outcome.appendChild(document.createElement('br'));  
      document.getElementById("score").innerHTML = (winCount + " - " + 
            loseCount);
      if (roundCount===5) {
        outcome.appendChild(document.createElement('br'));
        outcome.appendChild(document.createElement('br'));
        if (winCount === loseCount) {
            finalScore.textContent += 
                    "Game Finished. You Tied. Press SPACE to try again.";
        } else if (winCount > loseCount) {
            finalScore.textContent += 
                    "Game Finished. You Win! Press SPACE to try again.";
        } else {
            finalScore.textContent += 
                    "Game Finished. You lose... Press SPACE to try again";
        }
      }
    })  
});


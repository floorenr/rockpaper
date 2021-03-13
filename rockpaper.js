// 0 = rock, 1 = paper, 2, scissors 
let computerSelection
function computerPlay () {
    computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {computerSelection = 'rock';}
    else if (computerSelection === 1) {computerSelection = 'paper';}
    else {computerSelection = 'scissors';}
}
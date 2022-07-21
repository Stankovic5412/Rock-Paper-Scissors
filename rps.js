function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice [Math.floor(Math.random() * choice.length)]
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        tieScore++;
        return 'tie';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
      return 'You Lose! Paper beats Rock';
    } else if ( playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
       return  'You Lose! Rock besats Scissors';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
       return 'You Lose! Scissors beats Paper'
    } else {
        playerScore++;
       return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}

//define scores 
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

//loop
function game() {
    
      
    for (let i = 0; i < 5; i++) {
            let playerSelection = prompt("Play the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
            let computerSelection = computerPlay();
            console.log(playRound(playerSelection, computerSelection))
        } if (playerScore>computerScore){
            return 'Winner'
        } else if (playerScore===computerScore) {
            return 'A tie'
        } else{
            return 'Loser'
        }
}

console.log(game()); //play the loop
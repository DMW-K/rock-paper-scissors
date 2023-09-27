
let rock = 'rock'
let paper = 'paper'
let scissors = 'scissors'

function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()* options.length);
    let random = options[randomIndex];
    return(random)
} 

for (let round = 1; round <= 5; round++) {
    playRound(round);
}


function playRound(playerSelection, computerSelection) {

    // your code here!

    if (playerSelection === computerSelection) {
    return ("its a Tie!")
}

    if (
        (playerSelection === rock && computerSelection === scissors)||
        (playerSelection === paper && computerSelection === rock)||
        (playerSelection === scissors && computerSelection === paper) 
    ) {
        return (` Congrates you Win! ${playerSelection} beats ${computerSelection}!`)
    } else {
    return (` you lose! ${computerSelection} beats ${playerSelection}`)
}

  } 
  const playerSelection = prompt("make your choice");
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));



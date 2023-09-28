
let rock = 'rock'
let paper = 'paper'
let scissors = 'scissors'

const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')

// computer random choice 
function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()* options.length);
    let random = options[randomIndex];
    return(random)
} 


// for (let round = 1; round <= 5; round++) {
//     playRound(round);
// }

// player and computer selections
function playRound(playerSelection, computerSelection) {

// tie option
    if (playerSelection === computerSelection) {
    return ("its a Tie!")
}

    if (
        (playerSelection === 'rock' && computerSelection === scissors)||
        (playerSelection === 'paper' && computerSelection === rock)||
        (playerSelection === 'scissors' && computerSelection === paper) 
    ) {
        return (` Congrates you Win! ${playerSelection} beats ${computerSelection}!`)
    } else {
    return (` you lose! ${computerSelection} beats ${playerSelection}`)
}

  } 
 


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    // get players choice
    playerSelection = e.target.id
    playerChoiceDisplay.innerHTML = playerSelection;


    // get computer choice
    const computerSelection = getComputerChoice();
    computerChoiceDisplay.innerHTML = computerSelection;

    // Determine the result of the round and display results
    const roundResult = playRound(playerSelection, computerSelection);
    resultDisplay.textContent = roundResult;


}))


 



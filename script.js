
let rock = 'rock'
let paper = 'paper'
let scissors = 'scissors'
let round = 0
let playerWins = 0
let computerWins =0



const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const roundDisplay = document.getElementById('round');
const possibleChoices = document.querySelectorAll('button');


function updateRoundDisplay () {
    roundDisplay.textContent = `Round ${round} of 5`;
}

function updateScoreDisplay () {
    roundDisplay.textContent = `Player: ${playerWins} - Computer: ${computerWins}`;
}


function checkWinner() {
    if (playerWins === 5) {
        resultDisplay.textContent = "Player wins the game!";
        disableButtons();
    } else if (computerWins === 5) {
        resultDisplay.textContent = "Computer wins the game!";
        disableButtons();
    }
}

function disableButtons() {
    possibleChoices.forEach(possibleChoice => possibleChoice.disabled = true);
}


// computer random choice 
function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()* options.length);
    let random = options[randomIndex];
    return(random)
} 



// player and computer selections
function playRound(playerSelection, computerSelection) {

// tie option
    if (playerSelection === computerSelection) {
    return ("its a Tie!")
} else if (
        (playerSelection === 'rock' && computerSelection === scissors)||
        (playerSelection === 'paper' && computerSelection === rock)||
        (playerSelection === 'scissors' && computerSelection === paper) 
    ) {
        playerWins++
        return (` Congrates you Win! ${playerSelection} beats ${computerSelection}!`)
    } else {
        computerWins++
        return (` you lose! ${computerSelection} beats ${playerSelection}`)
}

  } 
 


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {

    // if (playerWins === 5 || computerWins === 5) {
    //     resultDisplay.textContent = "Game Over";
    //     return;
    // }

    // get players choice
    playerSelection = e.target.id
    playerChoiceDisplay.innerHTML = playerSelection;


    // get computer choice
    const computerSelection = getComputerChoice();
    computerChoiceDisplay.innerHTML = computerSelection;

    // Determine the result of the round and display results
    const roundResult = playRound(playerSelection, computerSelection);
    resultDisplay.textContent = roundResult;

    // round++;
    updateRoundDisplay();

    updateScoreDisplay();

    // if (round === 5) {
    //     resultDisplay.textContent = "Game Over";
    // }

    checkWinner();

}))


 



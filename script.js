let userInput;
let userSelection;
let computerSelection;
let userScore;
let computerScore;
let rounds;

const getComputerChoice = () => {
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand === 1) {
        return 'Rock';
    }
    else if (rand === 2) {
        return 'Paper';
    }
    else if (rand === 3) {
        return 'Scissors';
    }
}

let chooseRock = document.querySelector('#pickRock');
let choosePaper = document.querySelector('#paper');
let chooseScissors = document.querySelector('#scissors');
chooseRock.addEventListener('click', () => alert("Rock!"));
choosePaper.addEventListener('click', () => console.log("Paper"));
chooseScissors.addEventListener('click', playRound("Scissors"));

const game = () => {
    userScore = 0;
    computerScore = 0;
    rounds = 0;

    const playRound = (weapon) => {
        userSelection = weapon;
        computerSelection = getComputerChoice();

        if (userSelection === 'Rock' && computerSelection === 'Scissors' || 
            userSelection === 'Paper' && computerSelection === 'Rock' ||
            userSelection === 'Scissors' && computerSelection === 'Paper') {
            userScore+=1;
            return `You Win! ${userSelection} beats ${computerSelection}!`;
            userScore ++;
        }
        else if (userSelection === 'Rock' && computerSelection === 'Paper' || 
                 userSelection === 'Paper' && computerSelection === 'Scissors' || 
                 userSelection === 'Scissors' && computerSelection === 'Rock') {
            computerScore+=1;
            return `You Lose! ${userSelection} beats ${computerSelection}!`;
            computerScore++;
                 }
        else {
            return `It's a tie!`;
        }
        rounds++;
    }

}

game();

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

const game = () => {
    
        userScore = 0;
        computerScore = 0;
        rounds = 0;
    
        const playRound = (weapon) => {
            userSelection = weapon;
            computerSelection = getComputerChoice();
            const board = document.querySelector('#roundState');
            const userScoreboard = document.querySelector('#userScore');
            const computerScoreboard = document.querySelector('#computerScore');

            if (userSelection === 'Rock' && computerSelection === 'Scissors' || 
                userSelection === 'Paper' && computerSelection === 'Rock' ||
                userSelection === 'Scissors' && computerSelection === 'Paper') {
                userScore+=1;
                board.innerHTML = `You Win! ${userSelection} beats ${computerSelection}!`;
            }
            else if (userSelection === 'Rock' && computerSelection === 'Paper' || 
                    userSelection === 'Paper' && computerSelection === 'Scissors' || 
                    userSelection === 'Scissors' && computerSelection === 'Rock') {
                computerScore+=1;
                board.innerHTML = `You Lose! ${userSelection} beats ${computerSelection}!`;
                    }
            else {
                board.innerHTML = `It's a tie!`;
            }
            rounds++;
            userScoreboard.innerHTML = userScore;
            computerScoreboard.innerHTML = computerScore;

        }
        const pickRock = document.querySelector("#rock");
        pickRock.addEventListener('click', () => playRound("Rock"));

        const pickPaper = document.querySelector('#paper');
        pickPaper.addEventListener('click', () => playRound("Paper"));

        const pickScissors = document.querySelector('#scissors');
        pickScissors.addEventListener('click', () => playRound("Scissors"));

        if(userScore === 5) {
            board.innerHTML = `You win the game! The world is saved!`
        }
        else if (computerScore === 5) {
            board.innerHTML = `You have lost. Thanks for nothing, scrub.`

        }
} 

game();

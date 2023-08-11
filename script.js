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

    const playRound = (userSelection, computerSelection) => {
        userInput = prompt("Rock, Paper, Scissors?", "Rock").toLowerCase();
        userSelection = userInput.charAt(0).toUpperCase() + userInput.slice(1);
        computerSelection = getComputerChoice();

        if (userSelection === 'Rock' && computerSelection === 'Scissors' || 
            userSelection === 'Paper' && computerSelection === 'Rock' ||
            userSelection === 'Scissors' && computerSelection === 'Paper') {
            userScore+=1;
            return `You Win! ${userSelection} beats ${computerSelection}!`;
        }
        else if (userSelection === 'Rock' && computerSelection === 'Paper' || 
                 userSelection === 'Paper' && computerSelection === 'Scissors' || 
                 userSelection === 'Scissors' && computerSelection === 'Rock') {
            computerScore+=1;
            return `You Lose! ${userSelection} beats ${computerSelection}!`;
                 }
        else {
            return `It's a tie!`;
        }
    }

    for (rounds = 1; rounds <= 5; rounds++) {
        console.log(playRound(userSelection, computerSelection));
        console.log(`Round: ${rounds}`);
        console.log(`User Score: ${userScore}`);
        console.log(`Computer Score: ${computerScore}`);
    
    }

    if (userScore > computerScore) {
        console.log("User wins the game!");
    }
    else if (computerScore > userScore) {
        console.log("Computer wins the game!");
    }
    else {
        console.log("It's a tie! Everybody wins!");
    }

}

game();


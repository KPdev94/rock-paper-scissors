let userScore = 0;
let computerScore = 0;
let userInt = 0;
let computerInt = 0;

const board = document.querySelector('#roundState');
const buttons = document.querySelectorAll('button');
const user = document.querySelector('#userScore');
const computer = document.querySelector('#computerScore');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        userWeapon = button.id;
        if (userWeapon == 'Rock') userInt = 0;
        else if (userWeapon == 'Paper') userInt = 1;
        else if (userWeapon == 'Scissors') userInt = 2;
        computerInt = getComputerChoice();
        game();
    })
})


const getComputerChoice = () => {
    let numChoice = Math.floor(Math.random() * 3);
    if (numChoice === 0) {
        computerWeapon = 'Rock';
    }
    else if (numChoice === 1) {
        computerWeapon = 'Paper';
    }
    else if (numChoice === 2) {
        computerWeapon = 'Scissors';
    }
    return numChoice;
}
const playRound = () => {
    winArray = [[0,2,1],
                [1,0,2],
                [2,1,0]];
    
    let result = winArray[userInt][computerInt];

    if (result == 0) {
        board.innerHTML = `It's a tie!`
    }
    else if (result == 1) {
        board.innerHTML = `You win the round! ${userWeapon} beats ${computerWeapon}.`
        userScore++;
    }
    else if (result == 2) {
        board.innerHTML = `You lose the round! ${computerWeapon} beats ${userWeapon}.`
        computerScore++;
    }
}

const game = () => {
    playRound();

    user.innerHTML = userScore;
    computer.innerHTML = computerScore;

    if(userScore == 5) {
        board.innerHTML = 'You win! You saved the day!';
        userScore = 0;
        computerScore = 0;
    }
    if(computerScore == 5) {
        board.innerHTML = 'You lose. Thanks for nothing, shmuck.';
        userScore = 0;
        computerScore = 0;
    }
}


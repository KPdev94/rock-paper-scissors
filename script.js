let userScore = 0;
let computerScore = 0;
let userInt = 0;
let computerInt = 0;

const board = document.querySelector('#roundState');
const buttons = document.querySelectorAll('button');
const user = document.querySelector('#userScore');
const computer = document.querySelector('#computerScore');
const ui = document.querySelector('.gameUI');
const againBtn = document.querySelector('#playAgain');
const gameBtn = document.querySelector('.gameBtn');


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

againBtn.addEventListener('click', () => {
    user.textContent = 0;
    computer.textContent = 0;
    userScore = 0;
    computerScore = 0;
    ui.style.visibility = 'visible';
    playAgain.style.visibility = 'hidden';
    board.textContent = ``;
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
        board.textContent = `It's a tie!`
    }
    else if (result == 1) {
        board.textContent = `You win the round! ${userWeapon} beats ${computerWeapon}.`
        userScore++;
    }
    else if (result == 2) {
        board.textContent = `You lose the round! ${computerWeapon} beats ${userWeapon}.`
        computerScore++;
    }
}

const game = () => {
    playRound();

    user.textContent = userScore;
    computer.textContent = computerScore;

    if(userScore === 5) {
        board.textContent = 'You win! You saved the day!';
        ui.style.visibility = 'hidden';
        playAgain.style.visibility = 'visible';
    }
    if(computerScore === 5) {
        board.textContent = 'You lose. Thanks for nothing, shmuck.';
        ui.style.visibility = 'hidden';
        playAgain.style.visibility = 'visible';
    }
}


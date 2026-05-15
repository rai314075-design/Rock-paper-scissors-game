let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');


const getComputerChoice = () => {
    //rock,paper,scissors -> modular
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    // Generate computer's choice -> modular
    const compChoice = getComputerChoice();


    if (userChoice === compChoice) {//draw
/////////////////////////////////////
        msg.innerText = "Game was Draw. Play again.";///change msg
        msg.style.backgroundColor = '#081b31';///change color
        ///////////////////////////////////////

    } else if ((userChoice === 'rock' && compChoice === 'scissors') ||//////you win conditions
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')) {
        console.log("You win!");
        userScore++;
        userScorePara.innerText = userScore;

        /////////////////////////////////////////////

        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;///change msg
        msg.style.backgroundColor = 'green';///change color
        /////////////////////////////////////////////////////
    } else {
        console.log("You lose!");//////////////////////comulpter win conditions
        compScore++;
        compScorePara.innerText = compScore;
        //////////////////////////////////////////////////////
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;///change msg
        msg.style.backgroundColor = 'red';///change color
    }
////////////////////////////////////////
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});

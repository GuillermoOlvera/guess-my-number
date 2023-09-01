'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    // When user didn't type a number.
    if (!guess) {
        displayMessage('No number');
        // when player wins.
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('🎉 Correct Number 🎉');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When number is high
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '👆🏻 To High 👆🏻' : '👇🏻 To Low 👇🏻');
            score--
            document.querySelector('.score').textContent = score -= 1;
        } else {
            displayMessage('😢 You lost the game 😢');
            document.querySelector('.score').textContent = 0;
        }
    }
});

const reset = document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('input').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
});
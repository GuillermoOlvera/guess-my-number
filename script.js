'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // When user didn't type a number.
    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No number ⛔️';
        // when player wins.
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number 🎉';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        // When number is high
    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '👆🏻 To High 👆🏻';
            document.querySelector('.score').textContent = score -= 1;
        } else {
            document.querySelector('.message').textContent = '😢 You lost the game 😢'
        }
        // When number is low
    } else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '👇🏻 To Low 👇🏻';
            document.querySelector('.score').textContent = score -= 1
        } else {
            document.querySelector('.message').textContent = '😢 You lost the game 😢'
        }
    }
});
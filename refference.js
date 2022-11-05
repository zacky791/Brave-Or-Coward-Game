'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct Number!';

//document.querySelector('.number').textContent = 'x';
document.querySelector('.score').textContent = 10; */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no number
  if (!guess) {
    return displayMessage('༼ つ ◕_◕ ༽つ No Number !');

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'Number are too high 👽'
          : 'Number are too low 😴';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost nub 😴';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'you are the winner chicken dinner 🐱‍🏍😍';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
/*
  }
   //when the guess is too high
  else if (guess > secretNumber) {
    if (score === 1) {
      document.querySelector('.message').textContent = 'You lost nub 😴';
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = 'Number are too high 👽';
      score--;
      document.querySelector('.score').textContent = score;
    }

    //when the guess is too low
  } else if (guess < secretNumber) {
    if (score === 1) {
      document.querySelector('.message').textContent = 'You lost nub 😴';
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = 'Number are too low 😴';
      score--;
      document.querySelector('.score').textContent = score;
    }
    */
// when players win

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing MF!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

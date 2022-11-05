'use strict';

//selecting element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const scorePlayer1El = document.querySelector('#score--0');
const scorePlayer2El = document.getElementById('score--1');
const currentScorePlayer1 = document.getElementById('current--0');
const currentScorePlayer2 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
let playing = true;
let activePlayer = 0;
let scores = [0, 0];

//starting condition
scorePlayer1El.textContent = 0;
scorePlayer2El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3.check for rolled 1:if true
    if (dice !== 1) {
      // add dice to current score
      //currentScore = currentScore + dice;
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //switch to next player
    } else {
      //2.currenct score will be 0
      currentScore = 0;
      //3. second player turn
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      switchPlayer();
    }
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  console.log('test');
});

//btn for hold
btnHold.addEventListener('click', () => {
  if (playing) {
    //1.add current score to score
    scores[activePlayer] += currentScore;
    // test
    console.log(scores);
    //2. Display score
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[`${activePlayer}`];
    //3. Reset current score to 0
    currentScore = 0;
    //4.Display current score
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    //5.Switch player

    console.log(scores[activePlayer]);
    //6. reach 100
    diceEl.classList.add('hidden');
    if (scores[activePlayer] >= 100) {
      //7.Finish game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      switchPlayer();
    }
  }
});

//btn for new game
btnNew.addEventListener('click', function () {
  playing = true;
  scores = [0, 0];
  console.log(scores);
  scorePlayer1El.textContent = 0;
  scorePlayer2El.textContent = 0;
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});

/*

const myName = 'zack';

function first() {
  const age = 40;

  if (age >= 30) {
    let decade = 3;
    var millenial = 'hai';
  }

  function second() {
    const job = 'teacher';

    console.log(`${myName} is a ${millenial} old ${job}`);
  }
  second();
}
first();


const myName = 'zack';

function first() {
  var millenial = 'yes';
}

function second() {
  const job = 'teacher';

  console.log(`${myName} is a ${millenial} old ${job}`);
}

console.log(second());

*/

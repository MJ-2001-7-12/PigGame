'use strict';
function updateScore() {
    const currentScore = rollDice();
    const player1ScoreElement = document.getElementById('score--0');
    player1ScoreElement.textContent = currentScore;
  }

  updateScore();
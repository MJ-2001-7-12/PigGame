'use strict';
/*function updateScore() {
    const currentScore = rollDice();
    const player1ScoreElement = document.getElementById('score--0');
    player1ScoreElement.textContent = currentScore;
  }

  updateScore();*/

    const player1ScoreElement = document.getElementById('score--0');
    let currTotal = Number(player1ScoreElement.textContent)
    player1ScoreElement.textContent = currTotal+ Number(diceNumber);

    
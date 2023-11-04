'use strict';



const changeBg=() => {
const player1= document.getElementById("player1")
const player0= document.getElementById("player0")
if(player1.classList.contains('player--active')){
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
}
else {
    player0.classList.remove("player--active");
    player1.classList.add("player--active");   
}

}



// function updateScore() {
//     const currentScore = rollDice();
//     const player1ScoreElement = document.getElementById('score--0');
//     player1ScoreElement.textContent = currentScore;
//   }

//   updateScore();
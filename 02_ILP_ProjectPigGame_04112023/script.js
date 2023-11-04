'use strict';

//onClick of New Game
function setZero() {
  //console.log('New Game Clicked');
  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  ocument.getElementById('current--1').textContent = '0';
}
/*function updateScore() {
    const currentScore = rollDice();
    const player1ScoreElement = document.getElementById('score--0');
    player1ScoreElement.textContent = currentScore;
  }
 updateScore();*/
//let player1Score=0,player2score=0;


//Function to Roll Dice
function rollDice(){


    // Returns a random integer from 1 to 6:
    let diceNumber = Math.floor(Math.random() * 6) + 1; ; 
    console.log(diceNumber)

    //Displaying dice
    document.getElementById("dice").src = `dice-${[diceNumber]}.png`; 



    let playerId;

    const player1= document.getElementById("player--1")
    const player0= document.getElementById("player--0")


 if(player1.classList.contains('player--active')){
     player1.classList.remove("player--active");
     player0.classList.add("player--active");
     playerId = 0;
    
 }
 else {
     player0.classList.remove("player--active");
     player1.classList.add("player--active");
    playerId=1;
      
 }

    
 //   let playerId = 1;
    updateScore(playerId,diceNumber)


}



function updateScore(playerId, diceNumber){

    let currPlayer;
    let playerTotalScore;

    if(playerId==1){
        currPlayer = 'current--1';
        playerTotalScore = 'score--1'
    }else{
        currPlayer = 'current--0';
        playerTotalScore = 'score--0'

    }

    //current score of player
    document.getElementById(currPlayer).innerHTML = diceNumber;


    // const player1ScoreElement = document.getElementById('score--0');
    // let currTotal = Number(player1ScoreElement.textContent)
    // player1ScoreElement.textContent = currTotal+ Number(diceNumber);

}



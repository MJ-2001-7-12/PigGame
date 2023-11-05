'use strict';

//onClick of New Game
function setZero() {
  //console.log('New Game Clicked');
  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';
}



//Function to Roll Dice
function rollDice(){

    // Returns a random integer from 1 to 6:
    let diceNumber = Math.floor(Math.random() * 6) + 1; 
    //console.log(diceNumber)

    //Displaying dice
    document.getElementById("dice").src = `dice-${[diceNumber]}.png`; 

    let playerId= getActivePlayer();

    if(diceNumber==1){

       switchActivePlayer();

    }else{
        
       updateScore(playerId,diceNumber);

    }

}




//Function to update score
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

    //Current score of player
    document.getElementById(currPlayer).innerHTML = diceNumber;

    //Updating total score
    let playerScoreElement = document.getElementById(playerTotalScore);
    let currTotal = Number(playerScoreElement.textContent);
    playerScoreElement.textContent = currTotal+ Number(diceNumber);

}


//function to switch player
function switchActivePlayer(){

    let player0 = document.getElementById('player--0');
    let player1 = document.getElementById('player--1');

    if(player1.classList.contains('player--active')){

        player1.classList.remove("player--active");
        player0.classList.add("player--active");

    }
    else {

        player0.classList.remove("player--active");
        player1.classList.add("player--active");
           
    }

}




//Function to get current active player
function getActivePlayer(){

    let player0 = document.getElementById('player--0');
    let player1 = document.getElementById('player--1');

    if(player1.classList.contains('player--active')){

        return 1;
    
    }
    else {

        return 0;
         
    }

}

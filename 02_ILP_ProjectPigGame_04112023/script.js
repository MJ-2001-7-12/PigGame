'use strict';




//Function to Roll Dice
function rollDice(){


    let dice = document.getElementById('dice');
     dice.style.transform = "scaleX(-1)";
    // Returns a random integer from 1 to 6:
    let diceNumber = Math.floor(Math.random() * 6) + 1; ; 
    console.log(diceNumber)

    //Displaying dice
    document.getElementById("dice").src = `dice-${[diceNumber]}.png`; 

    //Upadting Current Number
    document.getElementById("current--0").innerHTML = diceNumber;

    // const player1ScoreElement = document.getElementById('score--0');
    // let currTotal = Number(player1ScoreElement.textContent)
    // player1ScoreElement.textContent = currTotal+ Number(diceNumber);

}


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


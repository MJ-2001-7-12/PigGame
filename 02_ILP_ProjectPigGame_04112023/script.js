'use strict';

let player1Score=0,player2score=0;

const changeBg=() => {
const player1= document.getElementById("player1")
const player0= document.getElementById("player0")
if(player1.classList.contains('player--active')){
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
    return player0;
}
else {
    player0.classList.remove("player--active");
    player1.classList.add("player--active"); 
    return player1;  
}
}

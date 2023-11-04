'use strict';


// let section=document.querySelectorAll(".player--active0")

// const changeBg= () => {
//     document.body.style.backgroundColor = "red" ;
// }


// // const changeStyle=(button) => {
// //     // button.classList.toggle("active");
// //     button.classList.toggle("button-secondary");
// // }

// const changeStyle=(section) => {
//     section.classList.toggle("player_active")
// }


// const div = document.querySelector('div');



const changeBg=() => {
    

const player1= document.getElementById("player1")
const player0= document.getElementById("player0")
if(player1.classList.contains('player--active')){
    console.log("hello")
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
}
else if(player0.classList.contains('player--active')){
    console.log("hi")
    player0.classList.remove("player--active");
    player1.classList.add("player--active");   
}

}

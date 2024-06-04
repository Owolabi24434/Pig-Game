//let score1 = 0;
//let score2 = 0;

let scores, roundScore, activePlayer, gamePlaying;

init();

let lastDice1, lastDice2;

//dice = Math.floor(Math.random() * 6) + 1;
//document.getElementById("current-" + activePlayer).textContent = dice;

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlaying) {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
//2. Display the result
//let diceDom = document.querySelector(".dice");
//diceDom.style.display = "block";
//diceDom.src = "dice-" + dice + ".png";

document.querySelector("#dice-1").style.display = "block";
document.querySelector("#dice-2").style.display = "block";
document.querySelector("#dice-1").src = "dice-" + dice1 + ".png";
document.querySelector("#dice-2").src = "dice-" + dice2 + ".png";


//3. Update the round score if the rolled number is not a 1
if (dice1 == 6 && lastDice1 == 6 || dice2 === 6 && lastDice2 === 6) {
    //player loses his score
    scores[activePlayer] = 0;
    // Update the UI
    document.getElementById("score-" + activePlayer).textContent = '0';
    nextPlayer();

} else if (dice1 !== 1 && dice2 !== 1) {
    //Add score
    roundScore += dice1 + dice2;
  document.getElementById("current-" + activePlayer).textContent = roundScore;
} else{
    //next player
    nextPlayer();

}    
  lastDice1= dice1;
  lastDice2 = dice2;
    }  
});


document.querySelector(".btn-hold").addEventListener("click", function () {
    if(gamePlaying){
        // 1. Add the currentScore to the GLOBAL
    scores[activePlayer] += roundScore
    // 2. Update the UI
    document.querySelector("#score-"+ activePlayer).textContent = scores[activePlayer];
    
    let finalScore = document.querySelector(".final-score").value;
    //let winningScore;
    if (finalScore) {
        winningScore = finalScore;
    } else{
        winningScore = 100;
    }
    
    // 3. Check if player won the game
    if (scores[activePlayer] >= winningScore){
        document.querySelector("#name-" + activePlayer).textContent = "WINNER";
        //document.querySelector(".dice").style.display = "none";
        document.querySelector("#dice-1").style.display = "none";
        document.querySelector("#dice-2").style.display = "none";


        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        gamePlaying = false;
    } else {
      //next player  
      nextPlayer();

    }

    }
    
       
});

document.querySelector(".btn-new").addEventListener("click", function () {

    init();
    
})

function nextPlayer() {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // reset the roundScore back to zero
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
   // document.querySelector(".dice").style.display = "none";
    document.querySelector("#dice-1").style.display = "none";
    document.querySelector("#dice-2").style.display = "none";
    
}

function init() {
scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";
document.querySelector("#dice-1").style.display = "none";
document.querySelector("#dice-2").style.display = "none";
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");
document.querySelector(".final-score").value = "";
gamePlaying = true;

}
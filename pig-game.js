let scores, roundScore, activePlayer, gamePlaying, i, array, changeScore ;

init();

//dice = Math.floor(Math.random() * 6) + 1;
//document.getElementById("current-" + activePlayer).textContent = dice;

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;
        let diceTwo = Math.floor(Math.random() * 6) + 1;
//2. Display the result
let diceDom = document.querySelector(".dice");
diceDom.style.display = "block";
document.querySelector(".dice-two").style.display = "block";
diceDom.src = "dice-" + dice + ".png";
document.querySelector(".dice-two").src = "dice-" + diceTwo + ".png";

if (dice !== 1 && diceTwo !== 1) {
    //Add score
    roundScore = dice + diceTwo;
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  array[i] = dice;
  i = i++;
  if (dice == 6 && array[i-2] == 6) {
    nextPlayer();

  }
} else{
    nextPlayer();

}    
    }
    
})


document.querySelector(".btn-hold").addEventListener("click", function () {
    if(gamePlaying){
        // 1. Add the currentScore to the GLOBAL
    scores[activePlayer] += roundScore;
    // 2. Update the UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    //next player
    //nextPlayer();
    // 3. Check if player won the game
    if (scores[activePlayer] >= changeScore){
        document.getElementById("name-" + activePlayer).textContent = "WINNER";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        gamePlaying = false;
    } else {
      //next player  
      nextPlayer();

    }

    }
    
       
})

function nextPlayer() {
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    // reset the roundScore back to zero
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice-two").style.display = "none";
    array = [];
}

document.querySelector(".btn-new").addEventListener("click", init);
document.getElementById("changeScore-btn").addEventListener("click", function () {
    changeScore = document.getElementById("changeScore-input").value;
    alert("To win you need " + changeScore + " score points");
});


function init() {
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;


document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".dice").style.display = "none";
document.querySelector(".dice-two").style.display = "none";


document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");

i = 0;
array = [];
changeScore = 100;
}
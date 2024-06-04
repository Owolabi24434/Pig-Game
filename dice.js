let player1Score = document.getElementById("score-0");
let player1ScoreValue = 0;
player1Score.textContent = player1ScoreValue;

let player2Score = document.getElementById("score-1");
let player2ScoreValue = 0;
player2Score.textContent = player2ScoreValue;

let currentScore1 = document.getElementById("current-0");
let curentScoreValue1 = 0;
currentScore1.textContent = player1ScoreValue;

let currentScore2 = document.getElementById("current-1");
let curentScoreValue2 = 0;
currentScore2.textContent = player2ScoreValue;

let dice1 = document.getElementById("dice-1");
let count1 = 0;
dice1.textContent = count1;

let dice2 = document.getElementById("dice-2");
let count2 = 0;
dice2.textContent = count2;

let newGame = document.querySelector(".btn-new");
let rollDice = document.querySelector(".btn-roll"); 
let hold = document.querySelector(".btn-hold");

rollDice.addEventListener("click", function roll() {  
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    dice1.textContent = randomNumber1;
    dice2.textContent = randomNumber2;
    
    currentScore1.appendChild(player1Score.textContent);
    currentScore2.appendChild(player2Score.textContent);
      
})

hold.addEventListener("click", holdPlayer)
function holdPlayer() {
    holdPlayer1();
    
}

function holdPlayer1() {
    player1Score.textContent += curentScoreValue1;
}






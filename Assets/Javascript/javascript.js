var startButton = document.getElementById("start");
var text = document.getElementById("text");
var timer = document.getElementById("time");
var quiz= document.getElementById("quiz");
var highScores = document.getElementById("highscores");
var viewHS = document.getElementById("viewHS");
var buttons = document.getElementById("buttons");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var back = document.getElementById("goback");
var secondsLeft = 50;


function setTime() {
    var timerInterval = setInterval(() => {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            console.log("test");
            clearInterval(timerInterval);
            viewHighscores();
        }

    }, 1000);
}

function start() {
    startButton.style.display = "none";
    viewHS.style.visibility = "hidden";
    questionOne();
    setTime();
};

function questionOne() {
    text.textContent = "test";
    buttons.style.visibility = "visible";

    choice1.textContent = "test1"; 
    choice2.textContent = "test1";
    choice3.textContent = "test1";
    choice4.textContent = "test1";

    choice1.addEventListener("click", questionTwo);
    choice2.addEventListener("click", questionTwo);
    choice3.addEventListener("click", questionTwo);
    choice4.addEventListener("click", questionTwo);
}

function questionTwo() {
    text.textContent = "test2";
    choice1.textContent = "test2"; 
    choice2.textContent = "test2";
    choice3.textContent = "test2";
    choice4.textContent = "test2";

    choice1.addEventListener("click", questionThree);
    choice2.addEventListener("click", questionThree);
    choice3.addEventListener("click", questionThree);
    choice4.addEventListener("click", questionThree);
}

function questionThree() {
    text.textContent = "test3";
    choice1.textContent = "test3"; 
    choice2.textContent = "test3";
    choice3.textContent = "test3";
    choice4.textContent = "test3";

    choice1.addEventListener("click", questionFour);
    choice2.addEventListener("click", questionFour);
    choice3.addEventListener("click", questionFour);
    choice4.addEventListener("click", questionFour);
}

function questionFour() {
    text.textContent = "test4";
    choice1.textContent = "test4"; 
    choice2.textContent = "test4";
    choice3.textContent = "test4";
    choice4.textContent = "test4";

    choice1.addEventListener("click", questionFive);
    choice2.addEventListener("click", questionFive);
    choice3.addEventListener("click", questionFive);
    choice4.addEventListener("click", questionFive);
}

function questionFive() {
    text.textContent = "test5";
    choice1.textContent = "test5"; 
    choice2.textContent = "test5";
    choice3.textContent = "test5";
    choice4.textContent = "test5";

    choice1.addEventListener("click", highscoreTransition);
    choice2.addEventListener("click", highscoreTransition);
    choice3.addEventListener("click", highscoreTransition);
    choice4.addEventListener("click", highscoreTransition);
    
}

function highscoreTransition() {
    viewHighscores();
}

function addScore() {

}

function viewHighscores() {
    quiz.style.display = "none";
    buttons.style.display = "none";
    highScores.style.visibility = "visible";
}

function refresh() {
    location.reload();
}





startButton.addEventListener("click", start);
viewHS.addEventListener("click", viewHighscores);
back.addEventListener("click", refresh);
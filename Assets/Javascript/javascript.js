var startButton = document.getElementById("start");
var text = document.getElementById("text");
var timer = document.getElementById("time");
var quiz= document.getElementById("quiz");
var highScores = document.getElementById("highscores");
var viewHS = document.getElementById("viewHS");
var textInput = document.getElementById("textinput");
var list = document.getElementById("list");
var enterScore = document.getElementById("enterScore");
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
            addScoreTransition();
        }

    }, 1000);
}

function start() {
    startButton.style.display = "none";
    viewHS.style.visibility = "hidden";
    questionOne();
    setTime();
};

function wrong() {
    secondsLeft -= 10;
    document.getElementById("rightorwrong").textContent = "Wrong!";
}

function right() {
    document.getElementById("rightorwrong").textContent = "Correct!"
}

function questionOne() {
    text.textContent = "test";
    buttons.style.visibility = "visible";

    choice1.textContent = "right"; 
    choice2.textContent = "test1";
    choice3.textContent = "test1";
    choice4.textContent = "test1";

    // choice1.addEventListener("click", questionTwo);
    choice1.addEventListener("click", () => {questionTwo(); right()});
    choice2.addEventListener("click", () => {questionTwo(); wrong()});
    choice3.addEventListener("click", () => {questionTwo(); wrong()});
    choice4.addEventListener("click", () => {questionTwo(); wrong()});
}

function questionTwo() {
    text.textContent = "test2";
    choice1.textContent = "test2"; 
    choice2.textContent = "test2";
    choice3.textContent = "right";
    choice4.textContent = "test2";

    choice1.addEventListener("click", () => {questionThree(); wrong()});
    choice2.addEventListener("click", () => {questionThree(); wrong()});
    choice3.addEventListener("click", () => {questionThree(); right()});
    choice4.addEventListener("click", () => {questionThree(); wrong()});
}

function questionThree() {
    text.textContent = "test3";
    choice1.textContent = "test3"; 
    choice2.textContent = "test3";
    choice3.textContent = "test3";
    choice4.textContent = "right";

    choice1.addEventListener("click", () => {questionFour(); wrong()});
    choice2.addEventListener("click", () => {questionFour(); wrong()});
    choice3.addEventListener("click", () => {questionFour(); wrong()});
    choice4.addEventListener("click", () => {questionFour(); right()});
}

function questionFour() {
    text.textContent = "test4";
    choice1.textContent = "test4"; 
    choice2.textContent = "test4";
    choice3.textContent = "right";
    choice4.textContent = "test4";

    choice1.addEventListener("click", () => {questionFive(); wrong()});
    choice2.addEventListener("click", () => {questionFive(); wrong()});
    choice3.addEventListener("click", () => {questionFive(); right()});
    choice4.addEventListener("click", () => {questionFive(); wrong()});
}

function questionFive() {
    text.textContent = "test5";
    choice1.textContent = "test5"; 
    choice2.textContent = "test5";
    choice3.textContent = "test5";
    choice4.textContent = "test5";

    choice1.addEventListener("click", () => {addScoreTransition(); wrong();});
    choice2.addEventListener("click", () => {addScoreTransition(); wrong();});
    choice3.addEventListener("click", () => {addScoreTransition(); wrong();});
    choice4.addEventListener("click", () => {addScoreTransition(); right();});
    
}

function addScoreTransition() {
    quiz.style.display = "none"
    enterScore.style.visibility = "visible";
    document.getElementById("rightorwrong").style.display = "none"
}

function addScore() {
    var node = document.createElement("li");
    var textnode = document.createTextNode(textInput.value + " Score = " + secondsLeft);
    node.appendChild(textnode);
    list.appendChild(node);
    viewHighscores();
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
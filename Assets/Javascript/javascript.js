//Declare Variables
var startButton = document.getElementById("start");
var text = document.getElementById("text");
var timer = document.getElementById("time");
var quiz= document.getElementById("quiz");
var highScores = document.getElementById("highscores");
var viewHS = document.getElementById("viewHS");
var textInput = document.getElementById("textinput");
var list = document.getElementById("list");
var enterScore = document.getElementById("enterScore");
var scoreSubmit= document.getElementById("scoresubmit")
var buttons = document.getElementById("buttons");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var back = document.getElementById("goback");
var secondsLeft = 50;
var clearLocal = document.getElementById("clear");


//Timer
function setTime() {
    var timerInterval = setInterval(() => {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if(secondsLeft <= 0) {
            console.log("test");
            clearInterval(timerInterval);
            addScoreTransition();
        }

    }, 1000);
}

//Start Quiz
function start() {
    startButton.style.display = "none";
    viewHS.style.visibility = "hidden";
    questionOne();
    setTime();
};

//Right and wrong function, decreases seconds left.
function wrong() {
    secondsLeft = secondsLeft - 5;
    document.getElementById("rightorwrong").textContent = "Wrong!";
}


function right() {
    document.getElementById("rightorwrong").textContent = "Correct!";
    secondsLeft = secondsLeft - 0;
}


//Questions, all transition into each other
function questionOne() {
    text.textContent = "Which of the following is an actual string?";
    buttons.style.visibility = "visible";

    choice1.textContent = "'string'"; 
    choice2.textContent = "[string]";
    choice3.textContent = "<string>";
    choice4.textContent = "/string/";

    choice1.addEventListener("click", () => {questionTwo(); right()});
    choice2.addEventListener("click", () => {questionTwo(); wrong()});
    choice3.addEventListener("click", () => {questionTwo(); wrong()});
    choice4.addEventListener("click", () => {questionTwo(); wrong()});

}

function questionTwo() {
    text.textContent = "Which of the following isn't a real value?";
    choice1.textContent = "false"; 
    choice2.textContent = "true";
    choice3.textContent = "maybe";
    choice4.textContent = "'12'";

    choice1.addEventListener("click", () => {questionThree(); wrong()});
    choice2.addEventListener("click", () => {questionThree(); wrong()});
    choice3.addEventListener("click", () => {questionThree(); right()});
    choice4.addEventListener("click", () => {questionThree(); wrong()});
}

function questionThree() {
    text.textContent = "Are semicolons required?";
    choice1.textContent = "Yes"; 
    choice2.textContent = "No";
    choice3.textContent = "Only when woring with numbers";
    choice4.textContent = "Not required, but highly recommended";

    choice1.addEventListener("click", () => {questionFour(); wrong()});
    choice2.addEventListener("click", () => {questionFour(); wrong()});
    choice3.addEventListener("click", () => {questionFour(); wrong()});
    choice4.addEventListener("click", () => {questionFour(); right()});
}

function questionFour() {
    text.textContent = "How is Javascript linked to HTML?";
    choice1.textContent = "HTML detects it"; 
    choice2.textContent = "It's linked into CSS";
    choice3.textContent = "With a <script> tag";
    choice4.textContent = "You don't need to link";

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

//Transition into submiting score entry
function addScoreTransition() {
    quiz.style.display = "none"
    enterScore.style.visibility = "visible";
    document.getElementById("rightorwrong").style.display = "none"
}

function addScore() {
    var node = document.createElement("li");
    var textnode = document.createTextNode(textInput.value + " Score = " + secondsLeft);
    var score = {input: textInput.value, score: secondsLeft};
    
    list.appendChild(node);

    localStorage.setItem("test", JSON.stringify(score));

    var textnode = JSON.parse(localStorage.getItem("test"));

    node.textContent = `${textnode.input}: ${textnode.score}`;




    localStorage.getItem("test");

 
    viewHighscores();
}

//Shows Highscores screen
function viewHighscores() {
    quiz.style.display = "none";
    buttons.style.display = "none";
    highScores.style.visibility = "visible";
}
//Refreshes page when clicked "Go Back"
function refresh() {
    location.reload();
}




//Event listeners for buttons
startButton.addEventListener("click", start);
viewHS.addEventListener("click", viewHighscores);
back.addEventListener("click", refresh);
clearLocal.addEventListener("click", () => {
    localStorage.clear;
})

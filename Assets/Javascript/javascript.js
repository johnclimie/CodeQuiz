var startButton = document.getElementById("start");
var text = document.getElementById("text");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

function start() {
    startButton.style.visibility = "hidden";
    questionOne();
};

function questionOne() {
    text.textContent = "test";
    choice1.style.visibility = "visible";
    choice2.style.visibility = "visible";
    choice3.style.visibility = "visible";
    choice4.style.visibility = "visible";

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

    // choice1.addEventListener("click", questionFive);
    // choice2.addEventListener("click", questionFive);
    // choice3.addEventListener("click", questionFive);
    // choice4.addEventListener("click", questionFive);
}





startButton.addEventListener("click", start);
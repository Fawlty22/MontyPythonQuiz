var startCardEl = document.querySelector('#start-card')
var startButtonEl = document.querySelector('#start-btn')
var timerEl = document.querySelector('#timer')
var question1El = document.querySelector('#question-1')
var question2El = document.querySelector('#question-2')
var question3El = document.querySelector('#question-3')
var question4El = document.querySelector('#question-4')
var endCardEl = document.querySelector('#end-card')
var highscoresCardEl = document.querySelector('#highscores-card')
var score = ''
var timer = ''

var startTimer = function() {
    setInterval(timerRun, 1000)
}

var wrongAnswer = function() {
    // attach the word wrong to the next card at the bottom

    // decrease timer by ten seconds
    timer = timer - 10
}

var rightAnswer = function() {
    // attach the word correct to the next card at the bottom

    // increase score by 1
    score++
}

var timerRun = function () {
    timer = timer - 1
    timerEl.textContent = 'Time Remaining: ' + timer 
}

var startGame = function() {
    timer = 40
    startTimer();

    startCardEl.setAttribute('style', 'display:none');
    question1El.setAttribute('style', 'display:block');

    document.getElementById('btn-1a').addEventListener('click', () => {
        toQuestion2();
        wrongAnswer();
    });
    document.getElementById('btn-1b').addEventListener('click', () => {
        toQuestion2();
        rightAnswer();
    });
    document.getElementById('btn-1c').addEventListener('click', () => {
        toQuestion2();
        wrongAnswer();
    });
    document.getElementById('btn-1d').addEventListener('click', () => {
        toQuestion2();
        wrongAnswer();
    });
};



var toQuestion2 = function() {
    question1El.setAttribute('style', 'display:none');
    question2El.setAttribute('style', 'display:block');

    document.getElementById('btn-2a').addEventListener('click', () => {
        toQuestion3();
        wrongAnswer();
    });
    document.getElementById('btn-2b').addEventListener('click', () => {
        toQuestion3();
        wrongAnswer();
    });
    document.getElementById('btn-2c').addEventListener('click', () => {
        toQuestion3();
        wrongAnswer();
    });
    document.getElementById('btn-2d').addEventListener('click', () => {
        toQuestion3();
        rightAnswer();
    });
}

var toQuestion3 = function() {
    question2El.setAttribute('style', 'display:none');
    question3El.setAttribute('style', 'display:block');

    document.getElementById('btn-3a').addEventListener('click', () => {
        toQuestion4();
        wrongAnswer();
    });
    document.getElementById('btn-3b').addEventListener('click', () => {
        toQuestion4();
        wrongAnswer();
    });
    document.getElementById('btn-3c').addEventListener('click', () => {
        toQuestion4();
        wrongAnswer();
    });
    document.getElementById('btn-3d').addEventListener('click', () => {
        toQuestion4();
        rightAnswer();
    });
}

var toQuestion4 = function() {
    question3El.setAttribute('style', 'display:none');
    question4El.setAttribute('style', 'display:block');

    document.getElementById('btn-4a').addEventListener('click', () => {
        toEndCard();
        wrongAnswer();
    });
    document.getElementById('btn-4b').addEventListener('click', () => {
        toEndCard();
        wrongAnswer();
    });
    document.getElementById('btn-4c').addEventListener('click', () => {
        toEndCard();
        rightAnswer();
    });
    document.getElementById('btn-4d').addEventListener('click', () => {
        toEndCard();
        wrongAnswer();
    });

    stopTimer();
    
}

var toEndCard = function() {
    question4El.setAttribute('style', 'display:none');
    endCardEl.setAttribute('style', 'display:block');
}


if (timer == 0){
    
}
startButtonEl.addEventListener('click', startGame);



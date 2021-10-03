var startCardEl = document.querySelector('#start-card')
var startButtonEl = document.querySelector('#start-btn')
var timerEl = document.querySelector('#timer')
let timerID;
var question1El = document.querySelector('#question-1')
var question2El = document.querySelector('#question-2')
var question3El = document.querySelector('#question-3')
var question4El = document.querySelector('#question-4')
var endCardEl = document.querySelector('#end-card')
var highscoresCardEl = document.querySelector('#highscores-card')
var playerNameEl = document.querySelector('#player-name')
var score = ''
var timer = ''
var highscoreList = []


var wrongAnswer = function() {
    // attach the word wrong to the next card at the bottom
    // var attachWrong = document.createElement('p')
    // attachWrong.textContent = "Wrong!"
    // attachWrong.className = 'txt-wrong'
    // .appendChild(attachWrong)

    // decrease timer by ten seconds
    timer = timer - 10
}
var rightAnswer = function() {
    // attach the word correct to the next card at the bottom

    // increase score by 1
    score++
}

// Timer Functions
var timerRun = function () {
    timer = parseInt(timer - 1)
    timerEl.textContent = 'Time Remaining: ' + timer 
}

var startTimer = function() {
    timerID = setInterval(timerRun, 1000)
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
}

var toEndCard = function() {
    question4El.setAttribute('style', 'display:none');
    endCardEl.setAttribute('style', 'display:block');

    clearInterval(timerID);

    document.getElementById('submit-score-btn').addEventListener('click', (event) => {
        toHighscores();
        addHighscore(event);
    });

}


var toHighscores = function() {
    endCardEl.setAttribute('style', 'display:none');
    highscoresCardEl.setAttribute('style', 'display:block');

    document.getElementById('play-again-btn').addEventListener('click', playAgain)
}

var addHighscore = function(event) {
    event.preventDefault();
    // create object with player data
    var scoreEntry = {
        Name: playerNameEl.value,
        Score: score,
    }
    // add object to array
    highscoreList.push(scoreEntry);
    document.getElementById('enter-score-container').reset();
    console.log(highscoreList)
    // add score to local storage

}

var clearHighscores = function() {
    // clear local storage data
}

var playAgain = function () {
    score = 0;

    highscoresCardEl.setAttribute('style', 'display:none');
    startGame();
}


// if timer runs out, show times up page
if (timer === 0) {
    // main.innerhtml = endcard    i dont understand why this isnt triggering.  leaving it for now. 
    document.getElementById('main').innerHTML = endCardEl;
    endCardEl.setAttribute('style', 'display:block')
    clearInterval(timerID);
}

document.querySelector('.view-scores-link').addEventListener('click', function(event){
    event.preventDefault();
    highscoresCardEl.setAttribute('style', 'display:block');
    document.getElementById('play-again-btn').addEventListener('click', playAgain)
})
startButtonEl.addEventListener('click', startGame);



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
var timer = ''
var highscoreList = []


var wrongAnswer = function() {
    return timer -= 10
}


// Timer Functions
var timerRun = function () {
    timer = parseInt(timer - 1)
    timerEl.textContent = 'Time Remaining: ' + timer + 's'; 

    // if timer runs out, show times up page
if (timer < 0) {
    // if timer < 0, hide all cards and show end card   
    endCardEl.setAttribute('style', 'display:block')
    question1El.setAttribute('style', 'display:none');
    question2El.setAttribute('style', 'display:none');
    question3El.setAttribute('style', 'display:none');
    question4El.setAttribute('style', 'display:none');
    highscoresCardEl.setAttribute('style', 'display:none');
    clearInterval(timerID);
}
}

var startTimer = function() {
    timerID = setInterval(timerRun, 1000)
}

var startGame = function() {
    timer = 35
    startTimer();

    startCardEl.setAttribute('style', 'display:none');
    question1El.setAttribute('style', 'display:block');

};

var toQuestion2 = function() {
    question1El.setAttribute('style', 'display:none');
    question2El.setAttribute('style', 'display:block');

}

var toQuestion3 = function() {
    question2El.setAttribute('style', 'display:none');
    question3El.setAttribute('style', 'display:block');

}

var toQuestion4 = function() {
    question3El.setAttribute('style', 'display:none');
    question4El.setAttribute('style', 'display:block');

}

var toEndCard = function() {
    question4El.setAttribute('style', 'display:none');
    endCardEl.setAttribute('style', 'display:block');

    clearInterval(timerID);
}

var toHighscores = function() {
    endCardEl.setAttribute('style', 'display:none');
    highscoresCardEl.setAttribute('style', 'display:block');
    loadHighscore();
}

var playAgain = function () {
    highscoresCardEl.setAttribute('style', 'display:none');
    startGame();
}
var validateHighscores = function() {
    highscoreList = JSON.parse(localStorage.getItem('highscores'))
    if (!highscoreList) {
        return false;
      }
}

var pushHighscore = function(event) {
    event.preventDefault();
    // create object with player data
    var scoreEntry = {
        Score: timer,
        Name: playerNameEl.value,
        
    }
    // add object to array
    if (highscoreList ===null) {
        highscoreList = []
    }
    highscoreList.push([scoreEntry.Score, scoreEntry.Name])
    
    score = 0
    document.getElementById('enter-score-container').reset();
    console.log('highscore list',highscoreList)
    highscoreList.sort((a,b) => b[0] - a[0]);
    console.log('highscore list on sort',highscoreList)
}

var saveHighscore = function() {
localStorage.setItem('highscores', JSON.stringify(highscoreList));
}

var loadHighscore = function() {
    var scoreDisplayEl = document.querySelector('#highscore-display');
    $(scoreDisplayEl).empty();

    var loadedHighscoreList = JSON.parse(localStorage.getItem('highscores'));
    if (!loadedHighscoreList) {
        return false;
      }

    for (let i = 0; i<loadedHighscoreList.length; i++){
        var addListItem = $("<li class='li-score'>").text(loadedHighscoreList[i]);
        $(scoreDisplayEl).append(addListItem)
    }
}

                            // event listeners

//submit score button
document.getElementById('submit-score-btn').addEventListener('click', (event) => {
    toHighscores();
    validateHighscores();
    pushHighscore(event);
    saveHighscore();
    loadHighscore();
});

//clear highscores button
document.querySelector('#clear-scores-btn').addEventListener('click', () => {
    localStorage.removeItem('highscores');
    highscoreList = []
    loadHighscore();
});
    
//view scores link
document.querySelector('#view-scores-link').addEventListener('click', function(event){
    event.preventDefault();
    highscoresCardEl.setAttribute('style', 'display:block');
    question1El.setAttribute('style', 'display:none');
    question2El.setAttribute('style', 'display:none');
    question3El.setAttribute('style', 'display:none');
    question4El.setAttribute('style', 'display:none');
    endCardEl.setAttribute('style', 'display:none');
    startCardEl.setAttribute('style', 'display:none');

    clearInterval(timerID)

    loadHighscore();
});

//play again btn
document.getElementById('play-again-btn').addEventListener('click', playAgain)

//start game btn
startButtonEl.addEventListener('click', startGame);

//question answers
document.getElementById('btn-1a').addEventListener('click', () => {
    toQuestion2();
    wrongAnswer();
});
document.getElementById('btn-1b').addEventListener('click', () => {
    toQuestion2();
});
document.getElementById('btn-1c').addEventListener('click', () => {
    toQuestion2();
    wrongAnswer();
});
document.getElementById('btn-1d').addEventListener('click', () => {
    toQuestion2();
    wrongAnswer();
});
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
});
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
});
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
});
document.getElementById('btn-4d').addEventListener('click', () => {
    toEndCard();
    wrongAnswer();
});

var startCardEl = document.querySelector('#start-card')
var startButtonEl = document.querySelector('#start-btn');
var question1El = document.querySelector('#question-1')
var question2El = document.querySelector('#question-2')
var question3El = document.querySelector('#question-3')
var question4El = document.querySelector('#question-4')
var endCardEl = document.querySelector('#end-card')
var highscoresCardEl = document.querySelector('#highscores-card')
startButtonEl.addEventListener('click', startGame())

var startGame = function() {
    startCardEl.setAttribute('style', 'display:none');
    question1El.setAttribute('style', 'display:block');
};
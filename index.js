"use strict";

const words = [
  "Image",
  "BoomStudios",
  "DC",
  "Marvel",
  "DarkHorse",
  "2000AD",
  "Valiant",
  "Defiant",
  "Pacific",
  "Continuity",
  "Chaos",
  "Malibu",
  "BadIdea",
  "MirageStudios",
  "MilestoneMedia",
  "AfterShock",
  "Amalgam",
  "Charlton",
  "Quality",
  "Fawcett",
  "Nedor",
];

let answer = "";
let guessesLeft = 5;
let lettersGuessed = [];
let hiddenWord = null;

function chooseRandomWord() {
  answer = words[Math.floor(Math.random() * words.length)].toUpperCase();
  console.log(answer);
}

function generateButtons() {
  let buttonLetters = "abcdefghijklmnopqrstuvwxyz0123456789"
    .toUpperCase()
    .split("")
    .map(
      (letter) =>
        `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` +
        letter +
        `'
        onClick="handleGuess('` +
        letter +
        `')"
      >
        ` +
        letter +
        `
      </button>
    `
    )
    .join("");

  document.getElementById("keyboard").innerHTML = buttonLetters;
}

function handleGuess(chosenLetter) {
  lettersGuessed.indexOf(chosenLetter) === -1
    ? lettersGuessed.push(chosenLetter)
    : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);

  if (answer.indexOf(chosenLetter) >= 0) {
    hideWordAndPushToDOM();
    didUserWin();
  } else if (answer.indexOf(chosenLetter) === -1) {
    guessesLeft--;
    guessesLeftToDom();
    didUserLose();
  }
}

function hideWordAndPushToDOM() {
  hiddenWord = answer
    .toUpperCase()
    .split("")
    .map((letter) => (lettersGuessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("wordHolder").innerHTML = hiddenWord;
}

function didUserWin() {
  if (hiddenWord === answer) {
    document.getElementById("keyboard").innerHTML = "You Won!!!";
  }
}

function didUserLose() {
  if (guessesLeft == 0) {
    document.getElementById("keyboard").innerHTML = "The answer was " + answer;
    document.getElementById("wordHolder").innerHTML = "Sorry, you lost.";
  }
}

function guessesLeftToDom() {
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
}

function reset() {
  guessesLeft = 5;
  lettersGuessed = [];

  chooseRandomWord();
  hideWordAndPushToDOM();
  generateButtons();
  guessesLeftToDom();
}

chooseRandomWord();
hideWordAndPushToDOM();
generateButtons();
guessesLeftToDom();

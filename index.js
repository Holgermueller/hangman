"use strict";

const words = ["Image", "Boom Studios", "DC", "Marvel", "Dark Horse"];

let answer = "";
let guessesLeft = 5;
let lettersGuessed = [];
let hiddenWord = null;

function chooseRandomWord() {
  answer = words[Math.floor(Math.random() * words.length)];
  console.log(answer);
}

function generateButtons() {
  let buttonLetters = "abcdefghijklmnopqrstuvwxyz"
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
    console.log("right");
  } else if (answer.indexOf(chosenLetter) === -1) {
    guessesLeft--;
    guessesLeftToDom();
    didUserLose();
    console.log("wrong");
  }
}

function hideWordAndPushToDOM() {
  hiddenWord = answer
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
    document.getElementById("keyboard").innerHTML = "Sorry, you lost.";
  }
}

function guessesLeftToDom() {
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
}

chooseRandomWord();
hideWordAndPushToDOM();
generateButtons();

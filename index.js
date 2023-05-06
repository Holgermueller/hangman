"use strict";

const word = "hello";
let lettersGuessed = ["letters guessed to here"];

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

function pushWordToDOM() {
  let underscoredWord = word.replace(/[a-z]/g, "-");
  document.getElementById("wordHolder").innerHTML = underscoredWord;
}

function handleGuess(chosenLetter) {
  console.log("click");
}

function guessesLeftToDom() {
  let guessesLeft = word.length;
  document.getElementById("guessesLeft").innerHTML = guessesLeft + 1;
}

function storeGuessedLetters() {
  document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
}

pushWordToDOM();
storeGuessedLetters();
guessesLeftToDom();
generateButtons();

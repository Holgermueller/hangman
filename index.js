"use strict";

document.addEventListener("keydown", getPlayerGuess);

const word = "hello";
let lettersGuessed = ["letters guessed to here"];

function pushWordToDOM() {
  let underscoredWord = word.replace(/[a-z]/g, "-");
  document.getElementById("wordHolder").innerHTML = underscoredWord;
}

function guessesLeftToDom() {
  let guessesLeft = word.length;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
}

function storeGuessedLetters() {
  document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
}

function getPlayerGuess(e) {
  let lettersGuessed = e.key;
  console.log(lettersGuessed);
}

pushWordToDOM();
storeGuessedLetters();
guessesLeftToDom();
getPlayerGuess();

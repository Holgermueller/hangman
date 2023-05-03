"use strict";

const word = "hello";

let lettersGuessed = ["letters guessed to here"];

function pushWordToDOM() {
  document.getElementById("wordHolder").innerHTML = word;
}

function storeGuessedLetters() {
  document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
}

pushWordToDOM();
storeGuessedLetters();

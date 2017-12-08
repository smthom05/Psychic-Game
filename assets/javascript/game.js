// Created variable for storing potential letter choices for computer.
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Created variables for counting wins, losses, and guesses.
var wins = 0;
var losses = 0;
var guesses = 9;
var isLetterGuessed;


// Created variable that randomly selects the computer's letter.
var compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

// Confirms a random letter has been selected.
console.log(compLetter);

// Created a function to reset after a win or a loss.
// function resetGame() {
//   isLetterGuessed = true;
//   document.getElementsById("letters-guessed").reset();
//   document.getElementsById("guesses-left").reset();
// }

// When the user hits a key, this function will begin...
document.onkeypress = function(event) {
  userGuess = event.key

  if (userGuess === compLetter) {
    wins++;
    alert("You got it right! My letter was " + compLetter);
    // resetGame();
  } else {
    guesses--;
  };

  if (guesses === 0) {
    losses++;
    alert("You lost! My letter was " + compLetter);
    // resetGame();
  }



  document.getElementById("wins").innerHTML = ("Wins: " + wins);
  document.getElementById("losses").innerHTML = ("Losses: " + losses);
  document.getElementById("guesses-left").innerHTML = ("Guesses left: " + guesses);
  document.getElementById("letters-guessed").append(userGuess + ", ");
};

// Created variable for storing potential letter choices for computer.
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Created variables for counting wins, losses, and guesses.
var wins = 0;
var losses = 0;
var guesses = 9;

// Created variable that randomly selects the computer's letter.
var compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

// Confirms a random letter has been selected.
console.log(compLetter);

//Created a function to reset after a win or a loss.
function reset() {
  document.getElementById("letters-guessed").innerHTML = ("Letters Guessed: ");
  document.getElementById("guesses-left").innerHTML = ("Guesses Left: ");
  wins = 0;
  losses = 0;
  startGame();
};

function startGame() {
  compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  guesses = 9;
  wins = 0;
  losses = 0;
  document.getElementById("letters-guessed").innerHTML = ("Letters Guessed: ");
  document.getElementById("guesses-left").innerHTML = ("Guesses Left: ");

}

// When the user hits a key, this function will begin...
document.onkeyup = function(event) {
  userGuess = event.key;
  var userGuess = userGuess.toLowerCase()

// An if statement to make sure the key hit is a letter.
  if (event.keyCode <= 64 || event.keyCode >= 91) {
    alert("Type letters only");
  };

// An if statement that will establish the winning and losing parameters of the game.
  if (userGuess === compLetter && event.keyCode >=65 && event.keyCode <=90 ) {
    wins++;
    alert("You got it right! My letter was " + compLetter);
    startGame();
  } else if (userGuess !== compLetter && event.keyCode >=65 && event.keyCode <=90) {
    guesses--;
  };

  if (guesses === 0) {
    losses++;
    alert("You lost! My letter was " + compLetter);
    startGame();
  }

  document.getElementById("wins").innerHTML = ("Wins: " + wins);
  document.getElementById("losses").innerHTML = ("Losses: " + losses);
  document.getElementById("guesses-left").innerHTML = ("Guesses Left: " + guesses);

  if (event.keyCode >=65 && event.keyCode <=90) {
    document.getElementById("letters-guessed").append(userGuess + ", ");
  };
};

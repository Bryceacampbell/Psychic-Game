
//create an array containing all letter of the alphabet

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//create variables for wins, losses, guesses
var wins = 0;
var losses = 0;
var guesses = 9;

//create variables that hold references to the places in the HTML where we want to display things.
var winsCounter = document.getElementById("wins-counter");
var lossesCounter = document.getElementById("losses-counter");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-so-far");

//create an onkeyup function that determines which key was pressed
document.onkeyup = function (event) {
    //
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    //create if else statement to determine if the user guess and computer guess is equal or not

    // if (userGuess === computerGuess) {
    //     wins++;
    //     guesses = 9;
    //     alert("you win")
    // }
    // else {
    //     guesses--;
    // }
    // if (guesses === 0) {
    //     alert("You lose");
    //     guesses = 9;
    //     losses++;
    // }

    if (guesses === 0) {
        alert("you lose!!");
        guesses = 9;
        losses++;
    }
    else {
        if (userGuess === computerGuess) {
            wins++;
            guesses = 9;
            alert("you win!!!");
        }
        else {
            guesses--;
        }
    }

    winsCounter.textContent = wins;
    lossesCounter.textContent = losses;
    guessesLeft.textContent = guesses;
    guessesSoFar.textContent = userGuess;
};



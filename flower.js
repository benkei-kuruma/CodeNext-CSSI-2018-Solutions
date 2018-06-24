// Author: FirstName lastName
const READLINE = require("readline-sync");
const FLOWER_PICS = [
" # # #\n" +
" # O #\n" +
" # # #\n" +
"   |  \n" +
"   |  \n",
" # # #\n" +
" # O #\n" +
"   # #\n" +
"   |  \n" +
"   |  \n",
" # # #\n" +
"   O #\n" +
"   # #\n" +
"   |  \n" +
"   |  \n",
"   # #\n" +
"   O #\n" +
"   # #\n" +
"   |  \n" +
"   |  \n",
"     #\n" +
"   O #\n" +
"   # #\n" +
"   |  \n" +
"   |  \n",
"      \n" +
"   O #\n" +
"   # #\n" +
"   |  \n" +
"   |  \n",
"      \n" +
"   O  \n" +
"   # #\n" +
"   |  \n" +
"   |  \n",
"      \n" +
"   O  \n" +
"   #  \n" +
"   |  \n" +
"   |  \n",
"      \n" +
"   x  \n" +
"   |  \n" +
"   |  \n" +
"   |  \n"
]
const WORDS = ("ant baboon badger bat bear beaver camel cat clam cobra cougar coyote " +
"crow deer dog donkey duck eagle ferret fox frog goat goose hawk lion lizard llama " +
"mole monkey moose mouse mule newt otter owl panda parrot pigeon python rabbit ram " +
"rat raven rhino salmon seal shark sheep skunk sloth snake spider stork swan tiger " +
"toad trout turkey turtle weasel whale wolf wombat zebra").split(" ");

/******************************************************************************
                                global variables

missedLetters
correctLetters
secretWord
quit
*******************************************************************************/

var missedLetters, correctLetters, secretWord, quit;

function getRandomWord() {
  var randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}

function displayBoard() {
  console.log();
  console.log(FLOWER_PICS[missedLetters.length]);
  console.log();
  console.log("Missed letters: ");
  var missedLettersString = "";
  for(var i = 0; i < missedLetters.length; i++) {
    missedLettersString += missedLetters[i];
  }
  console.log(missedLettersString);
  var blanks = [];
  for(var i = 0; i < secretWord.length; i++) {
    blanks.push("_");
  }
  for(var i = 0; i < secretWord.length; i++) {
    if(correctLetters.indexOf(secretWord[i]) >= 0) {
      blanks[i] = secretWord[i];
    }
  }
  var blanksString = "";
  for(var i = 0; i < blanks.length; i++) {
    blanksString += blanks[i];
  }
  console.log(blanksString);
  console.log();
}

function getGuess(alreadyGuessed) {
  while(true) {
    var guess = READLINE.question("Guess a letter: ").toLowerCase();
    if(guess.length != 1) {
      console.log("Please guess a single letter at a time.");
    } else if(alreadyGuessed.indexOf(guess) >= 0) {
      console.log("You have already guessed that letter. Try again.");
    } else if("abcdefghijklmnopqrstuvwxyz".indexOf(guess) === -1) {
      console.log("That is not a letter. Try again.");
    } else {
      return guess;
    }
  }
}

function checkWon() {
  for(var i = 0; i < secretWord.length; i++) {
    if(correctLetters.indexOf(secretWord[i]) === -1) {
      return false;
    }
  }
  return true;
}

function playAgain() {
  var response = READLINE.question("Do you want to play again? (yes or no): ");
  return response.toLowerCase().startsWith("y");
}

function run() {
  console.log();
  console.log("F L O W E R");
  console.log("A game by FirstName LastName");
  console.log();
  missedLetters = [];
  correctLetters = [];
  secretWord = getRandomWord();
  quit = false;
  while(!quit) {
    displayBoard(missedLetters, correctLetters, secretWord);
    var alreadyGuessed = missedLetters.concat(correctLetters);
    guess = getGuess(alreadyGuessed);
    if(secretWord.indexOf(guess) >= 0) {
      correctLetters.push(guess);
    } else {
      missedLetters.push(guess);
    }
    var match = checkWon();
    if(match) {
      console.log("Yes! The secret word is \"" + secretWord + "\"! You win!");
      quit = true;
    } else if(missedLetters.length === FLOWER_PICS.length - 1) {
      displayBoard();
      console.log("You have run out of guesses!");
      console.log("The correct word was \"" + secretWord + "\"");
      quit = true;
    }
    if(quit) {
      if(playAgain()) {
        missedLetters = [];
        correctLetters = [];
        secretWord = getRandomWord();
        quit = false;
        console.log();
      } else {
        console.log();
        console.log("Goodbye!");
      }
    }
  }
}

// Run the program!
run();

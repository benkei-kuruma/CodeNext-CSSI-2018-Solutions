// Author: FirstName lastName

/******************************************************************************
                                constant variables

These are global variables that should stay the same throughout the run of the
program. After being initialized, JavaScript won't let you change them ever
again. Great for when you want to "protect" certain variables from accidental
tampering!
*******************************************************************************/

const READLINE = require("readline-sync");
const FLOWER_PICS = [
"  # # #\n" +
"  # O #\n" +
"  # # #\n" +
"    |  \n" +
"    |  \n",
"  # # #\n" +
"  # O #\n" +
"    # #\n" +
"    |  \n" +
"    |  \n",
"  # # #\n" +
"    O #\n" +
"    # #\n" +
"    |  \n" +
"    |  \n",
"    # #\n" +
"    O #\n" +
"    # #\n" +
"    |  \n" +
"    |  \n",
"      #\n" +
"    O #\n" +
"    # #\n" +
"    |  \n" +
"    |  \n",
"       \n" +
"    O #\n" +
"    # #\n" +
"    |  \n" +
"    |  \n",
"       \n" +
"    O  \n" +
"    # #\n" +
"    |  \n" +
"    |  \n",
"       \n" +
"    O  \n" +
"    #  \n" +
"    |  \n" +
"    |  \n",
"       \n" +
"    x  \n" +
"    |  \n" +
"    |  \n" +
"    |  \n"
]
const WORDS = ("ant baboon badger bat bear beaver camel cat clam cobra cougar coyote " +
"crow deer dog donkey duck eagle ferret fox frog goat goose hawk lion lizard llama " +
"mole monkey moose mouse mule newt otter owl panda parrot pigeon python rabbit ram " +
"rat raven rhino salmon seal shark sheep skunk sloth snake spider stork swan tiger " +
"toad trout turkey turtle weasel whale wolf wombat zebra").split(" ");

/******************************************************************************
                                global variables

missedLetters
String Array. Each string is an individual letter the player has missed
so far. Initialized as an empty array at the start of each game.

correctLetters
String Array. Each string is an individual letter the player has guessed
correctly so far. Initialized as an empty array at the start of each game.

secretWord
String. This is the word the player has to guess! Initialized by getRandomWord().

running
Boolean. Represents if the program should continue running (true) or not (false).
Initialized to true in setupGame(), can be changed in processGameOver();
*******************************************************************************/

var missedLetters, correctLetters, secretWord, running;

/******************************************************************************
                                  printGreeting()

  Prints a simple greeting. Be as creative as you want here. Be sure to include
  your name as the author!
*******************************************************************************/

function printGreeting() {
  console.log();
  console.log("--------------------------------------------------------------");
  console.log("                          Flower                              ");
  console.log("--------------------------------------------------------------");
  console.log("By: FirstName LastName");
  console.log();
}

/******************************************************************************
                                  setupGame()

  Initialize global variables as follows:
  -missedLetters and correctLetters should be initialized as empty arrays.
  -secretWord should be initialized as a random string from the WORD constant.
  -running should be initialized to true.
*******************************************************************************/

function setupGame() {
  missedLetters = [];
  correctLetters = [];
  secretWord = getRandomWord();
  running = true;
}

function printMissedLetters() {
  var missedLettersString = "";
  for(var i = 0; i < missedLetters.length; i++) {
    missedLettersString += missedLetters[i];
  }
  console.log("Missed letters: " + missedLettersString);
}

function printBlanks() {
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
  console.log("Secret word: " + blanksString);
}

function printBoard() {
  console.log();
  console.log(FLOWER_PICS[missedLetters.length]);
  printMissedLetters();
  printBlanks();
  console.log();
}

function getRandomWord() {
  var randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
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

function checkGuess() {
  var alreadyGuessed = missedLetters.concat(correctLetters);
  guess = getGuess(alreadyGuessed);
  if(secretWord.indexOf(guess) >= 0) {
    correctLetters.push(guess);
  } else {
    missedLetters.push(guess);
  }
}

function checkWon() {
  var won = true;
  for(var i = 0; i < secretWord.length && won; i++) {
    if(correctLetters.indexOf(secretWord[i]) === -1) {
      won = false;
    }
  }
  if(won) {
    console.log("Yes! The secret word is \"" + secretWord + "\"! You win!");
    running = false;
  } else if(missedLetters.length === FLOWER_PICS.length - 1) {
    printBoard();
    console.log("You have run out of guesses!");
    console.log("The correct word was \"" + secretWord + "\"");
    running = false;
  }
  if(!running) {
    processGameOver();
  }
}

function processGameOver() {
  var response = READLINE.question("Do you want to play again? (yes or no): ");
  if(response.toLowerCase().startsWith("y")) {
    missedLetters = [];
    correctLetters = [];
    secretWord = getRandomWord();
    running = true;
    console.log();
  } else {
    console.log();
    console.log("Goodbye!");
    console.log();
  }
}

function run() {
  printGreeting();
  setupGame();
  while(running) {
    printBoard();
    checkGuess();
    checkWon();
  }
}

// Run the program!
run();

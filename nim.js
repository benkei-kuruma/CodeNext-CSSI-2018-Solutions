// Author: FirstName lastName
var readline = require("readline-sync");

// global variables
var stonesRemaining, playerTurn, quit;

/******************************************************************************
                                  printGreeting()

  Prints a simple greeting. Be as creative as you want here. Be sure to include
  your name as the author!
*******************************************************************************/
function printGreeting() {
  console.log();
  console.log("--------------------------------------------------------------");
  console.log("                             Nim                              ");
  console.log("--------------------------------------------------------------");
  console.log("By: FirstName LastName");
  console.log();
}

/******************************************************************************
                                  setupGame()

  Initialize stonesRemaining, and decide which player will go first by
  "flipping a coin", which is generating a random number between 0 and 1.
  Based on this, playerTurn is initialized to 1 (for player 1) and -1 (for
  player 2).
*******************************************************************************/
function setupGame() {
  stonesRemaining = 10;
  var coin = Math.floor(Math.random() * 2);
  if(coin === 0) {
    playerTurn = 1;
  } else {
    playerTurn = -1;
  }
}

function printStones() {
  var stoneString = "";
  for(var i = 0; i < stonesRemaining; i++) {
    stoneString += "O ";
  }
  console.log();
  console.log(stoneString);
  console.log("Stones remaining: " + stonesRemaining);
  console.log();
}

function removeStones() {
  var stonesToRemove = 0;
  while(!(stonesToRemove >= 1 && stonesToRemove <= 3)) {
    if(playerTurn === 1) {
      stonesToRemove = readline.question("Player One, enter # of stones to remove (1, 2, or 3): ");
    } else {
      stonesToRemove = readline.question("Player Two, enter # of stones to remove (1, 2, or 3): ");
    }
    if(!(stonesToRemove >= 1 && stonesToRemove <= 3)) {
      console.log("Please enter 1, 2, or 3!");
    }
    else if(stonesToRemove > stonesRemaining) {
      stonesToRemove = 0;
      console.log("You can't remove more stones than there are remaining!");
    }
  }
  stonesRemaining -= stonesToRemove;
  playerTurn *= -1;
}

function processResult() {
  console.log();
  if(playerTurn === 1) {
    console.log("Player One wins!");
  } else {
    console.log("Player Two wins!");
  }
  console.log();
  var keepPlaying = readline.question("Play again? (yes or no): ");
  if(keepPlaying != "yes" && keepPlaying != "y") {
    quit = true;
  }
}

function run() {
  printGreeting();
  quit = false;
  while(!quit) {
    setupGame();
    while(stonesRemaining > 0) {
      printStones();
      removeStones();
    }
    processResult();
  }
  console.log("Thanks for playing! Goodbye!");
}

run();

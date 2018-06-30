// Author: FirstName lastName
var readline = require("readline-sync");

/******************************************************************************
                                global variables

stonesRemaining
Number. Represents the number of stones that haven't yet been removed. You
should initialize this in setupGame().

activePlayer
Number. Represents the currently active player. Encoded as 0 for Player One and
1 for Player Two. Initialize this in setupGame() by "flipping a coin".

quit
Boolean. Represents if the player has chosen to quit the game (true) or not
(false). Initialized to false in run(), can be altered in processResult().
*******************************************************************************/

var stonesRemaining, activePlayer, quit;

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

  Initialize stonesRemaining to whatever value you'd like the game to start
  with (10 is good). Then initialize activePlayer by simulating a coin flip to
  decide who will go first. To simulate a coin flip, generate a random integer
  between 0 and 1 (inclusive).

  Here's how you generate random integers in general:
  Math.floor(Math.random() * (max - min + 1) + min)

  Here's how you simulate a coin flip:
  Math.floor(Math.random() * (1 - 0 + 1) + 0)
  ...which can be simplified to:
  Math.floor(Math.random() * 2)
*******************************************************************************/

function setupGame() {
  stonesRemaining = 10;
  activePlayer = Math.floor(Math.random() * 2);
}

/******************************************************************************
                                  printStones()

  Print a visual representation of the number of stones remaining (e.g., a line
  of "O" characters), along with a message that conveys this same information.

  Hint: Create a local string variable and use a for loop to concatenate "O "
  to it every iteration!
*******************************************************************************/

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

/******************************************************************************
                                  removeStones()

  This function is the "workhorse" of the program. It is called repeatedly in
  run() until there are no more stones remaining.

  It first asks the currently active player (as denoted by activePlayer) to
  enter the number of stones they would like to remove. Players should only be
  allowed to enter values 1, 2, or 3. If they enter any other value, the program
  should lightly scold them and then ask again, and continue to do so until they
  enter a valid number.

  Moreover, if players enter a valid number but there aren't that many stones
  remaining (e.g., they enter 3 but there are only 2 stones remaining), the
  program should tell them this, then ask for input again, just like above.

  When players have finally entered an acceptable number, this function
  should subtract that number from stonesRemaining, and switch activePlayer
  to the other player.
*******************************************************************************/

function removeStones() {
  var stonesToRemove = 0;
  while(!(stonesToRemove >= 1 && stonesToRemove <= 3)) {
    if(activePlayer === 0) {
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
  if(activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

/******************************************************************************
                                  processResult()

  This function is called in run() when there are no more stones remaining. It
  first prints a "Player X Wins!" message, depending on who the currently
  active player is (this was switched at the end of the last call to
  removeStones()). Note that whoever removes the last stone loses, which is
  already accounted for if you wrote removeStones() correctly!

  This function then asks players if they would like to keep playing. If players
  choose yes, nothing happens here. If players choose no, quit is set to true.
  The rest is handled in run().
*******************************************************************************/

function processResult() {
  console.log();
  if(activePlayer === 0) {
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

/******************************************************************************
                                  run()

  This is the "main" function that calls all the other functions. Here is what
  it should do, in order:

  1: Print a greeting.
  2: Initialize quit to false.
  3: As long as quit is false, continue running the following:
    A. Set up the game.
    B. As long as there are stones remaining, continue running the following:
      I. Print the stones remaining.
      II. Ask players to remove stones.
    C. There are no more stones remaining, so process results here.
  4. quit is true, so print a goodbye message here.
*******************************************************************************/

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

// Run the program!
run();
READLINE.question("Press Enter key to exit.");

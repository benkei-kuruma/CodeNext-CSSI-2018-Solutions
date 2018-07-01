// Author: FirstName lastName

/******************************************************************************
                                constant variables

  These are global variables that should stay the same throughout the run of the
  program. After being initialized, JavaScript won't let you change them ever
  again. Great for when you want to "protect" certain variables from accidental
  tampering!
*******************************************************************************/

const READLINE = require("readline-sync");

/******************************************************************************
                                global variables

board
String array. Represents the tic-tac-toe game board. A 3x3 grid. BLank squares
are represented by " - " strings.

turnsLeft
Number. The number of turns remaining. When this is 0, the game is declared a
draw. Since there are only 9 total moves players can make in one game, this
should be initialized to 9 at the start of every game.

activePlayer
Number. Represents the currently active player. Encoded as 0 for Player One and
1 for Player Two. Initialize this in setupGame() by "flipping a coin".

winner
String. Represents the current winner. By default this is "" or an empty
string. After each round of play, the game should check to see if someone has
won, in which case this variable will hold a value of "X" or "O".

quit
Boolean. Represents if the player has chosen to quit the game (true) or not
(false).
*******************************************************************************/

var board, turnsLeft, activePlayer, winner, quit;

/******************************************************************************
                                  printGreeting()

  Prints a simple greeting. Be as creative as you want here. Be sure to include
  your name as the author!
*******************************************************************************/

function printGreeting() {
  console.log();
  console.log("--------------------------------------------------------------");
  console.log("                          Tic-Tac-Toe                         ");
  console.log("--------------------------------------------------------------");
  console.log("By: FirstName LastName");
  console.log();
}

/******************************************************************************
                                  resetBoard()

  Fill the 2D board array with " - " strings (which represent empty spaces).
*******************************************************************************/

function resetBoard() {
  for(var i = 0; i < board.length; i++) {
    for(var j = 0; j < board.length; j++) {
      board[i][j] = " - ";
    }
  }
}

/******************************************************************************
                                   setupGame()

  Initialize global variables as follows:
  -initialize board as a 2D array of undefined values, with 3 rows and 3 columns.
  -call resetBoard() to fill the board with " - " (which represent empty spaces).
  -set activePlayer to either 0 or 1 ("coin flip"): Math.floor(Math.random() * 2)
  -set winner to an empty string ""
  -set quit to false
*******************************************************************************/

function setupGame() {
  board = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ];
  resetBoard();
  turnsLeft = 9;
  activePlayer = Math.floor(Math.random() * 2);
  winner = "";
  quit = false;
}

/******************************************************************************
                                   printBoard()

  Print the tic-tac-toe board to the terminal so the player can see it.
*******************************************************************************/

function printBoard() {
  console.log("  " + " 0 " + " 1 " + " 2 ");
  for(var i = 0; i < board.length; i++) {
    var currentRow = i + " ";
    for(var j = 0; j < board[i].length; j++) {
      currentRow += board[i][j];
    }
    console.log(currentRow);
  }
}

/******************************************************************************
                                   checkRows()

  Check each individual row for a win. If "X" has won, return "X". If "O" has
  won, return "O". If no one has won, return an empty string "".
*******************************************************************************/

function checkRows() {
  for(var i = 0; i < board.length; i++) {
    var xCount = 0;
    var oCount = 0;
    for(var j = 0; j < board[i].length; j++) {
      if(board[i][j] === " X ") {
        xCount++;
      } else if(board[i][j] === " O ") {
        oCount++;
      }
    }
    if(xCount === 3) {
      return "X";
    } else if(oCount === 3) {
      return "O";
    }
  }
  return "";
}

/******************************************************************************
                                   checkColumns()

  Check each individual column for a win. If "X" has won, return "X". If "O" has
  won, return "O". If no one has won, return an empty string "".
*******************************************************************************/

function checkColumns() {
  for(var i = 0; i < board.length; i++) {
    var xCount = 0;
    var oCount = 0;
    for(var j = 0; j < board[i].length; j++) {
      if(board[j][i] === " X ") {
        xCount++;
      } else if(board[j][i] === " O ") {
        oCount++;
      }
    }
    if(xCount === 3) {
      return "X";
    } else if(oCount === 3) {
      return "O";
    }
  }
  return "";
}

/******************************************************************************
                                   checkLeftDiag()

  Check from the top left square to the bottom right square for a win. If "X"
  has won, return "X". If "O" has won, return "O". If no one has won, return an
  empty string "".
*******************************************************************************/

function checkLeftDiag() {
  var xCount = 0;
  var oCount = 0;
  for(var i = 0; i < board.length; i++) {
    if(board[i][i] === " X ") {
      xCount++;
    } else if(board[i][i] === " O ") {
      oCount++;
    }
  }
  if(xCount === 3) {
    return "X";
  } else if(oCount === 3) {
    return "O";
  }
  return "";
}

/******************************************************************************
                                   checkRightDiag()

  Check from the top right square to the bottom left square for a win. If "X"
  has won, return "X". If "O" has won, return "O". If no one has won, return an
  empty string "".
*******************************************************************************/

function checkRightDiag() {
  var xCount = 0;
  var oCount = 0;
  for(var i = board.length - 1; i >= 0; i--) {
    if(board[i][2 - i] === " X ") {
      xCount++;
    } else if(board[i][2 - i] === " O ") {
      oCount++;
    }
  }
  if(xCount === 3) {
    return "X";
  } else if(oCount === 3) {
    return "O";
  }
  return "";
}

/******************************************************************************
                                   checkWon()

  Call all four "check" functions to determine if a player has won or if the
  game should keep going. If "X" has won, return "X". If "O" has won, return
  "O". If no one has won, return an empty string "".
*******************************************************************************/

function checkWon() {
  var rowWon = checkRows(board);
  var colWon = checkColumns(board);
  var leftDiagWon = checkLeftDiag(board);
  var rightDiagWon = checkRightDiag(board);
  if(rowWon != "") {
      return rowWon;
  } else if(colWon != "") {
      return colWon;
  } else if(leftDiagWon != "") {
      return leftDiagWon;
  } else if(rightDiagWon != "") {
      return rightDiagWon;
  } else {
      return "";
  }
}

/******************************************************************************
                                 chooseRowColumn()

  Ask the currently active player to choose a row and then a column. Validate
  their input to make sure they aren't entering bad inputs (only 0, 1, or 2
  should be accepted). If a player chooses a square that is not blank (" - "),
  they should be made to choose again, until they choose a blank square.

  After the player chooses a valid square, set it to " X " or " O " accordingly
  (mind the spaces!). Then switch the active player to the other player.
*******************************************************************************/

function chooseRowColumn() {
  var playerName = "X";
  if(activePlayer === 1) {
    playerName = "O";
  }
  var validSelection = false;
  while(!validSelection) {
    var row = READLINE.question(playerName + ", choose a row: ");
    while(!(row >= 0 && row <= 2)) {
      console.log("Please enter 0, 1, or 2.");
      row = READLINE.question(playerName + ", choose a row: ");
    }
    var column = READLINE.question(playerName + ", choose a column: ");
    while(!(column >= 0 && column <= 2)) {
      console.log("Please enter 0, 1, or 2.");
      column = READLINE.question(playerName + ", choose a column: ");
    }
    if(board[row][column] !== " - ") {
      console.log("That square is already taken! Try again!");
    } else {
      board[row][column] = " " + playerName + " ";
      validSelection = true;
    }
  }
  if(activePlayer === 1) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }
}

/******************************************************************************
                                   playGame()

  While turnsleft is greater than 0 and the winner variable is set to an
  empty string, do the following in an endless loop:
    1) Print the board.
    2) If the winner is "X", print "X wins!"
    3) Otherwise, if the winner is "O", print "O wins!".
    4) Otherwise, no one has won, so call chooseRowColumn() and decrement
       turnsLeft.

  Outside of the loop, check if turnsLeft is 0. If so, print the board, then
  print "DRAW!".

  Finally, the game is over at this point. So ask players if they would like to
  play again (just as you did in Nim). If they answer anything other than "yes"
  or "y" (or whatever else you want), set quit to true.
*******************************************************************************/

function playGame() {
  while(turnsLeft > 0 && winner === "") {
    printBoard();
    console.log();
    winner = checkWon();
    if(winner === "X") {
      console.log("X wins!");
    } else if(winner === "O"){
      console.log("O wins!");
    } else {
      chooseRowColumn();
      turnsLeft--;
      console.log();
    }
  }
  if(turnsLeft === 0){
    printBoard();
    console.log();
    console.log("DRAW!");
  }
  var keepPlaying = READLINE.question("Play again? (yes or no): ");
  if(keepPlaying != "yes" && keepPlaying != "y") {
    quit = true;
  }
  console.log();
}

/******************************************************************************
                                   run()

  The "mother function" of the program. Runs the game by doing the following:
  1) Print a greeting.
  2) While quit is set to false, do the the following:
     A) Setup the game.
     B) Play the game.
  3) Outside the loop above, print a "Goodbye" message.
*******************************************************************************/

function run() {
  printGreeting();
  while(!quit) {
    setupGame();
    playGame();
  }
  console.log("Goodbye!");
}

// Run the program!
run();
READLINE.question("Press Enter key to exit.");

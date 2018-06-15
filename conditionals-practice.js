var readline = require("readline-sync");
var ourNum = 5;
var userNum = readline.question("Please guess a number from 1 to 10: ");
if(userNum == ourNum) {
  console.log("You guessed it! Lucky!");
} else if(userNum < ourNum){
  console.log("Sorry, your guess is too low!");
} else {
  console.log("Sorry, your guess is too high!");
}

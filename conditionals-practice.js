var readline = require("readline-sync");
var ourNum = 5;
var userNum = readline.question("Please guess a number from 1 to 10: ");
if(userNum == ourNum) {
  console.log("You guessed it! Lucky!");
} else if(userNum < ourNum){
  console.log("Sorry, your guess is too low!");
  if(userNum - ourNum >= -3 && userNum - ourNum <= 3) {
    console.log("You're warm! Try again!");
  } else {
    console.log("You're cold! Try again!");
  }
} else {
  console.log("Sorry, your guess is too high!");
  if(userNum - ourNum >= -3 && userNum - ourNum <= 3) {
    console.log("You're warm! Try again!");
  } else {
    console.log("You're cold! Try again!");
  }
}

/*
var readline = require("readline-sync");
console.log("Welcome to our phone store!");
var pricePoint = readline.question("Please enter your price point: ");
if(pricePoint >= 30) {
  console.log("You can buy a prepaid phone.");
  if(pricePoint >= 100) {
    console.log("You can buy a bottom-tier phone.");
    if(pricePoint >= 300) {
      console.log("You can buy a middle-tier phone.");
      if(pricePoint >= 600) {
        console.log("You can buy a top-tier phone.");
      }
    }
  }
}
else {
  console.log("Looks like you can't afford any of our phones. Sorry!");
}
*/

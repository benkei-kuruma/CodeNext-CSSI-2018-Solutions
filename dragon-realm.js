// Author: FirstName LastName
var readline = require("readline-sync");
var sleep = require("system-sleep/module");

function getRandomNumber(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

// Display intro
console.log();
console.log("*****************************************************************");
console.log("                          DRAGON REALM");
console.log("                 A game by FirstName LastName");
console.log("*****************************************************************");
console.log("You are in a land full of dragons. In front of you, you see");
console.log("two caves. In one cave, the dragon is friendly and will share");
console.log("his treasure with you. The other dragon is greedy and hungry");
console.log("and will eat you on sight.");
var chosenCave = readline.question("Which cave will you go into? (1 or 2): ");
if(chosenCave != 1 && chosenCave != 2) {
  console.log("You chose to go home instead!");
}
else {
  var friendlyCave = getRandomNumber(1, 3);
  console.log("You approach the cave...");
  sleep(2000);
  console.log("It is dark and spooky...");
  sleep(2000);
  console.log("A large dragon jumps out in front of you! He opens his jaws and...");
  console.log();
  sleep(2000);
  if(chosenCave == friendlyCave) {
    console.log("...gives you his treasure!");
  }
  else {
    console.log("...gobbles you down in one bite!");
  }
}
console.log("Thanks for playing! Goodbye!");

/*********************************************
Attribution: This is script was adapted from the original Python version
by Al Sweigart in his free online textbook "Invent Your Own Computer Games With Python"
Source: http://inventwithpython.com/invent4thed/chapter5.html
*********************************************/

// Author: FirstName LastName
var readline = require("readline-sync");
var sleep = require("system-sleep/module");

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function displayIntro() {
  console.log(
    "You are in a land full of dragons. In front of you, you see\n" +
    "two caves. In one cave, the dragon is friendly and will share\n" +
    "his treasure with you. The other dragon is greedy and hungry, and\n" +
    "will eat you on sight."
  );
  console.log();
}

function chooseCave() {
  var cave = 0;
  while(cave != 1 && cave != 2) {
    cave = readline.question("Which cave will you go into? (1 or 2): ");
  }
  return cave;
}

function checkCave(chosenCave) {
  console.log("You approach the cave...");
  sleep(2000);
  console.log("It is dark and spooky...");
  sleep(2000);
  console.log("A large dragon jumps out in front of you! He opens his jaws and...");
  console.log();
  sleep(2000);
  var friendlyCave = parseInt(getRandomNumber(1, 3));
  console.log(friendlyCave);
  if(chosenCave == friendlyCave) {
    console.log("...gives you his treasure!");
  }
  else {
    console.log("...gobbles you down in one bite!");
  }
}

function play() {
  var playAgain = "yes";
  while(playAgain == "yes" || playAgain == "y") {
    displayIntro();
    var caveNumber = chooseCave();
    checkCave(caveNumber);
    playAgain = readline.question("Do you want to play again? (yes or no): ");
  }
}

play();

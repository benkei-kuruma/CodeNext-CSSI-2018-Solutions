// Author: FirstName LastName
var readline = require("readline-sync");
var sleep = require("system-sleep");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by FirstName LastName");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
//sleep(2000);
console.log("You hear what sounds like screaming coming from inside the house.");
//sleep(2000);
var enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  console.log("You nervously and very slowly approach the door...");
  //sleep(2000);
  console.log("You open the door and immediately see a ghost!");
  //sleep(2000);
  var punchGhost = readline.question("Will you punch the ghost? (yes or no)");
  if(punchGhost == "y" || punchGhost == "yes") {
    // your code here
  } else {
    // your code here
  }
} else {
  console.log("You decide you'd rather go home. The house is too spooky.");
  //sleep(2000);
  console.log("However, as you turn to leave...");
  //sleep(2000);
  console.log("...you hear the door swing open behind you!");
  //sleep(2000);
  var run = readline.question("Will you run away? (yes or no)");
  if(run == "y" || run == "yes") {
    // your code here
  }
}
console.log("Thank you for playing!");
readline.question("Press Enter key to exit.");

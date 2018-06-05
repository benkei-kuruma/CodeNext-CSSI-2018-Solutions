var readline = require("readline-sync");

function changeMachine() {
  var cents = parseInt(readline.question("Please enter cents as an integer >= 0: "));
  console.log(cents + " cents:");
  var quarters = parseInt(cents / 25);
  cents -= quarters * 25;
  var dimes = parseInt(cents / 10);
  cents -= dimes * 10;
  var nickels = parseInt(cents / 5);
  cents -= nickels * 5;
  console.log(quarters + " quarters");
  console.log(dimes + " dimes");
  console.log(nickels + " nickels");
  console.lg(cents + " pennies");
}

changeMachine();

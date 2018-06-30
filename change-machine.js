// Author: FirstName LastName
var readline = require("readline-sync");
console.log("*****************************************************************");
console.log("bLeep blOop! i'm a CHanGE macHINe!");
var cents = parseInt(readline.question("Please enter cents as a positive integer: "));
console.log(cents + " cents makes:");
var quarters = parseInt(cents / 25);
cents = cents - quarters * 25;
var dimes = parseInt(cents / 10);
cents = cents - dimes * 10;
var nickels = parseInt(cents / 5);
cents = cents - nickels * 5;
console.log(quarters + " quarters");
console.log(dimes + " dimes");
console.log(nickels + " nickels");
console.log(cents + " pennies");
console.log("BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!");
console.log("*****************************************************************");
readline.question("Press Enter key to exit.");

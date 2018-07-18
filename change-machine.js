// Author: FirstName LastName
let readline = require("readline-sync");
console.log("*****************************************************************");
console.log("bLeep blOop! i'm a CHanGE macHINe!");
let cents = parseInt(readline.question("Please enter cents as a positive integer: "));
console.log(cents + " cents makes:");
let quarters = parseInt(cents / 25);
cents = cents - quarters * 25;
let dimes = parseInt(cents / 10);
cents = cents - dimes * 10;
let nickels = parseInt(cents / 5);
cents = cents - nickels * 5;
console.log(quarters + " quarters");
console.log(dimes + " dimes");
console.log(nickels + " nickels");
console.log(cents + " pennies");
console.log("BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!");
console.log("*****************************************************************");
readline.question("Press Enter key to exit.");

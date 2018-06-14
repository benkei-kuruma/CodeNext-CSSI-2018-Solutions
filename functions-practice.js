var readline = require("readline-sync");

function doTheThing() {
  var theThing = readline.question("What do you want me to do?: ");
  console.log("Okay, I'm " + theThing + "ing!");
  console.log("I love " + theThing + "ing all day, everyday!");
  console.log("Functions make " + theThing + "ing easy!");
}

//doTheThing();
//doTheThing();
//doTheThing();
//doTheThing();

var doTheOtherThing = function() {
  console.log("I'm doing the other thing!");
}

//doTheOtherThing();

function addTwoNums(num1, num2) {
  //console.log(num1 + num2);
  return num1 + num2;
}

var first = addTwoNums(3, 4);
var second = addTwoNums(1, 1);
var third = addTwoNums(6, 8);
//console.log(first);
//console.log(second);
//console.log(third);
//console.log(addTwoNums(50, 50));
var zero = addTwoNums(50, 50) - 100;
//console.log(zero);
var eight = addTwoNums(addTwoNums(2, 2), addTwoNums(2, 2));
//console.log(eight);

function makeItStop() {
  console.log("This will run.");
  return;
  console.log("This won't run.");
}

makeItStop();

function nothing() {
  //return;
}

console.log(nothing());

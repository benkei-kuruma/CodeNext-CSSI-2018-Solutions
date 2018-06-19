var readline = require("readline-sync");

function doTheThing() {
  var theThing = readline.question("What do you want me to do?: ");
  if(theThing == "eat") {
    console.log("Computers can't eat!");
  } else if(theThing == "subtract"){
    var num1 = readline.question("Enter first number: ");
    var num2 = readline.question("Enter second number: ");
    var result = absoluteDifference(num1, num2);
    console.log("Absolute Difference: " + result);
  } else {
    console.log("I'm sorry, I don't understand you!");
  }
}

function absoluteDifference(num1 = 0, num2 = 0) {
  if(num1 > num2) {
    return num1 - num2;
  }
  return num2 - num1;
}

doTheThing();

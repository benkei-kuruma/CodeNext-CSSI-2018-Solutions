for(var i = 0; i < 5; i++) {
  var starString = "";
  for(var j = 0; j < 9; j++) {
    if(j <= Math.floor(9 / 2) + i && j >= Math.floor(9 / 2) - i) {
      starString += "*";
    } else {
      starString += " "
    }
  }
  console.log(starString);
}

/*
while(true) {
  var x = 0
  var weirdString = ""
  while(x < 50) {
    if(Math.floor(Math.random() * 2) === 0) {
      weirdString += " ";
    } else {
      weirdString +=  Math.floor(Math.random() * 2);
    }
    x++;
  }
  console.log(weirdString);
}
*/

var dialpad = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["*", "0", "#"]
];
console.log(dialpad[0][2]);
console.log(dialpad[1][0]);
console.log(dialpad[2][2]);

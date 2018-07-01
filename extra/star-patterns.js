/*
for(var i = 3; i >= 0; i--) {
  var starString = "";
  for(var j = 0; j <= i; j++) {
    starString += "*";
  }
  console.log(starString);
}
*/

while(true) {
  var x = 0
  var weirdString = ""
  while(x < 50) {
    weirdString += Math.floor(Math.random() * 2);
    x++;
  }
  console.log(weirdString);
}

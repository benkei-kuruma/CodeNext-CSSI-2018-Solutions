function run() {
  var limit = 100;
  console.log("*************************************");
  for(var i = 1; i <= limit; i++) {
    var printString = i + ": ";
    if(isPrime(i)) {
      printString += "prime, ";
    }
    else {
      printString += "composite, ";
    }
    if(isTriangular(i)) {
      printString += "triangular, ";
    }
    else  {
      printString += "not triangular, ";
    }
    if(isSquare(i)) {
      printString += "square, ";
    }
    else  {
      printString += "not square, ";
    }
    if(isPrimeOblong(i)) {
      printString += "prime oblong";
    }
    else  {
      printString += "not prime oblong";
    }
    console.log(printString);
  }
}

function isPrime(num) {
  if(num === 1) {
    return false;
  }
  for(var i = 2; i <= num / 2; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

function isTriangular(num) {
  var triangularNumber = 1;
  var addValue = 2;
  while(num >= triangularNumber) {
    if(num === triangularNumber) {
      return true;
    }
    else {
      triangularNumber += addValue;
      addValue++;
    }
  }
  return false;
}

function isSquare(num) {
  var sum = 1;
  var add = 3;
  while(num >= sum) {
    if(num === sum) {
      return true;
    }
    else {
      sum += add;
      add += 2;
    }
  }
  return false;
}

function getDivisors(num) {
  var divisors = [];
  var denom = 2;
  while(denom <= num / 2) {
    if(num % denom === 0) {
      if(divisors.indexOf(denom) === -1) {
        divisors.push(denom);
      }
      if(divisors.indexOf(num / denom) === -1) {
        divisors.push(num / denom);
      }
    }
    denom++;
  }
  return divisors;
}

function isPrimeOblong(num) {
  if(isPrime(num)) {
    return false;
  }
  var divisors = getDivisors(num);
  if(divisors.length === 2) {
    if(isPrime(divisors[0]) && isPrime(divisors[1])) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

run();

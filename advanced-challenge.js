//Author: FirstName LastName

/******************************************************************************
                                   canBalance()

Instructions:
Given a non-empty array, return true if there is a place to split the array so
that the sum of the numbers on one side is equal to the sum of the numbers on
the other side.

Examples:
canBalance([1, 1, 1, 2, 1]) → true
canBalance([2, 1, 1, 2, 1]) → false
canBalance([10, 10]) → true
*******************************************************************************/

function canBalance(nums){
  var leftSum = 0;
  for(var i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    var rightSum = 0;
    for(var j = i + 1; j < nums.length; j++) {
      rightSum += nums[j];
    }
    if(leftSum === rightSum) {
      return true;
    }
  }
  return false;
}

// Test this function.
testCanBalance();

/******************************************************************************
                                    maxSpan()

Instructions:
Consider the leftmost and righmost appearances of some value in an array. We'll
say that the "span" is the number of elements between the two inclusive. A
single value has a span of 1. Returns the largest span found in the given array.

Examples:
maxSpan([1, 2, 1, 1, 3]) → 4
maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6
*******************************************************************************/

function maxSpan(nums) {
  var max = 0;
  for(var i = 0; i < nums.length; i++) {
    var span = 1;
    for(var j = i; j < nums.length; j++) {
      if(nums[i] === nums[j] && span > max) {
        max = span;
      }
      span++;
    }
  }
  return max;
}

// Test this function.
testMaxSpan();

/******************************************************************************
                                   linearIn()

Instructions:
Given two arrays of numbers sorted in increasing order, outer and inner, return
true if all of the numbers in inner appear in outer. The best solution makes
only a single "linear" pass of both arrays, taking advantage of the fact that
both arrays are already in sorted order.

Examples:
linearIn([1, 2, 4, 6], [2, 4]) → true
linearIn([1, 2, 4, 6], [2, 3, 4]) → false
linearIn([1, 2, 4, 4, 6], [2, 4]) → true
*******************************************************************************/

function linearIn(outer, inner){
  if(inner.length === 0) {
    return true;
  }
  var outerID = 0;
  var innerID = 0;
  while(outerID < outer.length) {
    if(outer[outerID] === inner[innerID]) {
      innerID++;
      if(innerID === inner.length) {
        return true;
      }
    }
    outerID++;
  }
  return false;
}

// Test this function.
testLinearIn();

/******************************************************************************
                                   fix45()

Instructions:
Return an array that contains exactly the same numbers as the given array, but
rearranged so that every 4 is immediately followed by a 5. Do not move the 4's,
but every other number may move. The array contains the same number of 4's and
5's, and every 4 has a number after it that is not a 4. 5's may appear anywhere
in the original array.

Examples:
fix45([5, 4, 9, 4, 9, 5]) → [9, 4, 5, 4, 5, 9]
fix45([1, 4, 1, 5]) → [1, 4, 5, 1]
fix45([1, 4, 1, 5, 5, 4, 1]) → [1, 4, 5, 1, 1, 4, 5]
*******************************************************************************/

function fix45(nums){
  var fix = nums.slice();
  for(var i = fix.length - 1; i >= 0; i--) {
    if(fix[i] === 4 && fix[i + 1] !== 5) {
      var foundFive = false;
      for(var j = i - 1; j >= 0 && !foundFive; j--) {
        if(fix[j] === 5) {
          var five = fix[j];
          fix[j] = fix[i + 1];
          fix[i + 1] = five;
          foundFive = true;
        }
      }
    } else if(fix[i] === 5 && fix[i - 1] !== 4) {
      var foundFour = false;
      for(var j = i - 1; j >= 0 && !foundFour; j--) {
        if(fix[j] === 4 && fix[j + 1] !== 5) {
          var five = fix[i];
          fix[i] = fix[j + 1];
          fix[j + 1] = five;
          foundFour = true;
        }
      }
    }
  }
  return fix;
}

// Test this function.
testFix45();

/******************************************************************************
                                   squareUp()

Instructions:
Given n>=0, return an array length n*n with the following pattern, shown here
for n=3 : {0, 0, 1, 0, 2, 1, 3, 2, 1} (spaces added to show the 3 groups).

Examples

squareUp(3) → [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) → [0, 1, 2, 1]
squareUp(4) → [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
*******************************************************************************/

function squareUp(n){
  var mod = n + 1;
  var current = 1;
  var retVal = [];
  for(var i = n * n - 1; i >= 0; i--) {
    if(current <= mod) {
      retVal.unshift(current % mod);
    } else {
      retVal.unshift(0);
    }
    current++;
    if(current > n) {
      current = 1;
      mod--;
    }
  }
  return retVal;
}

// Test this function.
testSquareUp();

/****************************************************************************
                                    Tests
*****************************************************************************/
function testCanBalance() {
  console.log();
  console.log("canBalance([1, 1, 1, 2, 1]) → true " + canBalance([1, 1, 1, 2, 1]));
  console.log("canBalance([2, 1, 1, 2, 1]) → false " + canBalance([2, 1, 1, 2, 1]));
  console.log("canBalance([10, 10]) → true " + canBalance([10, 10]));
  console.log("canBalance([10, 0, 1, -1, 10]) → true " + canBalance([10, 0, 1, -1, 10]));
  console.log("canBalance([1, 1, 1, 1, 4]) → true " + canBalance([1, 1, 1, 1, 4]));
  console.log("canBalance([2, 1, 1, 1, 4]) → false " + canBalance([2, 1, 1, 1, 4]));
  console.log("canBalance([2, 3, 4, 1, 2]) → false " + canBalance([2, 3, 4, 1, 2]));
  console.log("canBalance([1, 2, 3, 1, 0, 2, 3]) → true " + canBalance([1, 2, 3, 1, 0, 2, 3]));
  console.log("canBalance([1, 2, 3, 1, 0, 1, 3]) → false " + canBalance([1, 2, 3, 1, 0, 1, 3]));
  console.log("canBalance([1]) → false " + canBalance([1]));
  console.log("canBalance([1, 1, 1, 2, 1]) → true " + canBalance([1, 1, 1, 2, 1]));
}

function testMaxSpan() {
  console.log();
  console.log("maxSpan([1, 2, 1, 1, 3]) → 4 " + maxSpan([1, 2, 1, 1, 3]));
  console.log("maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6 " + maxSpan([1, 4, 2, 1, 4, 1, 4]));
  console.log("maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6 " + maxSpan([1, 4, 2, 1, 4, 4, 4]));
  console.log("maxSpan([3, 3, 3]) → 3 " + maxSpan([3, 3, 3]));
  console.log("maxSpan([3, 9, 3]) → 3 " + maxSpan([3, 9, 3]));
  console.log("maxSpan([3, 9, 9]) → 2 " + maxSpan([3, 9, 9]));
  console.log("maxSpan([3, 9]) → 1 " + maxSpan([3, 9]));
  console.log("maxSpan([3, 3]) → 2 " + maxSpan([3, 3]));
  console.log("maxSpan([]) → 0 " + maxSpan([]));
  console.log("maxSpan([1]) → 1 " + maxSpan([1]));
}

function testLinearIn() {
  console.log();
  console.log("linearIn([1, 2, 4, 6], [2, 4]) → true " + linearIn([1, 2, 4, 6], [2, 4]));
  console.log("linearIn([1, 2, 4, 6], [2, 3, 4]) → false " + linearIn([1, 2, 4, 6], [2, 3, 4]));
  console.log("linearIn([1, 2, 4, 4, 6], [2, 4]) → true " + linearIn([1, 2, 4, 4, 6], [2, 4]));
  console.log("linearIn([2, 2, 4, 4, 6, 6], [2, 4]) → true " + linearIn([2, 2, 4, 4, 6, 6], [2, 4]));
  console.log("linearIn([2, 2, 2, 2, 2], [2, 2]) → true " + linearIn([2, 2, 2, 2, 2], [2, 2]));
  console.log("linearIn([2, 2, 2, 2, 2], [2, 4]) → false " + linearIn([2, 2, 2, 2, 2], [2, 4]));
  console.log("linearIn([2, 2, 2, 2, 4], [2, 4]) → true " + linearIn([2, 2, 2, 2, 4], [2, 4]));
  console.log("linearIn([1, 2, 3], [2]) → true " + linearIn([1, 2, 3], [2]));
  console.log("linearIn([1, 2, 3], [-1]) → false " + linearIn([1, 2, 3], [-1]));
  console.log("linearIn([1, 2, 3], []) → true " + linearIn([1, 2, 3], []));
  console.log("linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 0, 3, 12]) → true " + linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 0, 3, 12]));
  console.log("linearIn([-1, 0, 3, 3, 3, 10, 12], [0, 3, 12, 14]) → false " + linearIn([-1, 0, 3, 3, 3, 10, 12], [0, 3, 12, 14]));
  console.log("linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 10, 11]) → false " + linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 10, 11]));
}

function testFix45() {
  console.log();
  console.log("fix45([5, 4, 9, 4, 9, 5]) → [9,4,5,4,5,9] " + "[" + fix45([5, 4, 9, 4, 9, 5]) + "]");
  console.log("fix45([1, 4, 1, 5]) → [1,4,5,1] " + "[" + fix45([1, 4, 1, 5]) + "]");
  console.log("fix45([1, 4, 1, 5, 5, 4, 1]) → [1,4,5,1,1,4,5] " + "[" + fix45([1, 4, 1, 5, 5, 4, 1]) + "]");
  console.log("fix45([4, 9, 4, 9, 5, 5, 4, 9, 5]) → [4,5,4,5,9,9,4,5,9] " + "[" + fix45([4, 9, 4, 9, 5, 5, 4, 9, 5]) + "]");
  console.log("fix45([5, 5, 4, 1, 4, 1]) → [1,1,4,5,4,5] " + "[" + fix45([5, 5, 4, 1, 4, 1]) + "]");
  console.log("fix45([4, 2, 2, 5]) → [4,5,2,2] " + "[" + fix45([4, 2, 2, 5]) + "]");
  console.log("fix45([4, 2, 4, 2, 5, 5]) → [4,5,4,5,2,2] " + "[" + fix45([4, 2, 4, 2, 5, 5]) + "]");
  console.log("fix45([4, 2, 4, 5, 5]) → [4,5,4,5,2] " + "[" + fix45([4, 2, 4, 5, 5]) + "]");
  console.log("fix45([1, 1, 1]) → [1,1,1] " + "[" + fix45([1, 1, 1]) + "]");
  console.log("fix45([4, 5]) → [4,5] " + "[" + fix45([4, 5]) + "]");
  console.log("fix45([5, 4, 1]) → [1,4,5] " + "[" + fix45([5, 4, 1]) + "]");
  console.log("fix45([]) → [] " + "[" + fix45([]) + "]");
  console.log("fix45([5, 4, 5, 4, 1]) → [1,4,5,4,5] " + "[" + fix45([5, 4, 5, 4, 1]) + "]");
  console.log("fix45([4, 5, 4, 1, 5]) → [4,5,4,5,1] " + "[" + fix45([4, 5, 4, 1, 5]) + "]");
  console.log("fix45([3, 4, 5]) → [3,4,5] " + "[" + fix45([3, 4, 5]) + "]");
  console.log("fix45([4, 1, 5]) → [4,5,1] " + "[" + fix45([4, 1, 5]) + "]");
  console.log("fix45([5, 4, 1]) → [1,4,5] " + "[" + fix45([5, 4, 1]) + "]");
  console.log("fix45([2, 4, 2, 5]) → [2,4,5,2] " + "[" + fix45([2, 4, 2, 5]) + "]");
}

function testSquareUp() {
  console.log();
  console.log("squareUp(3) → [0,0,1,0,2,1,3,2,1] " + "[" + squareUp(3) + "]");
  console.log("squareUp(2) → [0,1,2,1] " + "[" + squareUp(2) + "]");
  console.log("squareUp(4) → [0,0,0,1,0,0,2,1,0,3,2,1,4,3,2,1] " + "[" + squareUp(4) + "]");
  console.log("squareUp(1) → [1] " + "[" + squareUp(1) + "]");
  console.log("squareUp(0) → [] " + "[" + squareUp(0) + "]");
}

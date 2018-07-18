//Author: FirstName LastName

/******************************************************************************
                                   firstLast6()

Instructions:
Given an array of numbers, return true if 6 appears as either the first or last
element in the array. The array will be length 1 or more.

Examples:
firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false
*******************************************************************************/

function firstLast6(nums) {
  return nums[0] === 6 || nums[nums.length - 1] === 6;
}

// Test this function.
testFirstLast6();

/******************************************************************************
                                   midThree()

Instructions:
Given an array of numbers of odd length, return a new array length 3 containing
the elements from the middle of the array. The array length will be at least 3.

Examples:
midThree([1, 2, 3, 4, 5]) → [2, 3, 4]
midThree([8, 6, 7, 5, 3, 0, 9]) → [7, 5, 3]
midThree([1, 2, 3]) → [1, 2, 3]
*******************************************************************************/

function midThree(nums) {
  let middleIndex = Math.floor(nums.length / 2);
  return [nums[middleIndex - 1], nums[middleIndex], nums[middleIndex + 1]];
}

// Test this function.
testMidThree();

/******************************************************************************
                                   fizzBuzz()

Instructions:
This is slightly more difficult version of the famous FizzBuzz problem which is
sometimes given as a first problem for job interviews. Consider the series of
numbers beginning at start and running up to but not including end, so for
example start=1 and end=5 gives the series 1, 2, 3, 4. Return a new string
array containing the string form of these numbers, except for multiples of 3,
use "Fizz" instead of the number, for multiples of 5 use "Buzz", and for
multiples of both 3 and 5 use "FizzBuzz".

Note:
Some of the test outputs for this function are very long. You might need
to resize your terminal window to see them properly. Otherwise you can copy
and paste the output into a document and test your work there.

Examples:
fizzBuzz(1, 6) → ["1", "2", "Fizz", "4", "Buzz"]
fizzBuzz(1, 8) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]
fizzBuzz(1, 11) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]
*******************************************************************************/

function fizzBuzz(start, end) {
  let retVal = [];
  while(start < end) {
    if(start % 3 === 0 && start % 5 === 0) {
      retVal.push("FizzBuzz");
    } else if(start % 3 === 0) {
      retVal.push("Fizz");
    } else if(start % 5 === 0) {
      retVal.push("Buzz");
    } else {
      retVal.push("" + start);
    }
    start++;
  }
  return retVal;
}

// Test this function.
testFizzBuzz();

/******************************************************************************
                                   copyEvens()

Instructions:
Given an array of positive numbers, return a new array of length "count"
containing the first even numbers from the original array. The original array
will contain at least "count" even numbers.

Examples:
copyEvens([3, 2, 4, 5, 8], 2) → [2, 4]
copyEvens([3, 2, 4, 5, 8], 3) → [2, 4, 8]
copyEvens([6, 1, 2, 4, 5, 8], 3) → [6, 2, 4]
*******************************************************************************/

function copyEvens(nums, count) {
  let retVal = [];
  let i = 0;
  while(count > 0) {
    if(nums[i] % 2 == 0) {
      retVal.push(nums[i]);
      count--;
    }
    i++;
  }
  return retVal;
}

// Test this function.
testCopyEvens();

/******************************************************************************
                                   zeroMax()

Instructions:
Return a new version of the given array (i.e., don't modify the original) where
each zero value in the array is replaced by the largest odd value to the right
of the zero in the array. If there is no odd value to the right of the zero,
leave the zero as a zero.

Examples:
zeroMax([0, 5, 0, 3]) → [5, 5, 3, 3]
zeroMax([0, 4, 0, 3]) → [3, 4, 3, 3]
zeroMax([0, 1, 0]) → [1, 1, 0]
*******************************************************************************/

function zeroMax(nums) {
  let largest = 0;
  let retVal = [];
  for(let i = nums.length - 1; i >= 0; i--) {
    if(nums[i] > largest && nums[i] % 2 === 1) {
      largest = nums[i];
    }
    if(nums[i] === 0) {
      retVal.splice(0, 0, largest);
    } else {
      retVal.splice(0, 0, nums[i]);
    }
  }
  return retVal;
}

// Test this function.
testZeroMax();

/****************************************************************************
                                    Tests
*****************************************************************************/
function testFirstLast6() {
  console.log();
  console.log("firstLast6([1, 2, 6]) → true " + firstLast6([1, 2, 6]));
  console.log("firstLast6([6, 1, 2, 3]) → true " + firstLast6([6, 1, 2, 3]));
  console.log("firstLast6([13, 6, 1, 2, 3]) → false " + firstLast6([13, 6, 1, 2, 3]));
  console.log("firstLast6([13, 6, 1, 2, 6]) → true " + firstLast6([13, 6, 1, 2, 6]));
  console.log("firstLast6([3, 2, 1]) → false " + firstLast6([3, 2, 1]));
  console.log("firstLast6([3, 6, 1]) → false " + firstLast6([3, 6, 1]));
  console.log("firstLast6([3, 6]) → true " + firstLast6([3, 6]));
  console.log("firstLast6([6]) → true " + firstLast6([6]));
  console.log("firstLast6([3]) → false " + firstLast6([3]));
  console.log("firstLast6([5, 6]) → true " + firstLast6([5, 6]));
  console.log("firstLast6([5, 5]) → false " + firstLast6([5, 5]));
  console.log("firstLast6([1, 2, 3, 4, 6]) → true " + firstLast6([1, 2, 3, 4, 6]));
  console.log("firstLast6([1, 2, 3, 4]) → false " + firstLast6([1, 2, 3, 4]));
}

function testMidThree() {
  console.log();
  console.log("midThree([1, 2, 3, 4, 5]) → [2, 3, 4] " + "[" + midThree([1, 2, 3, 4, 5]) + "]");
  console.log("midThree([8, 6, 7, 5, 3, 0, 9]) → [7, 5, 3] " + "[" + midThree([8, 6, 7, 5, 3, 0, 9]) + "]");
  console.log("midThree([1, 2, 3]) → [1, 2, 3] " + "[" + midThree([1, 2, 3]) + "]");
}

function testFizzBuzz() {
  console.log();
  console.log("fizzBuzz(1, 6) → [\"1\", \"2\", \"Fizz\", \"4\", \"Buzz\"] " + "[" + fizzBuzz(1, 6).map(x => "\"" + x + "\"") + "]");
  console.log("fizzBuzz(1, 8) → [\"1\", \"2\", \"Fizz\", \"4\", \"Buzz\", \"Fizz\", \"7\"] " + "[" + fizzBuzz(1, 8).map(x => "\"" + x + "\"") + "]");
  console.log("fizzBuzz(1, 11) → [\"1\", \"2\", \"Fizz\", \"4\", \"Buzz\", \"Fizz\", \"7\", \"8\", \"Fizz\", \"Buzz\"] " + "[" + fizzBuzz(1, 11).map(x => "\"" + x + "\"") + "]");
  console.log("fizzBuzz(1, 16) → [\"1\", \"2\", \"Fizz\", \"4\", \"Buzz\", \"Fizz\", \"7\", \"8\", \"Fizz\", \"Buzz\", \"11\", \"Fizz\", \"13\", \"14\", \"FizzBuzz\"] " + "[" + fizzBuzz(1, 16).map(x => "\"" + x + "\"") + "]");
  console.log("fizzBuzz(1, 4) → [\"1\", \"2\", \"Fizz\"] " + "[" + fizzBuzz(1, 4).map(x => "\"" + x + "\"") + "]");
  console.log("fizzBuzz(1, 2) → [\"1\"] " + "[" + fizzBuzz(1, 2).map(x => "\"" + x + "\"") + "]");
  console.log("fizzBuzz(50, 56) → [\"Buzz\", \"Fizz\", \"52\", \"53\", \"Fizz\", \"Buzz\"] " + "[" + fizzBuzz(50, 56).map(x => "\"" + x + "\"") + "]");
  console.log("fizzBuzz(15, 17) → [\"FizzBuzz\", \"16\"] " + "[" + fizzBuzz(15, 17).map(x => "\"" + x + "\"") + "]");
  console.log("fizzBuzz(30, 36) → [\"FizzBuzz\", \"31\", \"32\", \"Fizz\", \"34\", \"Buzz\"] " + "[" + fizzBuzz(30, 36).map(x => "\"" + x + "\"") + "]");
  console.log("fizzBuzz(1000, 1006) → [\"Buzz\", \"1001\", \"Fizz\", \"1003\", \"1004\", \"FizzBuzz\"] " + "[" + fizzBuzz(1000, 1006).map(x => "\"" + x + "\"") + "]");
  console.log("fizzBuzz(99, 102) → [\"Fizz\", \"Buzz\", \"101\"] " + "[" + fizzBuzz(99, 102).map(x => "\"" + x + "\"") + "]");
  console.log("fizzBuzz(14, 20) → [\"14\", \"FizzBuzz\", \"16\", \"17\", \"Fizz\", \"19\"] " + "[" + fizzBuzz(14, 20).map(x => "\"" + x + "\"") + "]");
}

function testCopyEvens() {
  console.log();
  console.log("copyEvens([3, 2, 4, 5, 8], 2) → [2, 4] " + "[" + copyEvens([3, 2, 4, 5, 8], 2) + "]");
  console.log("copyEvens([3, 2, 4, 5, 8], 3) → [2, 4, 8] " + "[" + copyEvens([3, 2, 4, 5, 8], 3) + "]");
  console.log("copyEvens([6, 1, 2, 4, 5, 8], 3) → [6, 2, 4] " + "[" + copyEvens([6, 1, 2, 4, 5, 8], 3) + "]");
  console.log("copyEvens([6, 1, 2, 4, 5, 8], 4) → [6, 2, 4, 8] " + "[" + copyEvens([6, 1, 2, 4, 5, 8], 4) + "]");
  console.log("copyEvens([3, 1, 4, 1, 5], 1) → [4] " + "[" + copyEvens([3, 1, 4, 1, 5], 1) + "]");
  console.log("copyEvens([2], 1) → [2] " + "[" + copyEvens([2], 1) + "]");
  console.log("copyEvens([6, 2, 4, 8], 2) → [6, 2] " + "[" + copyEvens([6, 2, 4, 8], 2) + "]");
  console.log("copyEvens([6, 2, 4, 8], 3) → [6, 2, 4] " + "[" + copyEvens([6, 2, 4, 8], 3) + "]");
  console.log("copyEvens([6, 2, 4, 8], 4) → [6, 2, 4, 8] " + "[" + copyEvens([6, 2, 4, 8], 4) + "]");
  console.log("copyEvens([1, 8, 4], 1) → [8] " + "[" + copyEvens([1, 8, 4], 1) + "]");
  console.log("copyEvens([1, 8, 4], 2) → [8, 4] " + "[" + copyEvens([1, 8, 4], 2) + "]");
  console.log("copyEvens([2, 8, 4], 2) → [2, 8] " + "[" + copyEvens([2, 8, 4], 2) + "]");

}

function testZeroMax() {
  console.log();
  console.log("zeroMax([0, 5, 0, 3]) → [5, 5, 3, 3] " + "[" + zeroMax([0, 5, 0, 3]) + "]");
  console.log("zeroMax([0, 4, 0, 3]) → [3, 4, 3, 3] " + "[" + zeroMax([0, 4, 0, 3]) + "]");
  console.log("zeroMax([0, 1, 0]) → [1, 1, 0] " + "[" + zeroMax([0, 1, 0]) + "]");
  console.log("zeroMax([0, 1, 5]) → [5, 1, 5] " + "[" + zeroMax([0, 1, 5]) + "]");
  console.log("zeroMax([0, 2, 0]) → [0, 2, 0] " + "[" + zeroMax([0, 2, 0]) + "]");
  console.log("zeroMax([1]) → [1] " + "[" + zeroMax([1]) + "]");
  console.log("zeroMax([0]) → [0] " + "[" + zeroMax([0]) + "]");
  console.log("zeroMax([]) → [] " + "[" + zeroMax([]) + "]");
  console.log("zeroMax([7, 0, 4, 3, 0, 2]) → [7, 3, 4, 3, 0, 2] " + "[" + zeroMax([7, 0, 4, 3, 0, 2]) + "]");
  console.log("zeroMax([7, 0, 4, 3, 0, 1]) → [7, 3, 4, 3, 1, 1] " + "[" + zeroMax([7, 0, 4, 3, 0, 1]) + "]");
  console.log("zeroMax([7, 0, 4, 3, 0, 0]) → [7, 3, 4, 3, 0, 0] " + "[" + zeroMax([7, 0, 4, 3, 0, 0]) + "]");
  console.log("zeroMax([7, 0, 1, 0, 0, 7]) → [7, 7, 1, 7, 7, 7] " + "[" + zeroMax([7, 0, 1, 0, 0, 7]) + "]");
}

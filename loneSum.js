/******************************************************************************
                              Challenge: Lone Sum

Instructions:
Given 3 integer values, a b c, return their sum. However, if one of the values
is the same as another of the values, it does not count towards the sum.

Examples:
loneSum(1, 2, 3) → 6
loneSum(3, 2, 3) → 2
loneSum(3, 3, 3) → 0

*******************************************************************************/

function loneSum(a, b, c) {

}


/****************************************************************************
                         DON'T EDIT ANYTHING BELOW
*****************************************************************************/
function runTests() {
  console.log("loneSum(1, 2, 3) Expected: 6  Run: " + loneSum(1, 2, 3));
  console.log("loneSum(3, 2, 3) Expected: 2  Run: " + loneSum(3, 2, 3));
  console.log("loneSum(3, 3, 3) Expected: 0  Run: " + loneSum(3, 3, 3));
  console.log("loneSum(9, 2, 2) Expected: 9  Run: " + loneSum(9, 2, 2));
  console.log("loneSum(2, 2, 9) Expected: 9  Run: " + loneSum(2, 2, 9));
  console.log("loneSum(2, 9, 2) Expected: 9  Run: " + loneSum(2, 9, 2));
  console.log("loneSum(2, 9, 3) Expected: 14 Run: " + loneSum(2, 9, 3));
  console.log("loneSum(4, 2, 3) Expected: 9  Run: " + loneSum(4, 2, 3));
  console.log("loneSum(1, 3, 1) Expected: 3  Run: " + loneSum(1, 3, 1));
}

runTests();

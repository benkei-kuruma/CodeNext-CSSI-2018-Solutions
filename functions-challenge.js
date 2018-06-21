//Author: FirstName LastName

/******************************************************************************
                                   sumDouble

Instructions:
Given two number values, return their sum. Unless the two values are the same,
then return double their sum.

Examples:
sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8

*******************************************************************************/


function sumDouble(a, b) {
  if(a === b) {
    return (a + b) * 2;
  } else {
    return a + b;
  }
}


/******************************************************************************
                                   makes10

Instructions:
Given 2 numbers, a and b, return true if one if them is 10 or if their sum is 10.

Examples:
makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true

*******************************************************************************/


function makes10(a, b) {
  return a === 10 || b === 10 || a + b === 10;
}


/******************************************************************************
                                   parrotTrouble

Instructions:
We have a loud talking parrot. The "talking" parameter is a boolean that
represents if the parrot is talking. The "hour" parameter is the current hour
time in the range 0..23. We are in trouble if the parrot is talking and the hour
is before 7 or after 20. Return true if we are in trouble.

Examples:
parrotTrouble(true, 6) → true
parrotTrouble(true, 7) → false
parrotTrouble(false, 6) → false
*******************************************************************************/

function parrotTrouble(talking, hour) {
  return talking && (hour < 7 || hour > 20);
}


/******************************************************************************
                                   alarmClock

Instructions:
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean
indicating if we are on vacation, return a string of the form "7:00" indicating
when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on
the weekend it should be "10:00". Unless we are on vacation -- then on weekdays
it should be "10:00" and weekends it should be "off".

Examples:
alarmClock(1, false) → "7:00"
alarmClock(6, true) → "off"
alarmClock(0, false) → "10:00"
*******************************************************************************/

function alarmClock(day, vacation) {
  if(day >= 1 && day <= 5) {
    if(vacation) {
      return "10:00";
    } else {
      return "7:00";
    }
  } else {
    if(vacation) {
      return "off";
    } else {
      return "10:00";
    }
  }
}


/******************************************************************************
                                   caughtSpeeding

Instructions:
You are driving a little too fast, and a police officer stops you. Write code
to compute the result, encoded as a number value: 0=no ticket, 1=small ticket,
2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61
and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
Unless it is your birthday -- on that day, your speed can be 5 higher in all
cases.

Examples:
caughtSpeeding(60, false) → 0
caughtSpeeding(65, false) → 1
caughtSpeeding(65, true) → 0
*******************************************************************************/

function caughtSpeeding(speed, isBirthday) {
  if(isBirthday) {
    speed -= 5;
  }
  if(speed <= 60) {
    return 0;
  } else if(speed >= 61 && speed <= 80) {
    return 1;
  } else {
    return 2;
  }
}

/****************************************************************************
                                    Tests
*****************************************************************************/
function testSumDouble() {
  console.log();
  console.log("sumDouble(1, 2) → 3 "	+ sumDouble(1, 2));
  console.log("sumDouble(3, 2) → 5 " + sumDouble(3, 2));
  console.log("sumDouble(2, 2) → 8 " + sumDouble(2, 2));
  console.log("sumDouble(-1, 0) → -1 " + sumDouble(-1, 0));
  console.log("sumDouble(3, 3) → 12 " + sumDouble(3, 3));
  console.log("sumDouble(0, 0) → 0 " + sumDouble(0, 0));
  console.log("sumDouble(0, 1) → 1 " + sumDouble(0, 1));
  console.log("sumDouble(3, 4) → 7 " + sumDouble(3, 4));
}

function testMakes10() {
  console.log();
  console.log("makes10(9, 10) → true " + makes10(9, 10));
  console.log("makes10(9, 9) → false " + makes10(9, 9));
  console.log("makes10(1, 9) → true " + makes10(1, 9));
  console.log("makes10(10, 1) → true " + makes10(10, 1));
  console.log("makes10(10, 10) → true " + makes10(10, 10));
  console.log("makes10(8, 2) → true " +	makes10(8, 2));
  console.log("makes10(8, 3) → false " + makes10(8, 3));
  console.log("makes10(10, 42) → true	" + makes10(10, 42));
  console.log("makes10(12, -2) → true	" + makes10(12, -2));
}

function testParrotTrouble() {
  console.log();
  console.log("parrotTrouble(true, 6) → true " + parrotTrouble(true, 6));
  console.log("parrotTrouble(true, 7) → false " + parrotTrouble(true, 7));
  console.log("parrotTrouble(false, 6) → false " + parrotTrouble(false, 6));
  console.log("parrotTrouble(true, 21) → true " + parrotTrouble(true, 21));
  console.log("parrotTrouble(false, 21) → false " + parrotTrouble(false, 21));
  console.log("parrotTrouble(false, 20) → false " + parrotTrouble(false, 20));
  console.log("parrotTrouble(true, 23) → true " + parrotTrouble(true, 23));
  console.log("parrotTrouble(false, 23) → false " + parrotTrouble(false, 23));
  console.log("parrotTrouble(true, 20) → false " + parrotTrouble(true, 20));
  console.log("parrotTrouble(false, 12) → false " + parrotTrouble(false, 12));
}

function testAlarmClock() {
  console.log();
  console.log("alarmClock(1, false) → \"7:00\" " + "\"" + alarmClock(1, false) + "\"");
  console.log("alarmClock(5, false) → \"7:00\" " + "\"" + alarmClock(5, false) + "\"");
  console.log("alarmClock(0, false) → \"10:00\" " + "\"" + alarmClock(0, false) + "\"");
  console.log("alarmClock(6, false) → \"10:00\" " + "\"" + alarmClock(6, false) + "\"");
  console.log("alarmClock(0, true) → \"off\" " + "\"" + alarmClock(0, true) + "\"");
  console.log("alarmClock(6, true) → \"off\" " + "\"" + alarmClock(6, true) + "\"");
  console.log("alarmClock(1, true) → \"10:00\" "	+ "\"" + alarmClock(1, true) + "\"");
  console.log("alarmClock(3, true) → \"10:00\" " + "\"" + alarmClock(3, true) +"\"");
  console.log("alarmClock(5, true) → \"10:00\" " + "\"" + alarmClock(5, true) + "\"");
}

function testCaughtSpeeding() {
  console.log();
  console.log("caughtSpeeding(60, false) → 0 " + caughtSpeeding(60, false));
  console.log("caughtSpeeding(65, false) → 1 " + caughtSpeeding(65, false));
  console.log("caughtSpeeding(65, true) → 0 " + caughtSpeeding(65, true));
  console.log("caughtSpeeding(80, false) → 1 " + caughtSpeeding(80, false));
  console.log("caughtSpeeding(85, false) → 2 " + caughtSpeeding(85, false));
  console.log("caughtSpeeding(85, true) → 1 " + caughtSpeeding(85, true));
  console.log("caughtSpeeding(70, false) → 1 " + caughtSpeeding(70, false));
  console.log("caughtSpeeding(75, false) → 1 " + caughtSpeeding(75, false));
  console.log("caughtSpeeding(75, true) → 1 " + caughtSpeeding(75, true));
  console.log("caughtSpeeding(40, false) → 0 " + caughtSpeeding(40, false));
  console.log("caughtSpeeding(40, true) → 0 " +	caughtSpeeding(40, true));
  console.log("caughtSpeeding(90, false) → 2 " + caughtSpeeding(90, false));
}

testSumDouble();
testMakes10();
testParrotTrouble();
testAlarmClock();
testCaughtSpeeding();

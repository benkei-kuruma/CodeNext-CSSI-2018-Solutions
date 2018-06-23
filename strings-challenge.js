//Author: FirstName LastName

/******************************************************************************
                                   withoutEnd()

Instructions:
Given a string, return a version without the first and last char, so "Hello"
yields "ell". The string length will be at least 2.

Examples:
withoutEnd("Hello") → "ell"
withoutEnd("java") → "av"
withoutEnd("coding") → "odin"

*******************************************************************************/

function withoutEnd(str) {
  return str.substring(1, str.length - 1);
}

// Test this function.
testWithoutEnd();

/******************************************************************************
                                   frontAgain()

Instructions:
Given a string of any length, return true if the first 2 characters in the
string also appear at the end of the string, such as with "edited".

Examples:
frontAgain("edited") → true
frontAgain("edit") → false
frontAgain("ed") → true

*******************************************************************************/


function frontAgain(str) {
  if(str.length < 2)  {
    return false;
  }
  return str.endsWith(str.substring(0, 2));
}

// Test this function.
testFrontAgain();

/******************************************************************************
                                   deFront()

Instructions:
Given a string, return a version without the first 2 characters. Except keep the
first character if it is 'a' and keep the second character if it is 'b'. The
string length will be at least 2.

Examples:
deFront("Hello") → "llo"
deFront("java") → "va"
deFront("away") → "aay"
*******************************************************************************/

function deFront(str) {
  var retString = str.substring(2);
  if(str.charAt(1) === "b") {
    retString = "b" + retString;
  }
  if(str.charAt(0) === "a") {
    retString = "a" + retString;
  }
  return retString;
}

// Test this function.
testDeFront();

/******************************************************************************
                                   without2()

Instructions:
Given a string of any length, if a length 2 substring appears at both its
beginning and end, return a string without the substring at the beginning, so
"HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields
"". Otherwise, return the original string unchanged.

Examples:
without2("HelloHe") → "lloHe"
without2("HelloHi") → "HelloHi"
without2("Hi") → ""
*******************************************************************************/

function without2(str) {
  if(str.length >= 2 && str.endsWith(str.substring(0, 2))) {
    return str.substring(2);
  }
  return str;
}

// Test this function.
testWithout2();

/******************************************************************************
                                   withoutX2()

Instructions:
Given a string of any length, if one or both of the first 2 chars is 'x',
return the string without those 'x' chars, and otherwise return the string
unchanged.

Examples:
withoutX2("xHi") → "Hi"
withoutX2("Hxi") → "Hi"
withoutX2("Hi") → "Hi"
*******************************************************************************/

function withoutX2(str) {
  if(str.length >= 2 && str.charAt(1) == 'x') {
    str = str.charAt(0) + str.substring(2);
  }
  if(str.length >= 1 && str.charAt(0) == 'x') {
    str = str.substring(1);
  }
  return str;
}

// Test this function.
testWithoutX2();

/****************************************************************************
                                    Tests
*****************************************************************************/
function testWithoutEnd() {
  console.log();
  console.log("withoutEnd(\"Hello\") → \"ell\" " + "\"" + withoutEnd("Hello") + "\"");
  console.log("withoutEnd(\"javascript\") → \"avascrip\" " + "\"" + withoutEnd("javascript") + "\"");
  console.log("withoutEnd(\"coding\") → \"odin\" " + "\"" + withoutEnd("coding") + "\"");
  console.log("withoutEnd(\"code\") → \"od\" " + "\"" + withoutEnd("code") + "\"");
  console.log("withoutEnd(\"ab\") → \"\" " + "\"" + withoutEnd("ab") + "\"");
  console.log("withoutEnd(\"Chocolate!\") → \"hocolate\" " + "\"" + withoutEnd("Chocolate!") + "\"");
  console.log("withoutEnd(\"kitten\") → \"itte\" " + "\"" + withoutEnd("kitten") + "\"");
  console.log("withoutEnd(\"woohoo\") → \"ooho\" " + "\"" + withoutEnd("woohoo") + "\"");
}

function testFrontAgain() {
  console.log();
  console.log("frontAgain(\"edited\") → true " + frontAgain("edited"));
  console.log("frontAgain(\"edit\") → false " + frontAgain("edit"));
  console.log("frontAgain(\"ed\") → true " + frontAgain("ed"));
  console.log("frontAgain(\"jj\") → true " + frontAgain("jj"));
  console.log("frontAgain(\"jjj\") → true " + frontAgain("jjj"));
  console.log("frontAgain(\"jjjj\") → true " + frontAgain("jjjj"));
  console.log("frontAgain(\"jjjk\") → false " + frontAgain("jjjk"));
  console.log("frontAgain(\"x\") → false " + frontAgain("x"));
  console.log("frontAgain(\"\") → false " + frontAgain(""));
  console.log("frontAgain(\"javascript\") → false " + frontAgain("javascript"));
  console.log("frontAgain(\"javascriptja\") → true " + frontAgain("javascriptja"));
}

function testDeFront() {
  console.log();
  console.log("deFront(\"Hello\") → \"llo\" " + "\"" + deFront("Hello") + "\"");
  console.log("deFront(\"java\") → \"va\" " + "\"" + deFront("java") + "\"");
  console.log("deFront(\"away\") → \"aay\" " + "\"" + deFront("away") + "\"");
  console.log("deFront(\"axy\") → \"ay\" " + "\"" + deFront("axy") + "\"");
  console.log("deFront(\"abc\") → \"abc\" " + "\"" + deFront("abc") + "\"");
  console.log("deFront(\"xby\") → \"by\" " + "\"" + deFront("xby") + "\"");
  console.log("deFront(\"ab\") → \"ab\" " + "\"" + deFront("ab") + "\"");
  console.log("deFront(\"ax\") → \"a\" " + "\"" + deFront("ax") + "\"");
  console.log("deFront(\"axb\") → \"ab\" " + "\"" + deFront("axb") + "\"");
  console.log("deFront(\"aaa\") → \"aa\" " + "\"" + deFront("aaa") + "\"");
  console.log("deFront(\"xbc\") → \"bc\" " + "\"" + deFront("xbc") + "\"");
  console.log("deFront(\"bbb\") → \"bb\" " + "\"" + deFront("bbb") + "\"");
  console.log("deFront(\"bazz\") → \"zz\" " + "\"" + deFront("bazz") + "\"");
  console.log("deFront(\"ba\") → \"\" " + "\"" + deFront("ba") + "\"");
  console.log("deFront(\"abxyz\") → \"abxyz\" " + "\"" + deFront("abxyz") + "\"");
  console.log("deFront(\"hi\") → \"\" " + "\"" + deFront("hi") + "\"");
  console.log("deFront(\"his\") → \"s\" " + "\"" + deFront("his") + "\"");
  console.log("deFront(\"xz\") → \"\" " + "\"" + deFront("xz") + "\"");
  console.log("deFront(\"zzz\") → \"z\" " + "\"" + deFront("zzz") + "\"");
}

function testWithout2() {
  console.log();
  console.log("without2(\"HelloHe\") → \"lloHe\" " + "\"" + without2("HelloHe") + "\"");
  console.log("without2(\"HelloHi\") → \"HelloHi\" " + "\"" + without2("HelloHi") + "\"");
  console.log("without2(\"Hi\") → \"\" " + "\"" + without2("Hi") + "\"");
  console.log("without2(\"Chocolate\") → \"Chocolate\" " + "\"" + without2("Chocolate") + "\"");
  console.log("without2(\"xxx\") → \"x\" " + "\"" + without2("xxx") + "\"");
  console.log("without2(\"xx\") → \"\" " + "\"" + without2("xx") + "\"");
  console.log("without2(\"x\") → \"x\" " + "\"" + without2("x") + "\"");
  console.log("without2(\"\") → \"\" " + "\"" + without2("") + "\"");
  console.log("without2(\"Fruits\") → \"Fruits\" " + "\"" + without2("Fruits") + "\"");
}

function testWithoutX2() {
  console.log();
  console.log("withoutX2(\"xHi\") → \"Hi\" " + "\"" + withoutX2("xHi") + "\"");
  console.log("withoutX2(\"Hxi\") → \"Hi\" " + "\"" + withoutX2("Hxi") + "\"");
  console.log("withoutX2(\"Hi\") → \"Hi\" " + "\"" + withoutX2("Hi") + "\"");
  console.log("withoutX2(\"xxHi\") → \"Hi\" " + "\"" + withoutX2("xxHi") + "\"");
  console.log("withoutX2(\"Hix\") → \"Hix\" " + "\"" + withoutX2("Hix") + "\"");
  console.log("withoutX2(\"xaxb\") → \"axb\" " + "\"" + withoutX2("xaxb") + "\"");
  console.log("withoutX2(\"xx\") → \"\" " + "\"" + withoutX2("xx") + "\"");
  console.log("withoutX2(\"x\") → \"\" " + "\"" + withoutX2("x") + "\"");
  console.log("withoutX2(\"\") → \"\" " + "\"" + withoutX2("") + "\"");
  console.log("withoutX2(\"Hello\") → \"Hello\" " + "\"" + withoutX2("Hello") + "\"");
  console.log("withoutX2(\"Hexllo\") → \"Hexllo\" " + "\"" + withoutX2("Hexllo") + "\"");
  console.log("withoutX2(\"xHxllo\") → \"Hxllo\" " + "\"" + withoutX2("xHxllo") + "\"");
}

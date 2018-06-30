//Author: FirstName LastName

/******************************************************************************
                                objectShare()

Instructions:
Modify and return the given object as follows: if property "a" exists, set
the property "b" to have that same value. In all cases remove property "c",
leaving the rest of the object unchanged.

Note:
While testing these functions, remember that the order the properties appear
within the object does not matter. Instead, just be sure that the properties of
the objects your code returns are the same as those in the tests.

Examples:
objectShare({"a": "aaa", "b": "bbb", "c": "ccc"}) → {"a": "aaa", "b": "aaa"}
objectShare({"b": "xyz", "c": "ccc"}) → {"b": "xyz"}
objectShare({"a": "aaa", "c": "meh", "d": "hi"}) → {"a": "aaa", "b": "aaa", "d": "hi"}
*******************************************************************************/

function objectShare(obj) {
  if(obj.hasOwnProperty("a")) {
    obj.b = obj.a;
  }
  delete obj.c;
  return obj;
}

// Test this function.
testObjectShare();

/******************************************************************************
                                   wordLen()

Instructions:
Given an array of strings, return an object containing a key for every
different string in the array, and the value is that string's length.

Hint: With these "word" problems, you should use bracket notation to add each
string as an object key.

Examples:
wordLen(["a", "bb", "a", "bb"]) → {"bb": 2, "a": 1}
wordLen(["this", "and", "that", "and"]) → {"that": 4, "and": 3, "this": 4}
wordLen(["code", "code", "code", "bug"]) → {"code": 4, "bug": 3}
*******************************************************************************/

function wordLen(strings) {
  var retVal = {};
  for(var i = 0; i < strings.length; i++) {
    retVal[strings[i]] = strings[i].length;
  }
  return retVal;
}

// Test this function.
testWordLen();

/******************************************************************************
                                   wordCount()

Instructions:
The classic word-count algorithm: given an array of strings, return an object
with a key for each different string, with the value the number of times that
string appears in the array.

Examples:
wordCount(["a", "b", "a", "c", "b"]) → {"a": 2, "b": 2, "c": 1}
wordCount(["c", "b", "a"]) → {"a": 1, "b": 1, "c": 1}
wordCount(["c", "c", "c", "c"]) → {"c": 4}
*******************************************************************************/

function wordCount(strings) {
  var retVal = {};
  for(var i = 0; i < strings.length; i++) {
    if(!retVal.hasOwnProperty(strings[i])) {
      retVal[strings[i]] = 1;
    } else {
      retVal[strings[i]]++;
    }
  }
  return retVal;
}

// Test this function.
testWordCount();

/******************************************************************************
                                   wordMultiple()

Instructions:
Given an array of strings, return an object where each different string is a key
and its value is true if that string appears 2 or more times in the array.

Hint:
One way to solve this with objects with boolean values:
-no value (undefined): string not seen yet
-value false: string seen once
-value true: string seen 2 or more times

Examples:
wordMultiple(["a", "b", "a", "c", "b"]) → {"a": true, "b": true, "c": false}
wordMultiple(["c", "b", "a"]) → {"a": false, "b": false, "c": false}
wordMultiple(["c", "c", "c", "c"]) → {"c": true}
*******************************************************************************/

function wordMultiple(strings) {
  var retVal = {};
  for(var i = 0; i < strings.length; i++) {
    if(!retVal.hasOwnProperty(strings[i])) {
      retVal[strings[i]] = false;
    } else if(retVal[strings[i]] === false){
      retVal[strings[i]] = true;
    }
  }
  return retVal;
}

// Test this function.
testWordMultiple();

/******************************************************************************
                                   wordAppend()

Instructions:
Loop over the given array of strings to build a result string like this: when a
string appears the 2nd, 4th, 6th, etc. time in the array, append the string to
the result. Return the empty string if no string appears a 2nd time.

Examples:
wordAppend(["a", "b", "a"]) → "a"
wordAppend(["a", "b", "a", "c", "a", "d", "a"]) → "aa"
wordAppend(["a", "", "a"]) → "a"
*******************************************************************************/

function wordAppend(strings) {
  var retVal = "";
  var obj = {};
  for(var i = 0; i < strings.length; i++) {
    if(!obj.hasOwnProperty(strings[i])) {
      obj[strings[i]] = 1;
    } else {
      obj[strings[i]]++;
      if(obj[strings[i]] % 2 == 0) {
        retVal += strings[i];
      }
    }
  }
  return retVal;
}

// Test this function.
testWordAppend();

/****************************************************************************
                                    Tests
*****************************************************************************/
function testObjectShare() {
  console.log();
  console.log("objectShare({\"a\": \"aaa\", \"b\": \"bbb\", \"c\": \"ccc\"}) → {\"a\": \"aaa\", \"b\": \"aaa\"} " + JSON.stringify(objectShare({"a": "aaa", "b": "bbb", "c": "ccc"})));
  console.log("objectShare({\"b\": \"xyz\", \"c\": \"ccc\"}) → {\"b\": \"xyz\"} " + JSON.stringify(objectShare({"b": "xyz", "c": "ccc"})));
  console.log("objectShare({\"a\": \"aaa\", \"c\": \"meh\", \"d\": \"hi\"}) → {\"a\": \"aaa\", \"d\": \"hi\", \"b\": \"aaa\"} " + JSON.stringify(objectShare({"a": "aaa", "c": "meh", "d": "hi"})));
  console.log("objectShare({\"a\": \"xyz\", \"b\": \"1234\", \"c\": \"yo\", \"z\": \"zzz\"}) → {\"a\": \"xyz\", \"b\": \"xyz\", \"z\": \"zzz\"} " + JSON.stringify(objectShare({"a": "xyz", "b": "1234", "c": "yo", "z": "zzz"})));
}

function testWordLen() {
  console.log();
  console.log("wordLen([\"a\", \"bb\", \"a\", \"bb\"]) → {\"a\": 1, \"bb\": 2} " + JSON.stringify(wordLen(["a", "bb", "a", "bb"])));
  console.log("wordLen([\"this\", \"and\", \"that\", \"and\"]) → {\"this\": 4, \"and\": 3, \"that\": 4} " + JSON.stringify(wordLen(["this", "and", "that", "and"])));
  console.log("wordLen([\"code\", \"code\", \"code\", \"bug\"]) → {\"code\": 4, \"bug\": 3} " + JSON.stringify(wordLen(["code", "code", "code", "bug"])));
  console.log("wordLen([]) → {} " + JSON.stringify(wordLen([])));
  console.log("wordLen([\"z\"]) → {\"z\": 1} " + JSON.stringify(wordLen(["z"])));
}

function testWordCount() {
  console.log();
  console.log("wordCount([\"a\", \"b\", \"a\", \"c\", \"b\"]) → {\"a\": 2, \"b\": 2, \"c\": 1} " + JSON.stringify(wordCount(["a", "b", "a", "c", "b"])));
  console.log("wordCount([\"c\", \"b\", \"a\"]) → {\"a\": 1, \"b\": 1, \"c\": 1} " + JSON.stringify(wordCount(["c", "b", "a"])));
  console.log("wordCount([\"c\", \"c\", \"c\", \"c\"]) → {\"c\": 4} " + JSON.stringify(wordCount(["c", "c", "c", "c"])));
  console.log("wordCount([]) → {} " + JSON.stringify(wordCount([])));
  console.log("wordCount([\"this\", \"and\", \"this\", \"\"]) → {\"\": 1, \"and\": 1, \"this\": 2} " + JSON.stringify(wordCount(["this", "and", "this", ""])));
}

function testWordMultiple() {
  console.log();
  console.log("wordMultiple([\"a\", \"b\", \"a\", \"c\", \"b\"]) → {\"a\": true, \"b\": true, \"c\": false} " + JSON.stringify(wordMultiple(["a", "b", "a", "c", "b"])));
  console.log("wordMultiple([\"c\", \"b\", \"a\"]) → {\"a\": false, \"b\": false, \"c\": false} " + JSON.stringify(wordMultiple(["c", "b", "a"])));
  console.log("wordMultiple([\"c\", \"c\", \"c\", \"c\"]) → {\"c\": true} " + JSON.stringify(wordMultiple(["c", "c", "c", "c"])));
  console.log("wordMultiple([]) → {} " + JSON.stringify(wordMultiple(([]))));
  console.log("wordMultiple([\"this\", \"and\", \"this\"]) → {\"this\": true, \"and\": false} " + JSON.stringify(wordMultiple(["this", "and", "this"])));
}

function testWordAppend() {
  console.log();
  console.log("wordAppend([\"a\", \"b\", \"a\"]) → \"a\" " + "\"" + wordAppend(["a", "b", "a"]) + "\"");
  console.log("wordAppend([\"a\", \"b\", \"a\", \"c\", \"a\", \"d\", \"a\"]) → \"aa\" " + "\"" + wordAppend(["a", "b", "a", "c", "a", "d", "a"]) + "\"");
  console.log("wordAppend([\"a\", \"\", \"a\"]) → \"a\" " + "\"" +wordAppend(["a", "", "a"]) + "\"");
  console.log("wordAppend([]) → \"\" " + "\"" + wordAppend([]) + "\"");
  console.log("wordAppend([\"a\", \"b\", \"b\", \"a\", \"a\"]) → \"ba\" " + "\"" + wordAppend(["a", "b", "b", "a", "a"]) + "\"");
  console.log("wordAppend([\"a\", \"b\", \"b\", \"b\", \"a\", \"c\", \"a\", \"a\"]) → \"baa\" " + "\"" +wordAppend(["a", "b", "b", "b", "a", "c", "a", "a"]) + "\"");
  console.log("wordAppend([\"a\", \"b\", \"b\", \"b\", \"a\", \"c\", \"a\", \"a\", \"a\", \"b\", \"a\"]) → \"baaba\" " + "\"" + wordAppend(["a", "b", "b", "b", "a", "c", "a", "a", "a", "b", "a"]) + "\"");
}

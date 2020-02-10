// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //1. Create an array containing the input string split into an array using the split method
    //2. Use the reverse() method to reverse the order of the array.
    //3. Use the join method to change the reversed array into a string.
    return input.split("").reverse().join("");
    
    // YOUR CODE GOES ABOVE HERE //
}

// to recreate the inner-workings of the reverse() method, you would:
//1. Create an empty array.
//2. use a for loop to iterate through the array in reverse starting with arr[arr.length - 1] and ending when 0 is reached
//3. push the element into the empty array (they will be in reverse order)
//4. Use the join method to recreate a string.

//create storage container to hold my characters from my string
//using a for-loop iterate over my string to gain accessto each character
//since needs to be reverses, start at the end of the string
//access each indexed character
//concat my character to my storage of other characters using the += operator
//

// var reversedString = "";
//for(var i = input.length - 1; i >= 0; i--){
  //access each indexed character
//  var character = input[i];
  //concat current character to my storage of the other characters using the += operator
//  reversedString += character;
// }
// return reversedString;
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}


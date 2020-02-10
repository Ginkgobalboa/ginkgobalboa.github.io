// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //Given an input array, iterate forward over the array starting with the index of 0 and ending with the last indexed position of the array
  for(var i = 0; i <= array.length - 1; i++) {
  //print each indexed element in the array
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //Given an input array, iterate through the array starting at the last indexed position of the array and ending when the index reaches zero
  for (var i = array.length - 1; i >= 0; i--) {
  //print each indexed position of the array
    console.log(array[i]);
  }      
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //Long way with a Loop
  //Create an array literal
  var arr = [];
  //Using a for in loop, iterate through all of the keys in the object
  for (var key in object) {
  //Push all keys of object to an array
    arr.push(key);
  }
  return arr;
  //Short Way
  //Given an input object, return an array containing the object keys
  
  //return Object.keys(object);
  
}  
  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //Using a for in loop, iterate throguh each key in an object
  for (var key in object) {
  //Log each key to the console
    console.log(key);
  }
    
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //Create an object literal
  var arr = [];
  //Using a for in loop, iterate through the keys of the object and push the values associated with each key onto an array
  for (var key in object) {
    arr.push(object[key]);
  }
  //Return the array
  return arr;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //Usin a for in loop, iterate over the keys of an object
  for (var key in object) {
  //print the values associated with each key
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //
  return Object.keys(object).length;
  //Long way - loop through, push all into an array, find the length of the array
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //Create an empty array
  var arr = [];
  //Use a for in loop to iterate through the array and push key values to an array
  for (var key in object) {
    arr.push(object[key]);
  }
  //use for loop to iterate through the array in reverse
  for (var i = arr.length - 1; i >= 0; i--){
    //console.log the elements of the array
    console.log(arr[i]);
  }
  
  
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}

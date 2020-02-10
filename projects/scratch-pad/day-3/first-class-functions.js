// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
   //Create a function expression with the argument of value that returns the result of the boolean statement value > base
   var greaterThanExpression = function(value) {
       return value > base;
   } 
   //Return the greaterThan function expression
   return greaterThanExpression;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //Create a function expression with the argument of value that returns the result of the boolean statement value < base
    var lessThanExpression = function(value) {
       return value < base; 
    }
    //Return the the lessThan function expression
    return lessThanExpression;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //Create a function expression with the argument of string that tests whether string[0] (first letter of string) is === startsWith character when 
    //forced to uppercase or is === startsWith character when forced to lowercase
    var startsWithExpression = function(string) {
        if (string[0] === startsWith.toUpperCase() || string[0] === startsWith.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
    //Return the startsWithExpression
    return startsWithExpression;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //Create a function expression with the argument with string that tests whether string[string.length - 1] === endsWith character
    //when forced to uppercase or string[string.length - 1] === endsWith character when forced to lowercase
    var endsWithExpression = function(string) {
        if(string[string.length - 1] === endsWith.toUpperCase() || string[string.length - 1] === endsWith.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    } 
    //Return the endsWithExpression
    return endsWithExpression;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //create an empty array to for the modified strings
    var modifiedStrings = [];
    //Use a for loop to iterate through the array
    for (var i = 0; i <= strings.length - 1; i++) {
    // push the modified strings into the empty array   
        modifiedStrings.push(modify(strings[i]));
    }
    return modifiedStrings;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //create an empty array to contain modified string results
    var testedStringsResults = [];
    // Use a for loop to iterate through the array (strings) and push the result of the modified string into a new array
    for(var i = 0; i <= strings.length - 1; i++){
        testedStringsResults.push(test(strings[i]));
    }
    // Use a for loop to interate through the tested strings array and return false if the string didn't pass the test
    for(i = 0; i <= testedStringsResults.length - 1; i++) {
        if (testedStringsResults[i] === false) {
            return false;
        } 
    } 
    return true;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    //The length property was applied to the input string and returned
    
    return string.length; 
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // The fmethod toLowerCase was applied to the input string and returned
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //The method toUpperCase was applied to the input string and returned
    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // The methods split, join("-"), and toLowerCase were applied to the input string and returned
    return string.split(" ").join("-").toLowerCase();
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
// If string[0] (first character in the string) is strictly equal (===) to char.toUpperCase or (||) char.toLowerCase return true. <--- makes case insensitive
//Otherwise return false
    if (string[0] === char.toUpperCase() || string[0] === char.toLowerCase()) {
        return true;
    } else {
        return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //If string[string.length - 1] (last character in the string) is strictly equal to === char.toUpperCase() (forced upper case last letter) 
    // || or if the last character in the string (string[string.length - 1]) is strictly equal to  === char.toLowerCase() (forced lower case last letter)
    // return true
    //Otherwise return false
    
    if (string[string.length - 1] === char.toUpperCase() || string[string.length -1] === char.toLowerCase()) {
        return true;
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    // stringOne and stringTwo are concatenated and returned
    
    return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}
// ??????????????????????????????????????????????????????????????????????????
/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    return args.join("");

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length) {
        return stringOne;
    } else {
        return stringTwo;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 
 
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //1. put the strings into an array
    //2. use the sort method on the first elements in each array to determine which is "higher" in alphabetical order
    // if the strings are equal, return 0
    // If the first string is higher in alphabetical order, return 1
    // If the second string is higher in alphabetical order, return -1
    
    var arr = [stringOne, stringTwo];
    arr.sort();
    if (stringOne === stringTwo) {
        return 0;
    } else if (arr[0] === stringOne) {
        return 1;
    } else if (arr[0] === stringTwo) {
        return -1;
    }
    
    


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //1. put the strings into an array
    //2. use the sort method on the first elements in each array to determine which is "higher" in alphabetical order
    // if the strings are equal, return 0
    // If the first string is lower in alphabetical order, return 1
    // If the second string is lower in alphabetical order, return -1
    var arr = [stringOne, stringTwo];
    
    arr.sort();
    
    if (stringOne === stringTwo) {
        return 0;
    } else if (arr[0] === stringTwo) {
        return 1;
    } else if (arr[0] === stringOne) {
        return -1;
    }


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}

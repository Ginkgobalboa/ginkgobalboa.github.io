// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //Series of conditional statements testing for if an object and not an array, date, or null, returning false as the result
    if (typeof value === "object" && value === null) {
        return false;
    } else if (typeof value === "object" && value instanceof Date) {
        return false;
    } else if (typeof value === "object" && Array.isArray(value)) {
        return false;
    } else if (typeof value === "object") {
        return true;   
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
   if (typeof value === "object" && value === null) {
        return false;
    } else if (typeof value === "object" && value instanceof Date) {
        return false;
    } else if (typeof value === "object" && Array.isArray(value)) {
        return true;
    } else if (typeof value === "object") {
        return true;   
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //string of if/else if conditions that tests for each type of entry and returns the type of entry as as string     
    // String
    if (typeof value === "string") {
        return "string";
    // Array
    } else if (Array.isArray(value)) {
        return "array";
    // Object
    } else if (typeof value === "object" && value !== null && Array.isArray(value) === false && value instanceof Date === false) {
        return "object";
    // Undefined 
    } else if (value === undefined) {
        return "undefined";
    // Number
    } else if (typeof value === "number") {
        return "number";
    // Boolean
    } else if (typeof value === "boolean") {
        return "boolean";
    // Null
    } else if (value === null) {
        return "null";
    // Function
    } else if (typeof value === "function") {
        return "function";
    // Date
    } else if (value instanceof Date === true) {
        return "date";
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}

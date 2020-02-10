/*
* LOOPS:
*
* Loops are constructs in JavaScript that alter the top to bottom control 
* flow by executing a block of code a specified amount of times. Loops are 
* instrumental in looping or iterating over collections of data such as arrays or 
* objects. 
*
* There are 3 types of loops: while loops, for loops, and for-in loops.
*/

// While Loops //

/* 
* A while loop executes a block of code while a provided condition is true. For 
* while loops, it is often necessary to add a line of code that causes a variable to 
* increment or decrement in the code block to avoid creating an infinite loop. 
* The while loop is created using the keyword while, followed by a condition bound
* by parentheses, followed by curly braces containing a code block. 
*
* In the example below, the variable count is pushed to an array and then decremented
* while the variable count is less than or equal to 10.
*/ 

var count = 10;
var arr = [];
while (count >= 0) {
    arr.push(count);
    count--;         // decrements the count
}
console.log(arr); // prints [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]



// For Loops //

/* 
* For loops are particularly instrumental in looping or iterating over an array.
* In order to create a for loop, the keyword for is used followed by 3 parts
* bound by parentheses and separated by a semicolon: 
* 1) the declaration of a variable typically with the keyword let and the name i
* (to stand for index) initialized to the value of the start condition, 
* 2) an end condition to tell the loop when to stop looping, and 
* 3) typically an increment or decrement of i. The parentheses are followed by a 
* set of curly braces containing a code block for the loop to execute during each 
* iteration.  
*
* The example below iterates forward through myArray beginning at the index of 
* 0 and ending when i is less than or equal to the last index of the array 
* (myArray.length - 1), dividing each element by 2 and pushing the value to 
* newArray during each iteration. The second for loop example iterates backwards
* over the array.
*/

var myArray = [10, 22, 4, 8, 64, 42]
var forwardArray = [];
// looping forward over myArray
for (let i = 0; i <= myArray.length - 1; i++) {
    forwardArray.push(myArray[i] / 2);
}
console.log(forwardArray); // prints [ 5, 11, 2, 4, 32, 21 ]

//looping backward over myArray
var backwardArray = [];
for (let i = myArray.length - 1; i >= 0; i--) {
    backwardArray.push(myArray[i] / 2);
}
console.log(backwardArray); // prints [ 21, 32, 4, 2, 11, 5 ]

// For-In Loops //

/*
* For-in loops are particularly instrumental in iterating over properties of 
* objects. The for-in loop is created by first using the keyword for followed by 
* the declaration of the var key(any variable name can be used, but it is least
* confusing to use key), followed by the word in, followed by the name of
* the object, followed by curly braces delineating code that will be executed 
* for each property of the object. 
* 
* The first example below iterates through all of the properties of an object and 
* prints all of the keys. The second example below iterated through all fo the 
* properties of an object and prints all of the values in the key-value pairs.
*/

var myCat = {
    name: "Goblin",
    age:  0,
    vocalization: "mew",
    legs: 4, 
    tail: 1,
    eyeColor: "green",
    furColor: "grey"
}
// prints all keys 
for (var key in myCat) {
  console.log(key);
}

// prints all key values
for (var key in myCat) {
  console.log(myCat[key]);
}

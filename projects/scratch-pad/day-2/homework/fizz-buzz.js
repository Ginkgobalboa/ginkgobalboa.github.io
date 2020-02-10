// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //Using a for loop iterate through numbers 1 to 100
    for (var i = 1; i <= 100; i++) {
        // if the remainder of i divided by 3 and i divided by 5 is 0, console.log "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        // else if the remainder of i divided by 3 is 0, console.log "Fizz"
        } else if (i % 3 === 0) {
            console.log("Fizz");
        //else if the remainder of i divided by 5 is 0, console.log "Buzz"
        } else if (i % 5 === 0) {
            console.log("Buzz");
        //otherwise, console.log the number
        } else {
            console.log(i);
        }
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}

    // var input = 1;
    // //Creat and empty and array
    // var arr = [];
    // //Using a while loop, push the numbers 1 through 100 to an array
    // while (input <= 100) {
    //     arr.push(input);
    //     input++;
    // }
    // //Usin a for loop, iterate through the array of the numbers starting at index 0 and ending at arr.length - 1
    // for (var i = 0; i <= arr.length - 1; i++) {
    //     //if the element of the array divided by 3 is === 0 && the element of the array is === 5, console.log "FizzBuzz"
    //     if (arr[i] / 3 === 0 && arr[i] / 5 === 0) {
    //         console.log("FizzBuzz");
    //     //if the element of the array divided by 3 is strictly equal to 0, console.log "Fizz"
    //     } else if (arr[i] / 3 === 0) {
    //         console.log ("Fizz");
    //     //else if the element of the array divided by 5 is strictly equal to 0, console.log "Buzz"
    //     } else if (arr[i] / 5 === 0) {
    //         console.log("Buzz");
    //     //Otherwise, print the element of the array (will be a number not divisible by 3 or 5)
    //     } else {
    //         console.log(arr[i]);
    //     }
    // } 

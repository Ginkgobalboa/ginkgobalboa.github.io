////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Chapter 2 introduced the standard function Math.min which returns its smallest
// argument. (see Return Values p. 27). We can build something like that now.
// Write a function that takes 2 arguments and returns their minimum. 
function min(num1, num2) {
  //return the result of Math.min(num1, num2)
  return Math.min(num1, num2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//We’ve seen that % (the remainder operator) can be used to test whether a number 
//is even or odd by using % 2 to see whether it’s divisible by two. Here’s another 
//way to define whether a positive whole number is even or odd:
//Zero is even.
//One is odd.
//For any other number N, its evenness is the same as N - 2.

//Define a recursive function isEven corresponding to this description. 
//The function should accept a single parameter (a positive, whole number) and return a Boolean.
//Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
// Hints:
// Your function will likely look somewhat similar to the inner find function in 
//the recursive findSolution example in this chapter, with an if/else if/else 
//chain that tests which of the three cases applies. The final else, corresponding 
//to the third case, makes the recursive call. Each of the branches should contain 
//a return statement or in some other way arrange for a specific value to be returned.

//When given a negative number, the function will recurse again and again, passing 
//itself an ever more negative number, thus getting further and further away from 
//returning a result. It will eventually run out of stack space and abort.

function isEven(number) {
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else {
    if (number > 0) {
      return isEven(number -2);
    } else {
      return isEven(number + 2);
    }
  }
}
// condition ? exprIfTrue : exprIfFalse
//number > 0 ? isEven(number - 2) : isEven(number + 2);
////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//You can get the Nth character, or letter, from a string by writing "string"[N]. 
//The returned value will be a string containing only one character (for example, "b"). 
//The first character has position 0, which causes the last one to be found at position 
//string.length - 1. In other words, a two-character string has length 2, and its 
//characters have positions 0 and 1.

//Write a function countBs that takes a string as its only argument and returns 
//a number that indicates how many uppercase “B” characters there are in the string.

//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

// Your code here.

//Hints:
//Your function will need a loop that looks at every character in the string. 
//It can run an index from zero to one below its length (< string.length). If the 
//character at the current position is the same as the one the function is looking 
//for, it adds 1 to a counter variable. Once the loop has finished, the counter 
//can be returned.

//Take care to make all the bindings used in the function local to the function 
//by properly declaring them with the let or const keyword.

function countChars(string, character) {
    var count = 0;
    for (var i = 0; i <= string.length - 1; i++) {
        if (string[i] === character) {
            count++;
           
        } 
    return (count);
    }
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
    var count = 0;
    for (var i = 0; i <= string.length - 1; i++) {
        if (string[i] === "B") {
            count++;
        }
        return (count);
    }
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};

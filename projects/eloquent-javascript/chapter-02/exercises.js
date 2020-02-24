
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Write a loop that makes 7 calls to console.log to output the following triangle
// #
// ##
// ###
// ####
// #####
// ######
// #######
function triangles(number) {
//create an empty string
//create a for loop beginning with 0 and looping through 1 less than number amount of times
    var line = '';
    for (var i = 0; i < number; i++){
        // for each iteration, console.log(line = line + "#")
        console.log(line = line + '#');
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Write a program that uses console.log to print all of the numbers from 1 to 
// 100. For numbers divisible by 3, print "fizz" instead of the number, and for
// numbers divisible by 5 (and not 3), print "buzz" instead. If the number is 
//divisible by 5 and 3, print "fizzbuzz"
function fizzBuzz(start, end) {
    for (var i = start; i <= end; i++) {
        // if the remainder of i divided by 3 and i divided by 5 is 0, console.log "fizzbuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        // else if the remainder of i divided by 3 is 0, console.log "fizz"
        } else if (i % 3 === 0) {
            console.log("fizz");
        //else if the remainder of i divided by 5 is 0, console.log "buzz"
        } else if (i % 5 === 0) {
            console.log("buzz");
        //otherwise, console.log the number
        } else {
            console.log(i);
        }
    }  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function drawChessboard(number) {

var chessBoard = "";//this is the empty string we're going to add either " " , '#' or "/n"
// in the outer loop we add newline to seperate rows
for (var row = 0; row < number; row++) { 
    // every inner loop creates a line, it alternately adds a space (" ") or '#' to the string that's being populated (chessBoard)
  for (var column = 0; column < number; column++) { // inner loop is a row
    if ((row + column) % 2 == 0) // row + column results in a number 
                          // if row + column is even, it populates a " " to the string  
      chessBoard += " ";
    else                 // otherwise, it populates a "#" to the string
      chessBoard += "#";
  }
  chessBoard += "\n";     // after the iteration of every loop, a line break is added to 
                          // go to the next line
}
// console.log the chessBoard
console.log(chessBoard);
}

drawChessboard(8);

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}

// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// Flattening
// Use the reduce method in combination with the concat method to “flatten” an 
//array of arrays into a single array that has all the elements of the original arrays.
//
// let arrays = [[1, 2, 3], [4, 5], [6]];
// // Your code here.
// // → [1, 2, 3, 4, 5, 6]

function flatten(arrayOfArrays){
// create a new array that takes the array of arrays and uses the reduce method on 
// the value created by a function that concatenates the array element with the accumulator 
	var newArray = arrayOfArrays.reduce(function(accumulator,element){
		return accumulator.concat(element);
	// the ,[] is an optional feature of the reduce method that returns an
	// empty array if an initial value (arrayOfArrays) is an empty array
	},[])
	// return the new array
	return newArray;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// Your own loop
// Write a higher-order function loop that provides something like a for loop statement. 
//It takes a value, a test function, an update function, and a body function. Each iteration, 
//it first runs the test function on the current loop value and stops if that returns false. 
//Then it calls the body function, giving it the current value. Finally, it calls 
// the update function to create a new value and starts from the beginning.

// When defining the function, you can use a regular loop to do the actual looping.

// // Your code here.

// loop(3, n => n > 0, n => n - 1, console.log);
// // → 3
// // → 2
// // → 1


function loop(start, test, update, body) {
   //using a for loop and starting at start, execute the body function on i
   // as long as test(i) evaluates to true; use the update function on after each
   // iteration
   for (let i = start; test(i); i = update(i)) {
     body(i);
   }
}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// Everything
// Analogous to the some method, arrays also have an every method. This one returns
// true when the given function returns true for every element in the array. In a way, 
// some is a version of the || operator that acts on arrays, and every is like the && operator.

// Implement every as a function that takes an array and a predicate function as 
// parameters. Write two versions, one using a loop and one using the some method.

// function every(array, test) {
//   // Your code here.
// }

// console.log(every([1, 3, 5], n => n < 10));
// // → true
// console.log(every([2, 4, 16], n => n < 10));
// // → false
// console.log(every([], n => n < 10));
// // → true
// Like the && operator, the every method can stop evaluating further elements as 
// soon as it has found one that doesn’t match. So the loop-based version can jump 
// out of the loop—with break or return—as soon as it runs into an element for which 
// the predicate function returns false. If the loop runs to its end without finding 
// such an element, we know that all elements matched and we should return true.

// To build every on top of some, we can apply De Morgan’s laws, which state that 
// a && b equals !(!a || !b). This can be generalized to arrays, where all elements 
// in the array match if there is no element in the array that does not match.

// create a function that has the parameters of array(array) and test (function)
function every(array, test) {
  // using a for loop, iterate through each element of the array
  for (let i = 0; i <= array.length - 1; i++) {
    //if the boolean value of the test function taking the argument of the element
    // in the array is not true(aka false), return false
    if (!test(array[i])) {
      return false;
    }
  }
  // otherwise, return true
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// Dominant writing direction
// Write a function that computes the dominant writing direction in a string of text. 
// Remember that each script object has a direction property that can be "ltr" (left to right), 
// "rtl" (right to left), or "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that have 
// a script associated with them. The characterScript and countBy functions defined 
// earlier in the chapter are probably useful here.

// console.log(dominantDirection("Hello!"));
// // → ltr
// console.log(dominantDirection("Hey, مساء الخير"));
// // → rtl
// Your solution might look a lot like the first half of the textScripts example. 
// You again have to count characters by a criterion based on characterScript and 
// then filter out the part of the result that refers to uninteresting (script-less) 
// characters.

// Finding the direction with the highest character count can be done with reduce. 
// If it’s not clear how, refer to the example earlier in the chapter, where reduce 
// was used to find the script with the most characters.
// taken from p. 92 of Eloquent Javascript
//This function, when given a character code, finds the character's corresponding script
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }
  return null;
}

// Taken from p. 93-94 of Eloquent JavaScript. This function counts the characters
// that belong to each script

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  // counts is an array of objects
  return counts;
}
//
function dominantDirection(text) {
// Input: string of different text
// Output: string (indicating )

  let arrayOfScripts = countBy(text, function(characterInText) {
    //find script for each letter encountered
    const objOfScripts = characterScript(characterInText.charCodeAt());
    //check if the character belongs to a writing direction 
    // if objOfScript doesn't equal null, return the direction of the writing
    if(objOfScripts !== null) {
      return objOfScripts.direction
    }
  // if it doesn't belong to a writing direction, return 'non-alphabetic"
  return "non-alphabetic"
  });
// use sort to find the highest count value
  arrayOfScripts.sort(function(x, y) {
    return y.count - x.count;
  })
return arrayOfScripts[0].name;
}

// function dominantDirection(text) {
//   //This portion of the function build a list of scripts
//   let scripts = countBy(text, char => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.direction : "none";
//   }).filter(({name}) => name != "none");
  
//   // This portion of the function uses a switch statement that takes as 
//   // input the length of the scripts produced above and performs actions
//   // according to the following cases
//   switch (scripts.length) {
//     case 0:
//       return 'no dominant direction found';
//     case 1:
//       return scripts[0].name;
//     default:
//       if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
//         return 'no dominant direction found';
//       } else {
//         return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
//       }
//   }
// }


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};

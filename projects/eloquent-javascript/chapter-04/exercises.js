////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10));
// Write a range function that takes two arguments, start and end, and returns an 
//array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum 
//of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third 
// argument that indicates the “step” value used when building the array. If no step 
// is given, the elements go up by increments of one, corresponding to the old behavior. 
// The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also 
// works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// // Your code here.

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55
// Building up an array is most easily done by first initializing a binding to [] (a fresh, empty array) 
// and repeatedly calling its push method to add a value. Don’t forget to return 
// the array at the end of the function.

// Since the end boundary is inclusive, you’ll need to use the <= operator rather 
// than < to check for the end of your loop.

// The step parameter can be an optional parameter that defaults (using the = operator) to 1.

// Having range understand negative step values is probably best done by writing 
// two separate loops—one for counting up and one for counting down—because the 
// comparison that checks whether the loop is finished needs to be >= rather than <= when counting downward.

// It might also be worthwhile to use a different default step, namely, -1, when the 
// end of the range is smaller than the start. That way, range(5, 2) returns something 
// meaningful, rather than getting stuck in an infinite loop. It is possible to refer '
// to previous parameters in the default value of a parameter.





// // create a function with the parameters start(starting point), end (ending point), and step(incrementer)
// // if start is < end, use 1 for step; otherwise use -1
// Input: start (number), end(number), step (number incrementer)
// Output: array
// if start < end, iterate forward over the array by the value of step and push items to the array
// if start > end, iterate forward over the array by the negative value of step and push items to the array
// if start === end, return an empty array
// if step === undefined, 

// create a function with the parameters start, end, & step (all numbers)
function range (start, end, step) {
  //if the start value strictly equals the end value, return and empty array
  if (start === end) {
    return []; 
  }
  // create an empty array
  var array = [];
  
  /* (refactor)
    if( step === undefined ) {
      step = start < end ? 1 : -1;
    }
  */
  // if start is < end and step is undefined, set step equal to 1
  if (start < end && step === undefined) {
    step = 1;
  //else if start is > than end and step is undefined, set step equal to -1
  } else if (start > end && step === undefined) {
    step = -1;
  }
  // if start < end and step is > 0, 
  if (start < end && step > 0) {
    // push every value from start to end incremented by step to array 
    for (let i = start; i <= end; i += step) {
      array.push(i);
    } 
  // else if start < end and step > 0,
  } else if (start > end && step > 0) {
    // push every value from start to end decremented by step to array
    for (let i = start; i >= end; i -= step) {
      array.push(i);
    }
  // else if start > end and step < 0,
  } else if (start > end && step < 0) {
    // push every value from start to end incremented by step to array
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  // return the array
  return array;
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


//Create a function that takes an array of numbers and returns the sum of all numbers

function sum (array) {
    // declare a variable to hold the value of the sum set equal to zero
    var sumVar = 0;
    // for every element in the array
    for(var i = 0; i <= array.length - 1; i++) {
        // add each element of the array to sumVar
        sumVar += array[i];
    }
    // return the sum variable
    return sumVar;
}

////////////////////////////////////////////////////////////////////////////////
// sumOfRange /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sumOfRange(start, end) {
  // utilize the functions sum and range created above to produce the sum of an
  // array containing a range of numbers
  sum(range(start, end));
}


////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

// // Your code here.

// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]
// There are two obvious ways to implement reverseArray. The first is to simply go over the input array from front to back and use the unshift method on the new array to insert each element at its start. The second is to loop over the input array backwards and use the push method. Iterating over an array backwards requires a (somewhat awkward) for specification, like (let i = array.length - 1; i >= 0; i--).

// Reversing the array in place is harder. You have to be careful not to overwrite elements that you will later need. Using reverseArray or otherwise copying the whole array (array.slice(0) is a good way to copy an array) works but is cheating.

// The trick is to swap the first and last elements, then the second and second-to-last, and so on. You can do this by looping over half the length of the array (use Math.floor to round down—you don’t need to touch the middle element in an array with an odd number of elements) and swapping the element at position i with the one at position array.length - 1 - i. You can use a local binding to briefly hold on to one of the elements, overwrite that one with its mirror image, and then put the value from the local binding in the place where the mirror image used to be.

function reverseArray(array) {
  //create an empty array
  let reversedArray = [];
  //loop backwards over the array
  for (let i = array.length - 1; i >= 0; i--) {
    //push each element of the input array to reversedArray
    reversedArray.push(array[i]);  
  }
  //return the reversed array
  return reversedArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
// loop over half of the array and swap the corresponding indicies
  for(let i = 0; i < array.length / 2; i++) {
    var temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

// 1
// let list = {
// 2
//   value: 1,
// 3
//   next: {
// 4
//     value: 2,
// 5
//     next: {
// 6
//       value: 3,
// 7
//       next: null
// 8
//     }
// 9
//   }
// 10
// };
// The resulting objects form a chain, like this:

// A linked list
// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.

// // Your code here.

// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20

function arrayToList(array){ //pass list as parameter
    //create a variable and initialize it to null
    let list = null; 
    //loop over the input array backwards (items at the beginning of the list are linked to 
    //items later in the list so that's why it must iterate backwards)
    for (var i = array.length - 1; i >= 0; i--)
        // for each element of the array, add the list value as the rest key
        //and reassign the list value as an object with the value of i and the rest as the previous list
        list = {value: array[i], rest:list}; 
    return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // create an array literal
  let result = [];
  // if the typeof list is "undefined" OR if the list value is undefined OR if the next list is undefined
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
  // return the result (empty array)
    return result;
    // otherwise. push the list value to the result array
  } else {
    result.push(list.value);
    // while the list has the property of rest and the value of rest doesn't equal null
    while (list.hasOwnProperty('rest') && list.rest !== null) {
      //set list equal to list.rest
      list = list.rest;
      // if the object has the property of value, push it to the result array
      if (list.hasOwnProperty('value')) {
      	result.push(list.value);
      }
    }
  }
  // return the result array
  return result;
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//function adding a new item to the beginning of the list that points to the rest of the list
function prepend(element, list) {
  // return a new list with an added element
  return {
    value: element,
    rest: list
  };
}
////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//given a list and a number
function nth(list, number) {
  // if the number is zero
  if (number === 0) {
  // return the value 
    return list.value;
  // if the list is exhausted, return undefined
  } else if (list.rest === null) {
    return undefined;
  } else {
    // using tail recursion, iterate through the rest of the list until the counter
    // equals zero or until the list is exhausted
    return nth(list.rest, number - 1);
  }
}


// Deep comparison
// The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects 
//with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (use the === operator for that) or have their properties 
//compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep 
//comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

// // Your code here.

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true
// Your test for whether you are dealing with a real object will look something like typeof x == "object" && x != null. 
//Be careful to compare properties only when both arguments are objects. In all other cases you can just immediately return the result of applying ===.

// Use Object.keys to go over the properties. You need to test whether both objects have the same set of 
//property names and whether those properties have identical values. One way to do that is to ensure that both 
//objects have the same number of properties (the lengths of the property lists are the same). And then, when 
//looping over one of the object’s properties to compare them, always first make sure the other actually has a property by that name. 
//If they have the same number of properties and all properties in one also exist in the other, they have the same set of property names.

// Returning the correct value from the function is best done by immediately returning false when a mismatch is found and returning true at the end of the function.

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Write a function deepEqual that takes two values and returns true only if they 
// are the same value or are objects with the same properties, where the values of 
//the properties are equal when compared with a recursive call to deepEqual.

function deepEqual(a, b) {
  // if a is strictly equal to b, return true
  //this cathes all of the simple types of data where the statement resolves to a boolean true
  if (a === b) {
    return true;
  }
  // this catches all the statements where simple types are not equal
  // if a or b == null or if typeof a or b is not equal to "object"
  if (a == null || typeof a != "object" || b == null || typeof b != "object") {
    return false;
  }
  // this section is to compare object, arrays, and classes  
  let aProps = 0
  let bProps = 0;
  // using a for loop, loop over the key value pairs of the complex value and add 1 
  // to the propsInA variable for iteration to count the number of properties in the 
  // object or array-like object
  for (let key in a) {
    aProps += 1;
  }
  // using a for loop, loop over the key value pairs of the complex value and add 1 
  // to the propsInA variable for iteration to count the number of properties in b
  for (let key in b) {
    bProps += 1;
    // this recursive statement uses the deepEqual function to 
    // check if the key values in the complex value are equal 
    // if they are not equal, return false
    if (!(key in a) || !deepEqual(a[key], b[key]))
      return false;
  }
  // return the boolean result of whether the number of properties in a is equal to 
  // the number of properties in b
  return aProps == bProps;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};

// #!/usr/bin/env node
'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-ginkgobalboa");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
// Objective: Find the number of male customers
// Input: Array
// Output: Number
// Constraints: Use filter

// var maleCount = function(array) {
//  return _.filter(array, function(element, index, array) {
//         return element.gender === "male";    
//     }).length; 
// };

//Create a function expression called Malecount that takes the parameter array
var maleCount = function(array) {
    // Create a let called filtered set equal to the function filter 
    // invoked upon an array and a function that takes the argument element
    let filtered = _.filter(array, function(element) {
        //filter loops over the array and returns the elements for which 
        // element.gender is strictly equal to "male"
        return element.gender === "male";    
    });
    // return the length of the array filtered
    return filtered.length;
};


// Works, but doesn't use filter
// var maleCount = function(array) {
//     let count = 0;
//     for(let i = 0; i <= array.length - 1; i++) {
//         if (array[i].gender === "male") {
//             count += 1;
//         }
//     }
//     return count;
// };

// Objective: Find the number of female customers
// Input: Array
// Output: Number
// Constraints: Use reduce

// Create a function expression femaleCount that takes an array
var femaleCount = function(array) {
    // set count equal to the reduce function invoked on array, a 
    // function that takes accumulator, element, and a seed of 0
     let count = _.reduce(array, function(accumulator, element) {
        // if element.gender is strictly equal to "female"
        if (element.gender === "female") {
          // increase the accumulator by 1
          accumulator += 1; 
        }
        // return the accumulator
        return accumulator;
    }, 0);
    // return the count
    return count;
};

// Sabina's Model
// var femaleCount = function(array) {
//   return _.reduce(array, function(accumulator, element){
//         return accumulator + (element.gender === "female");
//     }, 0);
// };

// Without higer order functions
// var femaleCount = function(array) {
//   let count = 0;
//   for(let i = 0; i <= array.length - 1; i++) {
//       if (array[i].gender === "female") {
//           count += 1;
//       }
//   }
//   return count;
// };

// Objective: Find the oldest customer's name
// Input: Array
// Output: String

// Ideas: use Math.max()
// make all of the ages into an array using pluck? (or a for loop)
// set mathMax equal to a variable
// return customerObject.name for the age that === mathMax


// Works but Doesn't Utilize Functions
// var oldestCustomer = function(array){
//     let ageArray = [];
//     for(let i = 0; i <= array.length - 1; i++) {
//       ageArray.push(array[i].age); 
//     }
//     for(let i = 0; i <= array.length - 1; i++) {
//         if (array[i].age === Math.max.apply(Math, ageArray)) {
//             return array[i].name; 
//         }
//     }
// };

// Create a function expression oldestCustomer that takes an array
var oldestCustomer = function(array) {
    // set max equal to 0 
    let max = 0;
    // return the result of the reduce function invoked on array, a function taking
    // accumulator and currentValue, and a seed
    return _.reduce(array, function(accumulator, currentValue) {
        // if currentValue.age is greater than or equal to max
        if(currentValue.age >= max) {
            // set the accumulator equal to currentValue.name
            accumulator = currentValue.name;
            // set max equal to currentValue.age
            max = currentValue.age;
        }
        // return the accumulator
        return accumulator;
     }, "");
 };

// Objective: Find the youngest customer's name
// Input: Array
// Output: String
// Ideas: use Math.min

// Works, but doesn't utilize functions

// var youngestCustomer = function(array){
//     let ageArray = [];
//     for(let i = 0; i <= array.length - 1; i++) {
//       ageArray.push(array[i].age); 
//     }
//     for(let i = 0; i <= array.length - 1; i++) {
//         if (array[i].age === Math.min.apply(Math, ageArray)) {
//             return array[i].name; 
//         }
//     }    
// };

// Create a function expression called youngestCustomer that takes an array
var youngestCustomer = function(array){
    // set min equal to Infinity
    let min = Infinity;
    // return reducte invoked on the array, a function that takes an
    // accumulator and currentValue, and a seed of and empty string
    return _.reduce(array, function(accumulator, currentValue){ 
        // if currentValue.age is less than or equal to the min
        if(currentValue.age <= min) {
            // set the accumulator equal to currentValue.name
            accumulator = currentValue.name;
            // set the min equal to currentValue.age
            min = currentValue.age;
     }
     // return the accumulator
     return accumulator;
    }, "");
};

// Objective: Find the average balance of all customers
// Input: Array
// Output: Number
// Ideas: 
// make a totalBalance variable
// add all of the balances together using a for loop
// divide totalBalance by array.length

// Works, but doesn't utilize functions
// var averageBalance = function(array) {
//   let totalBalance = 0;
//   for(let i = 0; i <= array.length - 1; i++) {
//         totalBalance += parseFloat(array[i].balance.replace(/\$/g,'').replace(/\,/g,''));      
//   }
//   return totalBalance / array.length;
// };

// Using Filter
// var averageBalance = function(array) {
//     let totalBalance = 0;
//     _.filter (array, function(element, index, array){
//         totalBalance += parseFloat(element.balance.replace(/\$|,/g,''));
//     });
//     return totalBalance / array.length; 
// };
//Using reduce

//Create a function expression 
var averageBalance = function(array) {
    let totalBalance = _.reduce(array, function(accumulator, currentValue) {
        return accumulator += parseFloat(currentValue.balance.replace(/\$|,/g,''));
    }, 0);
    return totalBalance / array.length;
};

//Objective: Find how many customer's names begin with a given letter
//Input: Array, Letter
//Output: Number
// make a count variable
// use a for loop to iterate over the array and access each customer's name
// if array[i].name[0].toLowerCase() === letter.toLowerCase(), count += 1
// 
//

// var firstLetterCount = function(array, letter){
//   let count = 0;
//   for(let i = 0; i <= array.length - 1; i++) {
//       if (array[i].name[0].toLowerCase() === letter.toLowerCase()) {
//           count += 1;
//       }
//   }
//   return count; 
// };

//Create a function expression that takes and array and a letter
var firstLetterCount = function(array, letter) {
    // return the result of the function reduce invoked on array, a
    // function with the parameters of accumulator and currentValue,
    // and a seed of 0
   return _.reduce(array, function(accumulator, currentValue) {
       // if the first letter in currentValue.name converted to lowercase 
       // is strictly equal to letter converted to lowercase
       if (currentValue.name[0].toLowerCase() === letter.toLowerCase()) {
           // increase the accumulator by 1
           accumulator += 1;
       }
       // return the accumulator 
       return accumulator;
   }, 0);
};


// Objective: Find how many friends of a given customer have names that start 
// with a given letter
// Input: Array, Customer, Letter
// Output: Number
// Ideas:
// Use a for loop to iterate over the array
// 

// loop over the array with name === cutomer (conditional) - filter
//
// create at function expression called friendFirstLetterCount that takes
// an array, the customer name string, and a letter
var friendFirstLetterCount = function(array, customer, letter){
    // set filteredArray equal to the filter function invoked on array and 
    // a function taking element, index, and array
    let filteredArray = _.filter(array, function(element, index, array) {
       // if element.name is strictly equal to the customer string
       if (element.name === customer) {
           // return true
           return true;
       } 
    });
    // return the result of reduce invoked on the friends key value of the only element of 
    // filtered array
    // 
    return filteredArray[0].friends.reduce(function(accumulator, currentResult) {
        // if the first letter of currentResult converted to lowercase is
        // strictly equal to letter converted to lowercase
        if (currentResult.name[0].toLowerCase() === letter.toLowerCase()) {
            // increase the accumulator by 1
            accumulator += 1;
        }
        // return the accumulator
        return accumulator;
    }, 0)
};

// 

// Objective: Find the customers' names that have a given customer's name in
// their friends list 
// Input: Array, Name
// Output: Array
// Ideas:
// Use contains?
// Create an empty array hasFriend to contain names that have given name in friends list
// use a for loop to iterate over the array
// if the friends array contains an object with the a key "name" with the value name,
// push the name of the person that has that name friend
// 

// Create a function expression called friendsCount that takes an array and a string value name
var friendsCount = function(array, name){
        // create an array literal called hasFriend
        let hasFriend = [];
        // use the each function that takes an array and a function that 
        // takes element index and array 
        _.each(array, function(element, index, array) {
                // use the filter function that takes the element.friends array, and 
                // a function that takes element1, index, & array
                _.filter(element.friends, function(element1, index, array) {
                // if the value of element1.name is strictly equal to the input name
                if (element1.name === name) {
                    // push element.name to the hasFriend array
                    hasFriend.push(element.name);
                }
            });
        });
        // return hasFriend
        return hasFriend;
};


// Objective: Find the three most common tags among all customers' associated tags
// Input: Array
// Output: Array
// Ideas: 
// Make each tag a key w/ a counter for the value pair

// Create a function expression that takes an array
var topThreeTags = function(array) {
    // Create an array literal called all
    let all = [];
    for (let i = 0; i <= array.length - 1; i++) {
        for(let j = 0; j <= array[i]["tags"].length - 1; j++) {
            all.push(array[i]["tags"][j]);
        }
    }
    // Create an object to count tags
    let accObj = _.reduce(all, function(accumulator, tagElement) {
        // if accumulator[tagElement] exists in the object,
        if(accumulator[tagElement]) {
           // increment accumulator[tagElement] by 1
           accumulator[tagElement] += 1; 
        // if accumulator[tagElement] doesn't exist in the object   
        } else {
            // add accumulator[tagElement] and set it equal to 1
            accumulator[tagElement] = 1;
        }
        return accumulator;
    }, {});
    // create a tagValueArr to contain all of the tag values in accObj
    let tagValueArr = [];
    // loop over accObj and push the key values to tagValueArr
    for(let key in accObj) {
        tagValueArr.push(accObj[key]);
    }
    // sort tagValueArr from greatest to least using .sort
    let sorted = tagValueArr.sort(function(a, b) {return b - a});
    // Create finalArray to collect the top three tags
    let finalArray = [];
    // loop over the object
    for(let key in accObj) {
        // if the object key equals the first value in the sorted array
        if(accObj[key] === sorted[0]) {
            // push the key to the final array and delete the accObj[key]
            finalArray.push(key);
            delete accObj[key];
        // else if the object key equals the second value in the sorted array
        } else if(accObj[key] === sorted[1]) {
            // push the key to the final array and delete the accObj[key]
            finalArray.push(key);
            delete accObj[key];
        // else if the object key equals the third value in the sorted array
        } else if(accObj[key] === sorted[2]) {
            // push the key to the final array and delete the accObj[key]
            finalArray.push(key);
            delete accObj[key];
        }
    }
    //return the final array
    return finalArray;
};

// var topThreeTags = function(array){
//  var topTags = [];
//  // create array literal
// // use for loop to access main array, and nestted array to access tag array
//  for(var i = 0; i <= array.length-1; i++) {
//      for(var t = 0; t <= array[i]["tags"].length-1; t++) {
//          topTags.push(array[i]["tags"][t]);
//      }
//   var myTags =  _.reduce(topTags, function(accObj, tag){
//     // check to see if tag occured
//     // if the tag is a key in our accumulator object
//     if(accObj[tag]){
//       // increment/ add 1 to it's value
//       accObj[tag] += 1;
//     } else {
//     // if the number is not a property in the obj 
//       // make the key/val pair w/ val of 1 
//     accObj[tag] = 1;
//     }
//      return accObj;
//   }, {});
//   // create array literal in order to sort
//   var tagArr = [];
//   // use for in key loop to loop through your object
//   for(let key in myTags) {
//       // push your key name into an array, 
//       tagArr.push({name: key, count: myTags[key]});
//   }
//   // sort an array count 
// //console.log(tagArr);
//  tagArr.sort(function(a,b) {
//   return b.count - a.count;
// });
// }
//   //return tagArr at 0,1 and 2 index
//   return [tagArr[0].name, tagArr[1].name, tagArr[2].name];
// };


// function getNumCount(numArr) {
//   // TODO
//   return reduce(numArr, function(accObj, number){
//     //check to see if number occurred
//     //if the number is a key in our object
//     if(accObj[number]){
//       //increment its value
//       accObj[number] += 1
//       return accObj;
//     }
//     //if the number is not a property oin the obj
//       //make the key/val pair with val of 1
//     accObj[number] = 1;
//     return accObj
//   }, {})
// };


// Objective: create a summary of genders as an object:
// {
//  male: 3,
//  female: 4,
//  non-binary: 1
//  } 
// Input: Array
// Output: Object
// Constraints: Use reduce

var genderCount = function(array){
   let genderObject = {};
   genderObject.male = maleCount(array);
   genderObject.female = femaleCount(array);
   _.reduce(array, function(accumulator, currentResult) {
        if (currentResult.gender === "non-binary") {
            accumulator += 1;
        } 
        return genderObject["non-binary"] = accumulator;
   }, 0);
   return genderObject;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

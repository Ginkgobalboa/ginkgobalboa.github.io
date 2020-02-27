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

var maleCount = function(array) {
    let filtered = _.filter(array, function(element) {
        return element.gender === "male";    
    });
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

var femaleCount = function(array) {
     let count = 0;
     _.reduce(array, function(previousResult, element, index) {
        if (element.gender === "female") {
          count += 1; 
        }
        return count;
    });
};

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

var oldestCustomer = function(array){
    let ageArray = [];
    for(let i = 0; i <= array.length - 1; i++) {
       ageArray.push(array[i].age); 
    }
    for(let i = 0; i <= array.length - 1; i++) {
        if (array[i].age === Math.max.apply(Math, ageArray)) {
            return array[i].name; 
        }
    }
};

// Objective: Find the youngest customer's name
// Input: Array
// Output: String
// Ideas: use Math.min

var youngestCustomer = function(array){
    let ageArray = [];
    for(let i = 0; i <= array.length - 1; i++) {
       ageArray.push(array[i].age); 
    }
    for(let i = 0; i <= array.length - 1; i++) {
        if (array[i].age === Math.min.apply(Math, ageArray)) {
            return array[i].name; 
        }
    }    
};

// Objective: Find the average balance of all customers
// Input: Array
// Output: Number
// Ideas: 
// make a totalBalance variable
// add all of the balances together using a for loop
// divide totalBalance by array.length

var averageBalance = function(array) {
   let totalBalance = 0;
   for(let i = 0; i <= array.length - 1; i++) {
        totalBalance += parseFloat(array[i].balance.replace(/\$/g,'').replace(/\,/g,''));      
   }
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

var firstLetterCount = function(array, letter){
   let count = 0;
   for(let i = 0; i <= array.length - 1; i++) {
       if (array[i].name[0].toLowerCase() === letter.toLowerCase()) {
           count += 1;
       }
   }
   return count; 
};

// Objective: Find how many friends of a given customer have names that start 
// with a given letter
// Input: Array, Customer, Letter
// Output: Number
// Ideas:
// Use a for loop to iterate over the array
// 

var friendFirstLetterCount = function(array, customer, letter){
    
};

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
// use rest parameter????

var friendsCount = function(array, name){
    let hasFriend = [];
    for(let i = 0; i <= array.length - 1; i++) {
        if (array[i].friends["name"] === name) { 
            // how to access an object within an array within an object within an array
            hasFriend.push(array[i].name);
        }
    }
    return hasFriend;
};

// Objective: Find the three most common tags among all customers' associated tags
// Input: Array
// Output: Array

var topThreeTags = function(array){
    
};

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
   let nonBinaryCount = 0;
   for(let i = 0; i <= array.length - 1; i++) {
       if (array[i].gender === "non-binary") {
           nonBinaryCount += 1;
       }
   }
   genderObject["non-binary"] = nonBinaryCount;
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

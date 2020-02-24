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

var maleCount = function(array) {
    return _.filter(array, function(customerObject) {
        return customerObject.gender === "male";    
    }).length;
};

// Objective: Find the number of female customers
// Input: Array
// Output: Number
// Constraints: Use reduce

var femaleCount;

// Objective: Find the oldest customer's name
// Input: Array
// Output: String

var oldestCustomer;

// Objective: Find the youngest customer's name
// Input: Array
// Output: String

var youngestCustomer;

// Objective: Find the average balance of all customers
// Input: Array
// Output: Number

var averageBalance;

//Objective: Find how many customer's names begin with a given letter
//Input: Array, Letter
//Output: Number

var firstLetterCount;

// Objective: Find how many friends of a given customer have names that start 
// with a given letter
// Input: Array, Customer, Letter
// Output: Number

var friendFirstLetterCount;

// Objective: Find the customers' names that have a given customer's name in
// their friends list 
// Input: Array, Name
// Output: Array

var friendsCount;

// Objective: Find the three most common tags among all customers' associated tags
// Input: Array
// Output: Array

var topThreeTags;

// Objective: create a summar of genders as an object:
// {
//  male: 3,
//  female: 4,
//  non-binary: 1
//  } 
// Input: Array
// Output: Object
// Constraints: Use reduce

var genderCount;

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

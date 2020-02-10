// STRING MANIPULATION //
/*
* Strings can be manipulated simply by using concatenation (by adding them 
* together to create a new string). Note in the example below that a space is 
* an indexed element in a string and thus must be accounted for when concatenating.
*/

var firstName = "Rachel";
var lastName = "Andersen";
console.log(firstName + lastName); // prints RachelAndersen
var fullName = firstName + " " + lastName;
console.log(fullName); // prints Rachel Andersen

/* Another method of string manipulation is through the use of methods. 
* The following is a comprehensive list of methods that can be used to manipulate 
* strings with examples.
*/

/* 
* The charAt() method returns the character of the string at the index indicated
* within the parentheses.
*/

var myString = "Fantastic";
console.log(myString.charAt(1)); // prints a

/* 
* The charCodeAt() method returns the unicode value of the character at the 
* index indicated in the parentheses.
*/

var myString = "Loquacious";
console.log(myString.charCodeAt(2)); // prints 113 

/* 
* The concat() method concatenates two or more strings indicated in the parentheses
* and returns the new joined string.
*/

var string1 = "purple ";
var string2 = "people ";
var string3 = "eater";
console.log(string1.concat(string2, string3)); // prints purple people eater

/* 
* The endswith() method returns a boolean value dependent on whether a string
* ends with the character specified in the parentheses.
*/

var color = "puce";
console.log(color.endsWith("e")); // returns true

/*
* The fromCharCode() method takes input unicode values specified in the parentheses 
* and creates a string comprised of the corresponding characters of the given 
* values.
*/

console.log(String.fromCharCode(56, 25, 89)); // prints CAT

/* 
* The includes() method takes an input string in the parentheses and checks whether
* that string is included in the string that is being acted upon by the method and 
* returns a boolean value.
*/

var string = "purple people eater"
console.log(string.includes("purple")); // prints true
console.log(string.includes("green")); // prints false

/* 
* The indexOf() method takes an input value and returns the index of 
* the first instance of the specified value in the string that the method is acted
* upon.
*/

var string = "purple people eater";
console.log(string.indexOf("e")); // prints 5; 

/* 
* The lastIndexOf() method takes an input value and returns the index of the 
* last instance of the the specified value in the string that the method is acted
* upon.
*/

var string = "purple people eater";
console.log(string.lastIndexOf("e")); // prints 17
console.log(string.lastIndexOf("people")); // prints 7

/*
* The localeCompare() method takes two input strings and returns
* the numeric value of 0 if the strings are equal, -1 if the first input string 
* is sorted before the second input string, and 1 if the second  is sorted before 
* the first.
*/

var string1 = "kumquat";
var string2 = "kumquat"
var string3 = "apple";
console.log(string1.localeCompare(string2)); // returns 0
console.log(string2.localeCompare(string3)); // returns 1

/*
* The match() method takes an input string and performs a global case insensitive (gi)
* search of the characters in the string, returning instances of matches in an 
* array.
*/

var string = "Rubber BABY buggy BUMPERS";
console.log(string.match(/b/gi)); // returns [ 'b', 'b', 'B', 'B', 'b', 'B' ]

/* 
* The replace method acts upon a string and replaces the first input string in 
* the parentheses with the second input string.
*/
var string = "purple people eater";
console.log(string.replace("people eater", "vegetarian")); // prints purple vegetarian

/*
* The search() method acts upon a string and returns the index of the first character
* of the input string. 
*/

var string = "purple people eater";
console.log(string.search("people")); // returns 7

/* The slice() method acts upon a string bh extracting a portion of the string
* delineated by start and end index position in the parentheses and returning as
* a new string the extracted portion.
*/

var string = "purple people eater";
console.log(string.slice(0, 6)); // prints purple

/* 
* The split() method splits up the characters in a string and returns an array 
* of those characters as substrings.
*/

var string = "kumquat";
console.log(string.split("")); // prints [ 'k', 'u', 'm', 'q', 'u', 'a', 't' ]

/* 
* The startsWith() method acts upon a string and returns a boolean value dependent
* on whether the string starts with the character specified in the parentheses.
*/

var string = "kumquat"; 
console.log(string.startsWith("k")); // returns true
console.log(string.startsWith("a")); // returns false

/* 
* The substr() method acts upon a string and returns a new string of a specified 
* number of characters starting at a specified index.
*/

var string = "purple people eater";
console.log(string.substr(1, 4)); // prints urpl

/* 
* The substring() method acts upon a string and takes a start input index and 
* optional end input index and extracts and returns a new string thusly.
*/

var string = "vivacious";
console.log(string.substring(2)); // returns vacious
console.log(string.substring(2, 5)); // returns vac

/* 
* The toLowerCase() method acts upon a string to convert all of the characters 
* to lowercase and returning a new string.
*/

var string = "Purple People Eater";
console.log(string.toLowerCase()); // prints purple people eater

/* 
* The toUpperCase() method acts upon a string to capitalize all of the characters.
*/

var string = "Purple People Eater";
console.log(string.toUpperCase()); // prints PURPLE PEOPLE EATER

/* 
* The trim() method trims the white space from both ends of a string and returns
* a new string.
*/

var string = "    purple people eater     ";
console.log(string.trim()); // prints purple people eater

/* 
* The valueOf() method acts upon a string and returns the primitive value of the
* string.
*/

var string = "purple people eater";
console.log(string.valueOf()); // prints purple people eater

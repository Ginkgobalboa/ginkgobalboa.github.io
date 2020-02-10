/*
* DATA TYPES:
*
* In JavaScript, there are different types of data. These types of data can be 
* divided into simple/primitive data types and complex data types. There are five
* primitive data types: number, string, boolean, NaN, and undefined. 
* Complex data types include objects, array-like objects, and functions. 
* 
* Primitive/simple data types are so called because they are just that: simple. 
* A variable can only hold up to 8 
* bits of data, and all primitive types of data are less than or equal to 8 bits 
* in size. It is said that a primitive type of data is copied by value because 
* if you assign a primitive variable to another variable, the actual contents of the 
* variable is copied. Complex data types are, however, larger in size than 8 bits. 
* In fact, they can become indefinitely large in size. Since a variable's 
* capacity is only 8 bits, what is stored in a variable that indicates a complex 
* data type is a reference that points to the actual complex data. If a variable 
* referencing a complex data type is assigned to another variable, is is the 
* reference to the complex data that is copied and not the actual complex data.
* Thus it is said that complex data types are copied by reference. 
*
* Another distinction between primitive and complex data types is that primitive 
* data types are immutable, while complex data types are mutable. That is, if 
* any action is taken on a primitive data type, it produces a new primitive value 
* while the original value remains unchanged. Complex data types, however, are 
* mutable, meaning that they can be modified after it is created.  
*
*/

// Mutability Example // 

var num = 1; // The original value of num is 1, which is a number (primitive)
var newNum = num + 2 // The action taken on num creates an entirely new value: 3
                     // while the value of num is unchanged.

var myArray = [1, 2, 3, 4]; // The original value of myArray (complex)
myArray.push(5); // The new value of myArray is the original array modified
                 // by pushing 5 to the end of the array => [1, 2, 3, 4, 5]

// 0. Number // 
/*
* A number is a primitive data type comprised of numbers using any character 
* 0-9 to compose a number and can be written with or without decimals. 
* Exponential notation can be utilized to handle cases of very large or very
* small numbers.
*
*/

var myAge = 36;

// 1. String //

/*
* A string is any series of alphanumeric characters enclosed in single '' or 
* double "" quotes. 
*
* One property of a string is length. A string can be viewed as a zero-indexed
* list of characters. The character at each indexed "slot" can be accessed 
* using bracket notation, by which the index of the desired character is placed
* within squared brackets following the alias of the string variable. 
*
*/

var firstName = "Rachel";
console.log(firstName[0]) // prints the character at the 0 index (R)
console.log(firstName[1]) // prints the character at the 1 index (a)
console.log(firstName[firstName.length - 1]) // prints the last character (l)
console.log(firstName.length) //prints 6

/* 
* Index     Value
* 0         R
* 1         a
* 2         c
* 3         h
* 4         e
* 5         l
*/

/* 
* Strings also have methods that can act on them. Below is a list of methods 
* that can be used on strings referenced from W3 Schools:  
* (https://www.w3schools.com/jsref/jsref_obj_string.asp)
* Examples of string manipulation will be included in another section: 
* String Manipulation.
*/

// 2. Boolean //
/*
* A boolean is a primitive data type that is a binary value of true or false. 
* Booleans are instrumental in conditional statements as well as in for and while 
* loops. The function Boolean()can be applied to a statement to determine its 
* boolean value. A boolean has 2 properties: the .constructor property and the 
* .prototype property. Booleans can be acted upon by two methods: .toString(), 
* which transforms a boolean value into a string, abd .valueOf(), which returns 
* the primitive value of the boolean. 
*/

Boolean(7 > 6) // returns true

/* 
* Booleans don’t have to be comparisons. In fact, all values are true or “truthy” 
* meaning they result in the boolean true when coerced to a boolean except for 
* the following values which are inherently false or “falsy”: NaN, 0, 
* and empty string (“” or ‘’), undefined, and false. 
*/  

// Boolean Used in a Conditional Statement //
var num1 = 6;
var num2 = 10;
if (num1 > num2) {
    console.log("num1 is bigger");
} else if (num2 > num1) {
    console.log("num 2 is bigger");
} 
//This if statement would print "num2 is bigger" because the condition of the 
// num2 > num1 evaluates to the boolean value of true

// Boolean Used in a Loop //

myArray = [1, 2, 3, 4]
for(let i = 0; i <= myArray.length - 1; i++) {
    console.log(myArray[i]);
}
// The loop will iterate over the loop  and increment as long at the condition 
// i <= myArray.length - 1 evaluates to true. 

// 3. Array //
/*
* An array is a complex data type that is a special type of object, thus it is 
* formally referred to as an array type object. It is is an ordered list of values 
* contained within square brackets []. Each value in the array is separated by a comma. 
* The values contained within an array can be of any data type. Elements of an 
* array can be accessed using bracket notation. An array is zero-indexed just 
* like strings. See example below.  

* Arrays have two
* properties: .length, which returns the length or number of values in the array, 
* and .prototype, which permits you to add new properties and methods to the array.
* If the typeof operator is used on an array, the JavaScript interpreter will 
* indicate that it is an object. Therefore, to further test whether it is an 
* array type of object, use Array.isArray(). 
*/

var myFridge = ["milk", "cheese", "kale"];
console.log(myFridge[2]); // prints the 2 indexed element (kale)
Array.isArray(myFridge); // returns true

/* 
* Arrays have a number of methods that can act on them. Below is a list of 
* some of the methods that can be used on arrays.
*/

/* 
* The concat() array method adds two or more arrays together and returns a new 
* array.
*/

var arr1 = [1, 2, 3, 4]
var arr2 = [5, 6, 7, 8]
var combinedArray = arr1.concat(arr2);
console.log(combinedArray); // prints [ 1, 2, 3, 4, 5, 6, 7, 8 ]

/*
* The includes() array method returns a boolean value based on whether and an 
* includes an element specified in the parentheses.
*/

var arr = ["Dragonfruit", "Tomato", "Persimmon", "Pomello"];
console.log(arr.includes("Tomato")); // prints true

/* 
* The indesOf() method returns the first index of the instance of a specified element.
*/

var arr = ["Dragonfruit", "Tomato", "Persimmon", "Pomello"];
console.log(arr.indexOf("Persimmon")); // prints 2

/* 
* The join() method joins all of the elements in an array into a string and returns
* it.
*/

var arr = ["Dragonfruit", "Tomato", "Persimmon", "Pomello"];
console.log(arr.join()); // prints Dragonfruit,Tomato,Persimmon,Pomello
console.log(arr.join("-")); // prints Dragonfruit-Tomato-Persimmon-Pomello

/* 
* The pop() array method removes or "pops" the last element off of the array, returning
* the removed element.
*/

var arr = ["Dragonfruit", "Tomato", "Persimmon", "Pomello"];
arr.pop(); 
console.log(arr); // prints ["Dragonfruit", "Tomato", "Persimmon"]
 
/* 
* The push() method adds new elements or "pushes" new elements onto the end of 
* an array.
*/

var arr = ["Dragonfruit", "Tomato", "Persimmon", "Pomello"];
arr.push("Kumquat", "Durian");
console.log(arr); //prints [ 'Dragonfruit','Tomato','Persimmon','Pomello','Kumquat','Durian' ]

/* 
* The reverse() array method reverse s the order of the elements in the array
* and returns it.
*/

var arr = ["Dragonfruit", "Tomato", "Persimmon", "Pomello"];
console.log(arr.reverse()); // prints [ 'Pomello', 'Persimmon', 'Tomato', 'Dragonfruit' ]

/* 
* The shift method removes the first element or "shifts" the first element off of
* and array and returns the removed element.
*/

var arr = ["Dragonfruit", "Tomato", "Persimmon", "Pomello"];
arr.shift(); 
console.log(arr); // prints [ 'Tomato', 'Persimmon', 'Pomello' ]

/* 
* The slice() array method selects part of an array and returns a new array.
*/

var arr = ["Dragonfruit", "Tomato", "Persimmon", "Pomello"];
console.log(arr.slice(1, 3)); // returns[ 'Tomato', 'Persimmon' ]

/* 
* The sort() array method sorts the elements of an array.
*/

var arr = ["Dragonfruit", "Tomato", "Persimmon", "Pomello"];
console.log(arr.sort()); // prints [ 'Dragonfruit', 'Persimmon', 'Pomello', 'Tomato' ]
var numArr = [303, 1, 21];
console.log(numArr.sort()); // prints [ 1, 21, 303 ]

/* 
* The unshift() array method adds new specified elements to the beginning of an 
* array.
*/

// 4. Object //
/*
* An object is a a complex data type that is an unordered list of key-value pairs
* contained within curly braces {}. Each key-value pair is referred to as a 
* property. The key of an objects is always a string, but its value pair can be 
* of any data type. When the value in a key-value pair is a function, this is 
* called a method. 
* See example below for the formatting of an object.  
*/

var myCat = {
    name: "Goblin",
    age:  0,
    vocalization: "mew",
    legs: 4, 
    tail: 1,
}

// In order to access the key-value pair in an object, you use dot or bracket 
// notation. 

console.log(myCat.name); // prints Goblin
console.log(myCat["vocalization"]); // prints mew

// To add a key-value pair to an object, use dot or bracket notation.

myCat.eyeColor = "green";
myCat["furColor"] = "grey";

// To delete a key-value pair use the delete operator. 

delete myCat.age;
delete myCat["legs"];

/*
* Objects can also be modified by methods including the following: 
*
* Object.assign()
* Object.create()
* Object.defineProperty()
* Object.defineProperties()
* Object.entries()
* Object.freeze()
* Object.fromEntries()
* Object.getOwnPropertyDescriptor()
* Object.getOwnPropertyDescriptors()
* Object.getOwnPropertyNames()
* Object.getOwnPropertySymbols()
* Object.getPrototypeOf()
* Object.is()
* Object.isExtensible()
* Object.isFrozen()
* Object.isSealed()
* Object.keys()
* Object.preventExtensions()
* Object.seal()
* Object.setPrototypeOf()
* Object.values()
*/

// 5. Function //
/*
* A function is a set of code that performs one or more 
* actions. It may be named or unnamed. A named function is created by using the 
* keyword function followed by the chosen label for the function and parentheses 
* containing the parameters of the functions. A function can have
* as many parameters as you want, including none. Parameters are placeholders 
* within the function that will later be replaces with arguments when the 
* function is executed/invoked/called. When a function is called, it performs the 
* action prescripted in the code block.
*
* See below for an example of named function syntax. 
*
*/

//num 1 and num 2 are arguments
function addNumbers(num1, num2) {  
    console.log(num1 + num2);        
}
addNumbers(1, 2); //here the function is called
                  // the result of calling the function will be 3 printed 
                  // to the console

// 6. undefined //
/*
* Undefined is a primitive data type that is the value of a variable that has 
* not been initialized. The value of the variable is nothing because there isn't 
* anything there. 
*/

var myLife; // The value is undefined. 

// 7. null //

/* 
* Null is similar to undefined in that it represents nothing, but in the case of 
* null, the value being nothing is intentional. In other words, the programmer 
* needs the value of a variable to no longer exist. Despite being nothing, null 
* is actually an object, as the value produced when the typeof operator is used 
* on it is object.   
*/

var myLife = null; // The value of the variable is set to null.
console.log(typeof myLife); // prints object

// 8. NaN //

/*
* NaN is a primitive data type that is the value that is returned when a result
* is literally not a number. One way to obtain the value NaN is to produce a 
* result that is literally not a number (see below). Other instances that produce
* NaN include dividing by zero, dividing infinity by infinity, using NaN as 
* an operand, multiplying infinity by zero, and turning a non-numeric string or 
* undefined into a number.
*
* Ironically due to the name, if the typeof operator is used on NaN, 
* the result is number. Therefore, the method isNaN() is used to determined whether 
* a value is NaN.      
*/

var notNumber = "kumquat" + 7;  
console.log(typeof(notNumber)); // prints number
console.log(isNaN(notNumber)); // prints true

// 9. Infinity and -Infinity

/*
* A floating point number is any number with numbers after the decimal point, 
* whereas an integer is any number without a decimal. Positive infinity is used
* to represent a numeric value that is larger than the upper limit for floating 
* point numbers, which is 1.797693134862315E+308. Negative infinity is used to 
* represent a numeric value that is smaller than the lower limit for floating 
* point numbers which is -1.797693134862316E+308.
*/



/*
* OPERATORS:
*
* There are 7 types of operators used in JavaScript: assignment operators, 
* arithmetic operators, comparison (binary) operators, logical operators, unary 
* operators, conditional (ternary) operators, and String Operators. In short, 
* operators act on data to produce new values. The types of operators are 
* discussed in detail below.
*/

// 0. Assignment Operators //

// Simple Assignment Operator //

/* 
* The simple assignment operator (=) assigns the value to the right of the operator to 
* the variable on the left. Other assignment operators perform a certain action
* on a value and then return a new value.
*/

var a = 7; 
console.log(a) // prints 7

// Addition Assignment Operator //

/* 
* The addition assignment operator (+=) adds the values on either side of the 
* operator and returns the sum as the new value.
*/

var a = 7; 
console.log(a += 3); // prints 10

// Subtraction Assignment Operator //

/*
* The subtraction assignment operator (-=) subtracts the value on the right of 
* the operator from the value on the left of the operator and returns the result
* as a new value.
*/

var a = 7;
console.log(a -= 3); // prints 4

// Multiplication Assignment Operator //

/* 
* The multiplication assignment operator (*=) multiplies the values on either side of 
* the operator and returns the result as a new value.
*/

var a = 7;
console.log(a *= 3); // prints 21

// Division Assignment Operator//

/* 
* The division assignment operator (/=) divides the value on the left of the 
* operator by the value on the right of the operator and returns a new value.
*/

var a = 21;
console.log(a /= 3); // prints 7

//Remainder Assignment Operator//

/* 
* The remainder or modulus assignment operator (%=) divides the value on the 
* left of the operator by the value to the right of the operator and returns the 
* remainder as a new value.
*/

var a = 21;
console.log(a %= 5); // prints 1

/*
* More assignment operators include the left shift assignment operator (<<=), 
* the right shift assignment operator(>>=), the unsigned left shift assignment 
* operator (<<<=), the unsigned right shift assignment operator (>>>=), the 
* bitwise AND assignment operator (&=), bitwise XOR assignment operator (^=), 
* the bitwise OR assignment operator (|=), and the exponential assignment 
* operator(**=).
*/

// 1. Arithmetic Operators //

/* 
* Arithmetic operators take 2 numeric values (can be represented by a variable)
* and return the result of their operands as a new value.
*/


// Addition Arithmetic Operator //

/* 
* The addition arithmetic operator (+) adds two values and returns the sum as a 
* new value.
*/

var a = 7;
var b = 3; 
console.log(a + b); // prints 10

// Subtraction Arithmetic Operator //

/* 
* The subtraction arithmetic operator (-) subtracts the value to the right of the 
* operator from the value to the left of the operator and returns the result as 
* a new value.
*/

var a = 7;
var b = 3; 
console.log(a - b); // prints 4

// Multiplication Arithmetic Operator //

/* 
* The multiplication arithmetic operator (*) multiplies the values on either side of
* the operator and returns the result as a new value.
*/ 

var a = 7;
var b = 3; 
console.log(a * b); // prints 21

// Division Arithmetic Operator //

/*
* The division arithmetic operator (/) divides the value to the left of the 
* operator by the value to the right of the operator and returns the result 
* as a new value.
*/ 

var a = 6;
var b = 3; 
console.log(a / b); // prints 2

// Remainder (Modulus) Arithmetic Operator //

/* 
* The remainder(modulus) arithmetic operator (%) divides the value to the left
* of the operator by the value to the right of the operator and returns the result
* as a new value.
*/
var a = 7;
var b = 3; 
console.log(a % b); // prints 1

// Exponentiation Arithmetic Operator //

/* 
* The exponentiation arithmetic operator (**) takes the value to the left of the 
* operator to the power of the value to the right of the operator and returns the
* result as a new value.
*/

var a = 7;
var b = 3; 
console.log(a ** b); // prints 343 

// Increment Arithmetic Operator //

/* 
* The increment arithmetic operator (++) adds 1 to a value and assigns the new
* value to the variable. Increment will act immediately as a prefex, but it is 
* also useful as a suffix for example in a for loop iterating over an array. In
* the case of i++, the value of i is used and then it is incremented.
*/

var a = 7;
console.log(++a); // prints 8

// Decrement Arithmetic Operator // 

/* 
* The decrement arithmetic operator (--) subtracts 1 from a value and assigns the new
* value to the variable. Decrement will act immediately as a prefex, but it is 
* also useful as a suffix for example in a for loop iterating over an array. In 
* the case of i--, the value of i is used and then it is decremented. 
*/

var a = 7;
console.log(--a); // prints 6

// 2. Comparison (Binary) Operators //

/* 
* Comparison or binary operators are used to compare 2 values (operands) and 
* return a boolean value. Comparison/binary operators can compare the data
* types of numbers and any data type that is coerced to a numerical value.
*/ 

// Equal To Comparison Operator //

/* 
* The equal to comparison operator converts the values on either side of the 
* operator to the same data type (this is called type coercion) and then strictly 
* compares the two values. Since type coercion takes place, the equal to comparison
* operator can be viewed as a loose comparison tool.
*/

var a = 3;
var b = "3"; 
console.log(a == b); // prints true 

// Strictly Equal To Comparison Operator //

/* 
* The strictly equal to comparison operator (===) does NOT allow type coercion to be 
* performed on compared values. Therefore the value and the data type must both 
* be strictly equal in order to result in a boolean true. When testing equality 
* it will in 99% of cases behoove you to use strict comparison. 
*/

var a = 7;
var b = 7;
var c = "7";
console.log(a === b); // prints true
console.log(b === c); // prints false

// Not Equal To Comparison Operator //

/* 
* The not equal  comparison operator (!=)is a loose comparison operator in that type 
* coercion is performed on values before strict comparison. After type coercion,
* if the values are not equal to each other, the boolean true value will be 
* returned.
*/

var a = 9;
var b = "9";
console.log(a != b); // prints false

// Strictly Not Equal To Comparison Operator //

/* 
* The strictly not equal comparison operator (!==) does NOT perform type 
* coercion before it compares 2 operands. Therefore, values must be strictly 
* not equal to produce a boolean true. 
*/

var a = 9;
var b = "9";
console.log(a !== b); // prints true

// Greater Than Comparison Operator //

/* 
* The greater than comparison operator (>) will return a boolean true if the 
* first operand is greater than the second operand. Otherwise, it will return
* false.
*/

var a = 7;
var b = 3;
console.log(a > b); // prints true
console.log(b > a); // prints false

// Less Than Comparison Operator //

/*
* The less than comparison operator (<) will return a boolean true if the 
* first operand is less than the second operand. Otherwise, it will return
* false.
*/

var a = 7;
var b = 3;
console.log(a < b); // prints false
console.log(b < a); // prints true

// Greater Than Or Equal To Comparison Operator //

/* 
* The greater than or equal to comparison operator (>=) will evaluate to a boolean 
* true if the first operand is greater than or equal to the second operand. 
* Otherwise, it will evaluate to false.
*/

var a = 7;
var b = 3;
var c = 7; 
console.log(a >= b); // prints true
console.log(b >= a); // prints false
console.log(a >= c); // print true

// Less Than Or Equal To Comparison Operator //

/* 
* The less than or equal to comparison operator (<=) will evaluate to a boolean 
* true if the first operand is less than  or equal to the second operand. 
* Otherwise, it will evaluate to false.
*/

var a = 7;
var b = 3;
var c = 7; 
console.log(a <= b); // prints false
console.log(b <= a); // prints true
console.log(a <= c); // print true

// 3. Logical Operators //

/* Logical operators are used to join two conditions (in the case of logical 
* and (&&) and logical or (||)) or to negate a condition (as in the case of the 
* bang/not logical operator(!)). Statements utilizing logical operators typically
* return a boolean value.  
*/

// Logical And Operator //

/* 
* The logical and operator (&&) cane be used to combine conditions and requires 
* all conditions to be met to return a boolean true. && can also be used to join
* functions for control flow. 
*/ 

var a = 7;
var b = 3; 
var c = 16;
console.log(a > b && a < c); // prints true

//Logical Or Operator//

/* 
* The logical or operator (||) joins conditions and requires one of the conditions
* to be met to return a boolean true.
*/

var a = 7;
var b = 25;
var c = 1;
console.log(a < c || b > a); // returns true 

//Logical Not (Bang) Operator//

/* 
* The logical not/bang operator (!) can be thought of as translating to "not" or 
* "opposite of." This is a unary and operator that negates and returns the opposite 
* boolean value of a condition.
*/

var a = 7;
var b = 10;
console.log(!(b > a)); // prints false 


// 4. Unary Operators //

/* 
* A unary operator takes a single operand and performs an operation. Unary 
* operators in JavaScript include typeof, delete, void, in, and instanceof. 
*/ 

// typeof Unary Operator //

/* 
* The typeof unary operator acts upon a variable and returns the data type of 
* the variable as a result. As noted in the data types section, the results of 
* the typeof operator may be misleading or counterintuitive, and additional 
* methods, functions, or comparisons may be necessary to parse out the exact 
* data type definition. For example, the following values will all indicate
* object when typeof is used: date, null, array, object.   
*/ 

var a = 78;
console.log(typeof a); // prints number

var b = "kumquat"; 
console.log(typeof b); // prints string

// delete Unary Operator //

/* 
* The delete unary operator deletes a specific index of an array or a specific
* property of an object. 
*/

var myCat = {
    name: "Goblin",
    age:  0,
    vocalization: "mew",
    legs: 4, 
    tail: 1,
}

delete myCat.age;
delete myCat["legs"];

// 5. Conditional (Ternary) Operators //

/* 
* A conditional or ternary operator is a type of operator used in JavaScript that
* is often used as a shorthand way to write a simple conditional if statement and 
* that takes 3 operands: the condition, an expression to execute if the condition 
* evaluates to a boolean true, and an expression to execute if the condition 
* evaluates to a boolean false. Similar to conditional statements, the statements
* created with conditional/ternary operators can be nested. The syntax for a 
* conditional/ternary operator can be seen in the example below. 
*/

var fruit = "persimmon";
console.log((typeof fruit === "string") ? "String!" : "Not a String!"); // prints String!

// 6. String Operators //

/* 
* In order to combine strings and result in a new string, the concatenation 
* string operator (+) is used.
*/

var firstName = "Rachel"; 
var lastName = "Andersen";
console.log(firstName + " " + lastName); // prints Rachel Andersen

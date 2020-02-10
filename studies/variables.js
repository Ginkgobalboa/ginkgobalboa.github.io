/*
* VARIABLES:
*
// 0. Variable Introduction // 
/* 
* In order to hold things in memory across the duration of a program, we can use 
* variables. Variables are named identifiers that serve as containers that can 
* either hold primitive types of data (e.g. string, a number, a boolean, NaN, 
* undefined, or null) or hold the reference to complex data types (e.g. an object, 
* an array, or a function). 
* (see Data Types section below for full discussion of all data types).    
* The variable's value can be referenced later in the program by using its name 
* or label.  
* 
* There are two steps to creating an variable: 
*
* 1) declaration and 2) initialization/assignment (discussed below) After a 
* variable is declared with var or let and initialized/assigned, it can undergo 
* reassignment at any time. Variables initialized with const cannot be  
* reassigned.
*/

// 1. Declaration of a Variable // 

/*
* A variable is created by first using a keyword (var, let, or const) followed 
* by a space and the label for the variable (the id). 
*
*/

var myCatName; // Here the keyword var and the label myName is used to declare 
               // the variable that will hence be referred to as myCatName.

/*
* 
* At the declaration phase, the variable myName is undefined because we have NOT 
* initialized it to anything; the variable is literally, at this stage, undefined.
*
*/

console.log(myCatName); // prints => undefined

// 2. Initialization or Assignment of a Variable // 

/* 
* A variable is initialized/assigned by using the = assignment operator to set 
* the value of the variable. Variables created using the keyword var or let are 
* optionally initialized.
*
* Variables created using the keyword const are obligated to be initialized/
* assigned a value. In other words, you cannot only simply declare a constant. 
* 
*/

myCatName = "Goblin";   // Here the declared variable myName is initialized/assigned 
                                        // to the string value of "Goblin"
console.log(myCatName); // prints => Goblin

// 3. Re-Assignment of a Variable // 

/*
* 
* Once a variable is declared using var or let and initialized, the variable's 
* value can be changed through reassignment. Constants, however, may not be 
* reassigned. 
*
*/

myCatName = "Yuko"; // re-assignment of variable
console.log(myCatName); // prints => Yuko

var myVar = 1;
var myVar = [1, 2, 3, 4];
myVar = "kumquat";
console.log(myVar); // prints => kumquat

// 4.  Formulating Labels for Variables//   
/*
* 
* When assigning names to variables, lets, and constants, any alphanumeric 
* character as well as an underscore(_) may be used, as long as the following 
* rules are followed:
* - The label must start with a letter or an underscore. 
* - An label cannot begin with a number. 
* - Subsequent characters may be any letter, number, or an underscore.
* Something important to remember when assigning alises is that it is helpful 
* for the coder as well as for other people who may read your code to assign 
* meaningful alises to your variables, constants, or lets. 
* 
* When formulating the label for a variable or a let, the accepted standard or 
* convention for formatting 
* the capitalization of variables is called camel case. In camel case, the first 
* word or abbreviation in a variable is always lower case, while the first letter 
* of every subsequent word or abbreviation is capitalized.
*   
* When formulating the label for a constant, the convention is to use all 
* capital letters, numbers, and underscores.
*/

var cat;
var myCat;
var myGreyCat;
var variablesCanBeAsLongAsYouWant123_;
const MY_CATS_NAME = "Goblin";
    
// 5. Reserved Keywords //
/*
* There is a set of words that cannot be used as a label for variables as 
* they are instrumental in the JavaScript interpreter being able to correctly 
* interpret the code. This set of words includes var, const, let, for, in, while, 
* and function.
*/
// 6. Let //
/*
* A let is a type of variable declared with the keyword let. After the let is 
* declared, it can be optionally initialized. Lets are only intended for use 
* within block scope, making a let a block scope local variable. 
* (Scope will be discussed in more detail in the Scope section below.) 
*
*/
// 7. Constants //
/*
* Constants are a type of variable declared with the keyword const and 
* obligatorily initialized to a value at the point of inception. Constants
* are block scoped local variables.
*
*/
// 8. Scope & Hoisting //
/*
* Scope can be defined as the area of the code in which a variable is accessible.
* Variables created outside of a function have global scope. A variable created 
* within a function has local scope, while conditionals and loops have block scope. 
* Variables created in parent scopes can be utilized in a child scope, but variables created 
* in a child scope cannot be utilized in a parent scope. 
* 
*
*                           Scope
*            ___________________________________
*           |	                                |
*           |    Global (global scope)      	|
*           | 	________________________________|
*           |	|	                         	|
*           |   |   Function (local scope)      |
*           |	|       ________________________|
*           |	|       |	                    |	
*           |  	|       |   Conditionals    	|
*           |	|       |  (block scope)        |
*           |	|       |	                    |
*           |	|       |_______________________|
*           |	|_______________________________|
*           |	|                               |
*           |   |   Loop (block scope)	        |
*           |   |_______________________________|
*           |___________________________________|
*
* Hoisting is the process by which a variable is "lifted up" to the top of the 
* script. A variable that is hoisted can be utilized globally in code before the 
* line where it is created. A variable declared with the keyword var in the global
* or local scope is hoisted. Variables created with const or let cannot be 
* hoisted and can only exist within block scope. Functions can also be hoisted.
* Variables declared without a keyword are automatically hoisted.
* 
* The example below will further illustrate this concept. 
*
*/

var myArray = [1, 2, 3, 4] // This variable has global scope and is used within 
                           // the function below.

function loopThroughArray() {
    // newArray is a local scope variable because it can only be utilized or 
    // modified within the function
    var newArray = [];
    // i is a local scope variable because it can only be utilized within 
    // the function
    for (let i = 0; i <= myArray.length - 1; i++) {
        if(myArray[i] % 2 === 0) {
            // The variable newArray is utilized within the child scope
            newArray.push("even"); 
        } else {
            newArray.push("odd");
        }        
    }
    console.log(newArray);
}
loopThroughArray();







                        
        

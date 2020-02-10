/*
* FUNCTIONS:
*
* A named function is a named set of reusable code that performs one or more 
* actions and is saved until later use (until time of invokation). 
* Functions can also be anonymous or unnamed. In this case they are either 
* immediately invoked or they are called using the variable label in the case of 
* function expressions.
*/

// Named Function Creation & Execution Phases //
/* 
* A named function is created by using the keyword function followed by 
* the chosen label or name for the function followed by a set of parentheses. 
* Function labels can be comprised of letters, numbers, underscores, and dollar 
* signs.
* 
* The parentheses after the function's label optionally contain the 
* parameters of the functions which are placeholders within the function that 
* will later be given values(called arguments) in the execution phase (when the 
* function is called/invoked/executed). Parameters within the parentheses are 
* separated by comma and the use of parameters is how we specifly inputs to a 
* function. When creating a function, it is important to label your parameters 
* in a meaningful way. For example, if a parameter is always going to be an object,
* simply label it as such. A function can have as many parameters as you want, 
* including none. After the parentheses, there is a set of curly braces containing 
* the block of code to be executed by the function. The code block is used to 
* spefify the output of the function or what the function "does" or produces.
* 
* In order to enter the execution phase, a function must be executed/invoked/called. 
* A function is called by writing its label followed by a set of parentheses 
* and containing the arguments (actual values put in place of the the previously 
* establised parameters) if the function has any parameters. This is followed by 
* a semicolon. When a function is called, it passes the arguments (if present) 
* into the function and performs the action or actions prescripted in the code 
* block. 
* 
* See below for an example of the syntax for a named function.
* 
*/

var myArray = [];
function addToArray(element) {  // Here the 
    myArray.push(element);      // function is    Declaration Phase
}                               // created. 

addToArray(7);        // here the function is called  Execution Phase
console.log(myArray); // prints [ 7 ]

// Function Expressions //
/*
* When a function is assigned to a variable, this is called a function expression. 
* A function expression is created by using the var keyword followed by a variable 
* label and the assignment operator. After the assignment operator, the keyword function
* is used followed by parentheses that bind parameters. This is followed by 
* curly braces containing a code block for the function to execute. The function
* in a function expression is an unnamed/anonymous function. The variable's name 
* can then be used as a function. With function expressions, only the variable 
* name is hoisted to the top of the script. The function itself is NOT hoisted 
* and if you attempt to call the function before the line at which it occurs, the 
* JavaScript interpreter will return a type error. 
*
* Below is a an example showing the syntax for a function expression.
*/

var subtract = function(num1, num2) {
    return num1 - num2;
}

console.log(subtract(7, 3)); // prints 4

// Function Scope //

/* 
* Previously discussed in the section discussing variables, variables created
* within a function have local scope. The function can utilize any variable
* greated within its parent global scope, but the variables created within the 
* function cannot be utilized or accessed outside of the function. If a function
* is created within a function (as in the case of a closure), the child or inner 
* funtion has access to variables created in the outer or parent function, but 
* the inverse case is not true. 
* 
*
*                           Scope
*            ___________________________________
*           |	                                  |
*           |    Global (global scope)      	  |
*           | 	________________________________|
*           |	  |	                         	    |
*           |   |   Function (local scope)      |
*           |	  |       ________________________|
*           |	  |       |	                      |	
*           |  	|       |   Conditionals    	  |
*           |	  |       |  (block scope)        |
*           |	  |       |	                      |
*           |	  |       |_______________________|
*           |	  |_______________________________|
*           |	  |                               |
*           |   |   Loop (block scope)	        |
*           |   |_______________________________|
*           |___________________________________|
*
*/

// Closures //
/* 
* A closure is a function encapsulated in another function that has access
* to the outer function's variables. When considering closures, it is important 
* to keep the rules of scope in mind. The inner function has access to the variables
* created within its scope, the variables created within its parent function's
* scope, as well as the variables within the global scope. In addition to access 
* to the outer function's variables, the inner function can also utilize the outer 
* function's parameters. The inner function can still use the outer parent 
* function's parameters even after the function has been executed. The inner or 
* child function can therefore be called independently of the parent function 
* later in the program. The variables are thusly kept "alive." 
* One use of closures to to make global variables private or "hidden."
*/

function makeAdd(num1) {
  return function(num2){
    return num1 + num2; // Here the inner unnamed function is using a parameter 
                        //from its parent function (makeAdd)
  }
}

var add10 = makeAdd(10);
add10(7); // returns 17




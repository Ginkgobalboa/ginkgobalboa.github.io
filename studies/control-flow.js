/* 
* CONTROL FLOW:
* 
* The term control flow in JavaScript refers to the order in which code is 
* executed by the JavaScript interpreter. Code is run from top to bottom except 
* for when certain constructs such as a loop, a conditional statement, or a switch
* statement is encountered. Loops will be discussed separately in another section, but 
* conditional statements and switch statements are addressed below.
*/

// Conditional Statements //

/*
* Conditional statements are one the the structures that the JavaScript can 
* encounter that alters the JavaScript interpreter's trajectory in that once a 
* condition evaluates to a boolean true, the rest of the provided conditions (if
* any) are essentially overlooked by the JavaScript interpreter. Conditional 
* statements can be chained together and used to make decisions in code by presenting a 
* condition that evaluates to a boolean and then running a block of code if the 
* boolean is true. If the first condition presented evaluates to false, the 
* JavaScript interpreter will move to the next condition 
* in the code and evaluate it. 
*
* There are 3 types of conditional statements: if, else-if, and else statements.
* Switch statements can also be used in place of an if/else-if chain.
*/

// If Statements //

/*
* If statements are created using the keyword if, followed by a condition 
* bound by parentheses, followed by curly braces delineating the code to run
* if the condition in the parentheses evaluates to a boolean true. There is only 
* one if statement and if statements are are always the first statement in 
* chained if/else-if statements, but they can stand alone. 
*/

var color = "teal";
if (color === "teal") {                             // evaluates to true
    console.log("The color is teal! How pretty!"); // prints The color is teal! How pretty! 
}

// Else-If Statements //

/* 
* Else if statements can be chained to an if statement in order to provide 
* additional conditions that, if the initial if statement evaluated to false and
* if the subsequent else-if statement evaluates to true, the code block below 
* the else-if statement will be executed. If the else-if condition evaluates to 
* false, then the JavaScript interpreter moves on to the next else-if statement.
* See below for else-if statement syntax and formatting.
*/

var color = "puce";
if (color === "teal") {             // evaluates to false
    console.log("The color is teal! How pretty!")   
} else if (color === "magenta") {   // evaluates to false
    console.log("The color is magenta! Pretty in pink!") 
} else if (color === "puce") {      // evaluates to true
    console.log("The color is puce! This color is meh.") // prints The color is puce! This color is meh.
}

// Else Statements //

/* 
* Else statements occur last in a conditional statement chain. It can occur 
* directly after the if statement or it can occur after a series of else-if 
* statements, but it is always last.  It functions as a catch all in that it 
* provides a block of code to execute if none of the provided conditions are met.
*/

var color = "crimson";
if (color === "teal") {             // evaluates to false
    console.log("The color is teal! How pretty!")   
} else if (color === "magenta") {   // evaluates to false
    console.log("The color is magenta! Pretty in pink!") 
} else if (color === "puce") {      // evaluates to false
    console.log("The color is puce! This color is meh.")
} else if (color === "vermillion") { // evaluates to false
    console.log("The color is vermillion! Mmmm orangey red!");
} else {
    console.log("The program isn't familiar with this color!") //prints The program isn't familiar with this color!
}

// Switch Statements //

/*
* Switch statements are an alternate method of writing a chain of conditional 
* statements. In a chain where there are many conditions, using a switch 
* statement can be more streamlined in terms of legibility. Like a conditional 
* statement, the JavaScript interpreter goes through each case from top to bottom
* until it finds a case that is true.The default in a switch statement
* serves as a catch all like an else statement that provides code to run if none 
* of the cases are true. Below the if/else-if/else chain above is converted into 
* a switch statement. 
*/


var color = "crimson";
switch(color) {
    case "teal":                        
        console.log("The color is teal! How pretty!");
        break;
    case "magenta":                     
        console.log("The color is magenta! Pretty in pink!");
        break;
    case "puce":                        
        console.log("The color is puce! This color is meh.")
        break;
    case "vermillion":                  
        console.log("The color is vermillion! Mmmm orangey red!");
        break;
    default:
        console.log("The program isn't familiar with this color!");
}  

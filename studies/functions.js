/**
 * FUNCTIONS
 * 
 * 0: 
 * 
 * 1: Two phases to using functions: First we must declare the function. 
 * 
 * Next we can execute (or initialize or call) a function by passing in arguments.
 * 
 * 2: Parameters vs. arguments: A paramater is the variable that a function operates on. It does not have a specific value.
 * An argument is the specific value that is passed in to the function when the function is invoked.
 
 * 3: Syntax of a named functions: The basic function declaration syntax is:
 * function functionName(parameters){
 *  [function body]
 * };
 * 
 * 4: Assigning a function to a variable: The syntax for assigning a function to a variables is:
 * var varName = function(parameters{
 * [function body]
 * }
 * ----------------------------------
 * 5: Inputs and outputs: Inputs are defined by the parameters that the function takes in. How to specify inputs and outputs. Functions can optionally take inputs and optionally return a single value. 
 * 
 * 6: Scope: "Functions can see and modify variables in parent or global scopes. The inverse is not true ... ___"
 * 
 * 7: Closures: "Functions form closures around the data they house. If an object returned from the Functions is held in memory somewhere (referenced),
 * that closure stays ALIVE and data can continue to exist in these closures "" 
 * 
 * 
 */

//1// Function declaration 
function addFive(number){ //a basic function declaration for a function called addFive that takes one argument
    return number + 5 //the body of the function is what the function does, in this case it adds five to the passed in number
} 
//function invocation 
addFive(5) 

//2// Parameters vs. arguments
function addFive(number) //number is a parameter
addFive(5) //5 is an argument

//3//Named function syntax
function addFive(number){
    number + 5
}
//4//Assigning a function to a variable
var addFive = function(number){
    number + 5
}
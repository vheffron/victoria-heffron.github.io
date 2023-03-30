/**
 * FUNCTIONS
 * 
 * 0: Functions are the basic building blocks of Javascript. They complete a task by taking an input and (optionally) 
 * producing an output

 * 
 * 1: Two phases to using functions: First we must declare the function through specific syntax, cover below. After declaring
 * the function, we can execute (or invoke or call) the function by passing in arguments.
 * 
 * 2: Parameters vs. arguments: A parameter is the variable that a function operates on. It does not have a specific value,
 * but rather acts like a placeholder for future values that will be passed in. An argument is s specific value 
 * that is passed in to the function when the function is invoked.
 
 * 3: Syntax of a named functions: The basic function declaration syntax is:
 * function functionName(parameters){
 *  [function body]
 * };
 * 
 * 4: Assigning a function to a variable: The syntax for assigning a function to a variables is:
 * var varName = function(parameters{
 * [function body]
 * }

 * 5: Inputs and outputs: Inputs are defined by the parameters that the function takes in. Outputs are what,
 * if anything, the function returns.
 * 
 * 6: Scope: "Functions can see and modify variables in parent or global scopes. The inverse is not true, i.e. other code
 * cannot necessarily access all variables that exist within a function.
 * 
 * 7: Closures: Functions can create closures for the data that they contain. The value returned from the function can be held in memory 
 * and therefore can continue to exist. In other words, a closure is a function that has access to the parent scope, even after the parent 
 * function has closed.
 * 
 */

//1// Function declaration 
function addFive(number){ //a basic function declaration for a function called addFive that takes one argument
    return number + 5 //the body of the function is what the function does, in this case it adds five to the passed in number
} 

//2// Parameters vs. arguments
function addFive(number) //number is a parameter
addFive(5) //5 is an argument

//3//Named function syntax
function addFive(number){
    return number + 5
}
//4//Assigning a function to a variable
var addFive = function(number){
    return number + 5
}

//5//Inputs and outputs
var addValueToArray = function(value, array){ //this function takes two inputs, a value and an array 
    return array.push(value) //this function returns an array with the input value added to it 
}

//6//Scope 
let value = 5 //this variable is globally scoped and is therefore available in the function below 

function subtractValue(number) {
    let result = number - value //the value of 5, as defined above, is available within this function
}
//however, the new variable 'result' that we have defined inside of this function, is not available outside of this function

//7//Closures 
var add = (function () {
    let counter = 0
    return function () {
        counter += 1
        return counter}
  })()
  add()//because the function above returns the function within itself, it can hold on to the value of counter. Therefore,
  //although counter is defined inside of a functin, its value is available once more when we invoke add. 
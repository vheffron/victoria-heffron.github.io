/**
 * VARIABLES:
 * 
 * 0: Variables traditonally thought of as containers for values. Alternately, they can be thought of something more like 
 * octopus tentacles that point at certain values. This metaphor allows us to think of variables as something that can be 
 * redefined (the tentacle can stop pointing at one value andm move to point at another value) and shows that multiple variables
 * can be pointed at the same value. 
 * 
 * 1: Declaration and assignment: to create a variable in JavaScript, it is best practice to first declare the variable using 
 * one of the three declarative keywords: var, let, or const. Once declared, you can then assign the variable a 
 * value.
 * 
 * 2: Var, let, and const: The three variable declaration keywords have various uses and benefits. Var, the original variable declaration
 * keyword, was the only option until ES6, when let and const were introduced to address some of var's limitations. Const is unique in
 * that it cannot be redeclared. Additionally, the three keywords vary in their behaviors with respect to scope and hoisting, discussed below. 
 *      Scope: Scope determines where variables are accessible. There are three different scopes: 
 *      -block scope (variable is accessible only in the current code block), 
 *      -function scope (variable is accessible only in the current function), and
 *      -global scope (variable is accessible everywhere)
 *  
 * All three declaration keywords can be accessed globally when declared outside of a code block. All three variables are also function
 * scoped, meaning that when they are declared inside a function, they can only be accessed inside that function. Let and const are block 
 * scoped, meaning that when they are declared inside a code block, they are accessible only within that code block. Var is not block 
 * scoped, so it can be accessed globally even when declared inside of a code block. 
 * 
 * 
 * 3: Hoisting: variable declarations are hoisted to the top of the code. Therefore, a variable can be declared "after" it is used. Variable 
 * initializations are not hoisted. Let and const, however, cannot be used before they are declared. 
 * 
 */

//1// Declaration and Assignment 
var age; //variable age declared
age = 35 // variable assigned value of 35
age = 34 //redefining value 


//2// Var, let, and const
let firstName = 'Victorai' //let is declared like var
firstName = 'Victoria' //like var, a variable declared with let can be redefined 
const lastName = 'Heffron' //const is also declared the same way, but unlike var and let, it cannot be redefined

//(Scope) 
function fullName(){
    console.log(firstName + ' ' +lastName)//firstName and lastName were declared globally above, so they are available within this function 
}

function fullNameTwo(){
    let firstNameTwo = 'Steve' //let is block scoped and function scoped, so we can only use this variable within this function
    const lastNameTwo = 'Price' 
    console.log(firstNameTwo + ' ' + lastNameTwo)
}
//we cannot access firstNameTwo and lastNameTwo in another function, because they are function scoped inside of fullNameTwo

if (a > 3){
    let string = 'block scoped';
  }

  console.log(string) //prints error because let is block scoped an therefore is not available outside of the if statement 

//3// Hoisting 
console.log(varMessage)
var varMessage = 'this will not print, but it will not throw an error either' //these two lines will result in "undefined" printing to the 
//console. No error is thrown, because the declaration is "hoisted" above the console.log line, but the variable is not defined until after the console.log line.

console.log(letMessage)
let letMessage = 'this will throw an error' //this results in a reference error because let variables cannot be used before they are initialized

console.log(constMessage)
const constMessage = 'same with const' //like with let above, this also results in a reference error 
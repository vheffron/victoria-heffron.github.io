/**
 * VARIABLES:
 * 
 * 0: Variables traditonally thought of as containers for values. Alternately, they can be thought of something more like 
 * octopus tentacles that point at certain values. This metaphor allows us to think of variables as something that can be 
 * redefined (the tentacle can stop pointing at one value andm move to point at another value) and shows that multiple variables
 * can be pointed at the same value. 
 * 
 * 1: Declaration and assignment: to create a variable in JavaScript, it is best practice to first declare the variable using 
 * one of the three declarative keywords: var, let, or const. once declared, you can then assign the variable a 
 * value.
 * 
 * 2. Var, let, and const: The three variable declaration keywords have various uses and benefits. Var, the original variable declaration
 * keyword, was the only option until ES6, when let and const were introduced to address some of var's limitations. Const is unique in
 * that it cannot be redeclared. Additionally, the three keywords vary in their behaviors with respect to scope and hoisting, discussed in
 * the next two items below. 
 * 
 * 3. Scope: Scope determines where variables are accessible. There are three different scopes: 
 *      -block scope (variable is accessible only in the current code block), 
 *      -function scope (variable is accessible only in the current function), and
 *      -global scope (variable is accessible everywhere)
 *  
 * All three declaration keywords are globally scoped when declared outside of a code block. When declared inside a code block, let and 
 * const are block scoped, while var is globally scoped even when declared inside of a code block. 
 * 
 * 
 * 4. Hoisting: 
 * 
 */

//1// Declaration and Assignment 
var age; //variable age declared
age = 35 // variable assigned value of 35


//2// Var, let, and const



//3//Hoisting 
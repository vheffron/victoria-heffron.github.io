/**
 * DATATYPES
 * 
 * 0: Datatypes are the categories that various values fall into. Different datatypes have different properties.
 * Below is a list of data types in JavaScript, explanations of their respective characteristics, as well as explanations of 
 * how the various datatypes behave when copied. 
 * 
 * 1: Number: Numbers are simply numbers. They can be positive, negative, or 0. JS can perform a multitude of arithmetic and mathematical operations
 * on numbers.
 * 
 * 2: String: A string is any text wrapped by '' or "". Strings have a length property and are indexed. These characteristics mean that strings
 *  can be manipulated. But strings are immutable, ie unchangeable, meaning that any string manipulation returns a new string rather than modifying
 * the original string 
 * 
 * 3: Boolean: There are two Boolean values: true and false. These represent the logical outcome of conditional operations like if statements. 
 * Booleans also represent whether a given statement is "truthy" or "falsy."
 * 
 * 4: Array: Arrays are complex datatypes that store data as indexed lists. They also have a length property. Beause of this, there are a variety 
 * of methods that can be performed on them to manipulate then. They can be looped over, allowing us to perform an action on every item in the 
 * array. They are mutable, meaning they can be changed destructively. 
 * 
 * 5: Object: Objects are the other complex data type, which store data as key/value pairs called properties. Referencing the object name and key name 
 * allows us to add more values using dot notation or bracket notation.
 * 
 * 6: Function: A function is not strictly a datatype, but rather is an object and is therefore a complex datatype. 
 * 
 * 7: undefined: undefined is a dataype comprised of one value: undefined. It represents the absence of any value. 
 * 
 * 8: null: null is a datatype comprised of one value: null. It is an object that represents the absence of an object.
 * 
 * 9: NaN: NaN stands for Not a Number, and is the result of impossible arithmetic operations. 
 * 
 * 10: Infinity and -Infinity: Represent numbers outside of the defined range that JS can handle. Infinity is greater than any other number and negative infinity 
 * is less than any other number. 
 * 
 * 11: Difference between primitive and complex data types: Arrays and objects (and functions) are complex datatypes; the rest of the datatypes are primitive. 
 * The complex datatypes are mutable and are copied by reference. The primitive datatypes are immutable and are copied by value. 
 * 
 * 12: Copy by value (primitive)/Copy by reference (complex): Pimitive datatypes are copied by value while complex datatypes are copied by reference. 
 * A variable represents a reference to a value and not the value itself. But for primitive datatypes, the value of a variable is stored within the variable. 
 * See code example below for further explanation. 
 * 
 *
 */
  
 //1// Number
 var a = 27;
 var b = 23;
 console.log(a + b); // => 60; prints the value of a plus the value of b, a basic arithmetic operation on two numbers
 
 //2// String
 var stringOne = 'This is a string';
 var stringTwo = 'and it can be manipulated';
 console.log(stringOne + ' ' + stringTwo); // prints 'This is a string and it can be manipulated'
 console.log(stringOne[1]); // prints 'h', the character at the first index of stringOne
  
 //3// Boolean
 console.log(1 + 1 === 2); //prints true after evaluating the logic of the statement 
 console.log(2 + 3 === 6); //prints false

 //4// Array
 let colors = [red, orange, yellow, blue, green];
 colors.push(indigo); //uses an array method to add indigo to the end of the array, changing the array 
 console.log(colors[2]);//prints yellow, the color at the second index
 
 //5// Object
 let stateCapitals = {Alabama: 'Montgomery', Alaska: 'Juneau'} //an object in which the keys are states and the values are the state's capitals
 stateCapitals.Arizona = 'Phoenix' //uses dot notation to define a new property and add it to the object, changing the object 
 stateCapitals['Arkansas'] = 'Little Rock' //uses bracket notation to define a new property and add it to the object, changing the object
 console.log(stateCapitals.Alabama)//uses dot notation to find the value of the capital attached to the Alabama property; prints Montgomery 
 
 //6// Function
 function checkLetters(letterOne, letterTwo){
    if (letterOne === letterTwo){
        console.log ('These letters are the same')
    } console.log('These letters are different')
 }

 checkLetters(a, a) //calls the function, returns 'These letters are the same'
 checkLetters(a, b)//calls the function, returns 'These letters are different'
  
 //7// undefined
 var x 
 console.log(x) //will print undefined, because var x has not been assigned to a value
  
 //8// null 
 var x = null //null is a literal that can be assigned to a variable
  
 //9// NaN
 isNaN('hello') // returns true 
  
 //10// Infinity and -Infinity 
 100/-0 //returns -Infinity
 100/0 //returns Infinity 
  
 //11// Primitive/Complex
 var a = 5 //this is a primitive datatype
 var object = {a: 1, b: 2} //this is a complex datatype
  
 //12// Copy by Value/Copy by Reference 
 //copy by value
 var a = 7
 var b = a //the value of a is copied to b, so b now also equals 7
 var b = 2 //b can be redefined without changing the value of a 

//copy by reference 
var a = [1, 2, 3, 4]
var b = a //var b now points to the same object that a points to 
b.push(5) //this changes the array that both a and b point to 
console.log(a) //prints [1, 2, 3, 4, 5] because the array that b points to is the same one that a points to  
 


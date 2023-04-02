/**
 * OPERATORS
 * 
 * 0: 
 * 
 * 
 * 1: Assignment operators: 
 *   = Simple assignment assignment: defines a variable
 *  += Addition assignment: adds a value to the variable
 *  -= Subtraction assignment: subtracts a value from a variable
 *  *= Multiplication assignment: multiplies a variable by a value
 *  /= Division assignment: divides a variable by a value 
 *  %= Remainder assignment: assigns a remainder to a variable; the remainder is the result after dividing the variable by some value 
 * **= Exponentiation assignment: raises a variable to the power of a value
 * 
 * 
 * 2: Arithmetic operators: 
 *   + Addition: adds two values 
 *   - Subtraction: subtracts one value from another 
 *   * Multiplication: multiplies two values
 *  ** Exponentiation: raises one value to the power of the other
 *   / Division: divides one value by another
 *   % Modulus/Remainder: returns the remainder that results from dividing two values 
 *  ++ Increment: adds one to a value
 *  -- Decrement: subtracts one from a value 
 * 
 * 
 * 3. Comparison operators: 
 *  == equal to: evaluates whether two values have the same value 
 * === deeply equal to: evaluates whether two values have the same value and the same type
 *  != not equal: evaluates whether two values are not equal to each other
 * !== not equal value or not equal type: evaluates whether two values have the same value and the same type
 *   > greater than: evaluates whether one value is greater than another
 *   < less than: evaluates whether one value is less than another 
 *  >= greater than or equal to: evaluates whether one value is greater than or equal to another
 *  <= less than or equal to: evaluates whether one value is less than or equal to another 
 * 
 * 
 * 4: Logical operators: 
 *  && and: evaluates whether two conditions are both true 
 *  || or: evaluates whether one of two conditions is true 
 *
 * 
 * 5: Unary operators: (!, typeOf, -)
 *   ! not: negates a logical outcome; ie converts true to false or false to true 
 *  typeOf: returns a string that represents an operands data type. The possible results are undefined, null, boolean, number,
 *      string, function, and object. 
 *   - minus: makes a value negative 
 * 
 * 
 * 6: Ternary operator 
 *   (a ? b : c) Conditional operator: assigns a value to a variable based on some condition, can sometimes be used in place of an if statemnt
 *      (condition ? expression to execute if truthy : expression to execute if falsey)
 * 
 */


//1// Assignment operators 

// simple assignment assignment operator
var z = 5 // assigns variable z the value of 5

// addition assignment operator
z += 7 //adds 7 to variable z; z = 12 

// subtraction assignment operator
z -= 3 //subtracts 3 from variable z; z = 9

// multiplication assignment operator
z *= 2 //multiplies variable z by 2; z = 18

// division assignment operator: 
z /= 3 //divides variable z by 3; z = 6

// remainder assignment operator
z %= 2 //divides the variable z by 2, finds the remainders, then assigns the remainder value to z; z = 3


//2// Arithmetic operators
var x = 14
var y = 7
//addition
var xAndY = x + y // = 21

//subtraction
var xMinusY = x - y // = 7

//multiplication
var xTimesY = x * y // = 98

//exponentiation
var xToTheY = x ** y // = 105413504

//division
var xDividedByY = x / y // = 2

//modulus/remainder
var remainderXDividedByY = x % y // = 0

//increment
var xPlusOne = x++ // = 2

//decrement
var yMinusOne = y-- // = 13


//3// Comparison operators 
var a = 5
var b = '5'
var c = 7
 
//equal to
a == b //true; 5 has the same value as '5'

//deeply equal to 
a === b //false; 5 has the same value as but different type than '5' 

//not equal
a != c //true, 5 does not equal 7

//not equal value or not equal type
a !== b //true, 5 equals '5' in value but not in type

//greater than
c > a //true; 7 is greater than 5

//less than 
c < a //false; 7 is not less than 5

//greater than or equal to 
a + 2 >= c //true; 5 + 2 is greater than or equal to 7

//less than or equal to 
a <= c // true; 5 is less than or equal to 7 


//4// Logical operators
let d = 4 
let e = 5
let f = 6

//and
d < f && e < f //true; 4 is less than 6 and 5 is less than 6 
e < f && f < d //false, 5 is less than 6 but 6 is not less than 4

//or
f < e || d < e //true; 6 is not less than 5 but 4 is less than 6
f < e || e < d //false; 6 is not less than 5 and 5 is not less than 6


 //5// Unary operators 
 let g = 1
 let h = 2

 //not 
 !(g < h) // false; d is less than f, so the logic resolves to not true, ie false 

 //typeOf 
 typeOf(42) //returns 'number'
 typeOf('some words') //returns string
 typeOf(17) === 'string' //false; 17 is not a string
 
 //minus
 var negativeG = -g // negativeG = -1

 //6// Ternary operator
 function printGreeting(time){ //function takes an input of hour that represents the hour of the day, 0-24
    (time > 4 && time < 20 ? console.log('hello!') : console.log('good night!') ) //if the time is between 4 am and 8 pm, print 'hello'! otherwise, print 'good night!'
 }
 
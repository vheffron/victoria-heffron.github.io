/**
 * STRING MANIPULATION 
 * 
 * 0: Strings in JS can be manipulated in several ways. Because strings are indexed, there are several methods for changing strings. There are ways to 
 * manipulate strings with operators as well as with native js methods. Because strings are a primitive, unmutable datatype, manipulating strings 
 * technically means reassigning the value of the attached variable, rather than changing the original string. 
 * 
 * 1: With operators 
 *  
 *  + concatenate: combines multiple strings
 * += concatenate assignment: combines multiple strings and reassigns the value of the first variable to the concantenated strings
 *  < less than: checks whether the first value comes earlier in alphabetical order than the second value  
 *  > greater than: checks whether the first values comes later in alphabetical order than the second value 
 * 
 * 
 * 2: With string methods 
 * 
 * string.length: finds the length of a string
 * 
 * access by index: string are indexed, so any part of a string can be accessed by index, e.g. string[0] access the first character in a string
 *      string[string.length-1]: returns the last character in a string 
 * 
 * string.toUpperCase(): converts all characters in a string to uppercase 
 * 
 * string.toLowerCase(): converts all characters in a string to uppercase 
 * 
 * string.includes(value): checks whether a certain value is contained within a string 
 * 
 * string.startsWith(value): checks whether a string starts with a certain value 
 * 
 * string.endsWith(): checks whether a string ends with a certain value
 * 
 * string.slice(start,end): extracts a copy of a portion of a string. The start value is the index of the first character to include in the new string.
 *      The optional end value is the first index of the original string to exclude from the new string. The end value is optional; if it is not included 
 *      then the new string will include all values from the start value to the end of the original string.
 * 
 * string.replace(oldValue, newValue): replaces the old value with the specified new value. .replace only replaces one instance of the old value.
 * 
 * .replaceAll(oldValue, newValue): works the same as .replace, but replaces all instances of the old value. 
 * 
 */

//1// With operators 
let stringA = 'Good'
let stringB = 'Morning'

//concatenate
console.log(stringA + ' ' + stringB) //prints 'Good Morning'

//concatenate assignment
stringA += stringB //reassigns stringA to 'GoodMorning'

// <
stringA < stringB //true; 'Good' comes earlier than 'Morning' in alphabetical order

// >
stringA > stringB //false; 'Good' does not come latr in the alphabet that 'Morning'

//2// With string methods

// .length 

// by index
    //   .length-1
  
// toUpperCase()
 
// toLowerCase ()
 
// includes()
  
// startsWith()
  
// endsWith()
  
// .slice()
 
// .split()
  
// .replace()
  
// .replaceAll()
  

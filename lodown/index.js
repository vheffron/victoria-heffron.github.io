'use strict';

const { builtinModules } = require("module");


//UNDERPANTS FUNCTION DOCUMENTATION

/** 
 * identity: designed to take in a value and return the value unchanged.
 * 
 * @param {value}: any value 
 * @return {value}: the original value, unchanged
*/
function identity(value) {
    return value;
}
module.exports.identity = identity;



/** 
 * typeOf: takes in any value and returns the data type of that value.
 *  
 * @param {value}: any value 
 * @return {string}: a string that represents the datatype of the input value, from the following list: 
*          - "string"
*          - "array"  
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
*/
function typeOf(value) {
    if (Array.isArray(value)) {
        // check for array and null first so that they don't confuse typeof object 
        return 'array';
    } if (value === null) {
        return 'null';
    } if (value === undefined) {
        return 'undefined';
    } if (typeof value === 'number') {
        return 'number'
    } if (value instanceof Function) {
        return 'function';
    } if (typeof value === 'object') {
        return 'object';
    } if (typeof value === 'boolean') {
        return 'boolean';
    } if (typeof value === 'string') {
        return 'string'
    }
}
module.exports.typeOf = typeOf;



/** 
 * first: returns the first x number of values in a given array. If x (number) is not given, first returns
 * just the first value in the array.
 * 
 * @param {array}: an array from which will return a subset  
 * @param {number}: the number of values that we will return from the array 
 * @return {array}: return an array of numbers that is a subset of the input array 
*/
function first(arrayP, numberP) {
    if (!Array.isArray(arrayP)) {
        return []
    } if (typeof numberP !== 'number') {
        return arrayP[0]
    } if (numberP < 0) {
        return []
    }
    else {
        return arrayP.slice(0, numberP)
    }
}
module.exports.first = first;



/** 
 * last: last returns the last x number of values in a given array. If x (number) is not given, last returns
 * just the last value in the array.
 * 
 * @param {array}: an array from which will return a subset  
 * @param {number}: the number of values that we will return from the array 
 * @return {array}: return an array of numbers that is a subset of the input array 

*/
function last(arrayP, numberP) {
    if (!Array.isArray(arrayP)) {
        return []
    } if (typeof numberP !== 'number') {
        return arrayP[arrayP.length - 1]
    } if (numberP < 0) {
        return []
    } if (numberP > arrayP.length) {
        return arrayP
    }
    else {
        return arrayP.slice(arrayP.length - numberP, arrayP.length)
    }
}
module.exports.last = last;



/** 
 * indexOf: returns the index value of the first instance of a given value in a given array. If the value does not exist
 * in the array, returns -1. 
 *  
 * @param {array}: an array to check for a given value
 * @param {value}: a value to look for in the given array
 * @return {number}: the index value where the given value first occurs; if it doesn't occur, the value 
 * returned is -1 
* 
*/
function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    } return -1
}
module.exports.indexOf = indexOf;



/**
 * contains: checks an array for a value and returns a boolean that indicates whether the value exists in the array
 * 
 * @param {array}: an array that we will check for a given value 
 * @param {value}: the value we will look for in a given array 
 * @return {bool}: returns true if given value exists in given array; if the given value does not exist in the given array 
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
function contains(array, value) {
    var bool = false;
    for (var i = 0; i < array.length; i++) {
        bool = array[i] === value ? true : bool
    } return bool
}
module.exports.contains;



/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**unique: takes an array and returns a new array that contains all the elements of the original array, but with any duplicates removed
* @param {array}: an input array from which we will copy all unique values into a new array  
* @return {array}: an array that contains all unique values of the input array, i.e. with duplicates removed
*/
function unique(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (i === _.indexOf(array, array[i])) {
            newArray.push(array[i])
        }
    } return newArray
}
module.exports.unique = unique;



/**
* filter: designed to perform some function on an array and return an array that contains only the elements that caused
the function to return true, i.e. only the elements that "passed" the test that the function tested for.
 * @param {array}: an array of values that a function will test  
 * @param {function}: a function that tests the values of the array and returns true or false 
 * @return {array}: an array that contains all the values that returned true for the given function 
*/
function filter(array, func) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            newArray.push(array[i])
        }
    } return newArray
}
module.exports.filter = filter



/**
* reject: designed to perform some function on an array and return an array that contains only the elements that caused
the function to return false, i.e. only the elements that "failed" the test that the function tested for.
 * @param {array}: an array of values that a function will test  
 * @param {function}: a function that tests the values of the array and returns true or false 
 * @return {array}: an array that contains all the values that returned false for the given function
*/
function reject(array, func) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            newArray.push(array[i])
        }
    } return newArray
}
module.exports.reject = reject



/**
 *  * partition: 
 * @param {array}: an array of values that a function will test  
 * @param {function}: a function that tests the values of the array and determines whether they are truthy or falsey 
 * @return {array}: an array comprised of two subarrays -- one that contains all the truthy values and one that contains all the falsey
*/
function partition(array, func) {
    var newArray1 = [];
    var newArray2 = [];
    var returnArray = []
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            newArray1.push(array[i])
        } else {
            newArray2.push(array[i])
        }
    } returnArray.push(newArray1, newArray2)
    return returnArray
}
module.exports.partition = partition 



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
function map(collection, func) {
    var newArray = []
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            newArray.push(func(collection[i], i, collection))
        }
    } else for (var key in collection) {
        newArray.push(func(collection[key], key, collection))
    } return newArray
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

function pluck(array, key) {
    return _.map(array, function (n) {
        return n[key]
    })


}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

function every(collection, func) {
    //determine if func does not resolve to truthy value
    if (func === undefined) {
        //determine if array 
        if (Array.isArray(collection)) {
            //iterate
            for (let i = 0; i < collection.length; i++) {
                //determine if current value is not truthy 
                if (!collection[i]) {
                    return false
                }
            }
        } else { //else it's an object 
            for (let key in collection) {
                if (!collection[key]) {
                    return false;
                }
            }
        }
    } else {//else func is defined 
        //determine if array 
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (!func(collection[i], i)) {
                    return false
                }

            }
        } else {
            for (let key in collection) {
                if (!func(collection[key], key, collection)) {
                    return false
                }
            }
        }
    } return true
}


//else its an object 


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

function some(collection, func) {
    //determine if func does not resolve to truthy value
    if (func === undefined) {
        //determine if array 
        if (Array.isArray(collection)) {
            //iterate
            for (let i = 0; i < collection.length; i++) {
                //determine if current value is not truthy 
                if (collection[i]) {
                    return true
                }
            }
        } else { //else it's an object 
            for (let key in collection) {
                if (collection[key]) {
                    return true;
                }
            }
        }
    } else {//else func is defined 
        //determine if array 
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (func(collection[i], i)) {
                    return true
                }

            }
        } else {
            for (let key in collection) {
                if (!func(collection[key], key, collection)) {
                    return true
                }
            }
        }
    } return false
}



/** _.reduce  //SKIP -- ALEX WILL GO OVER IN CLASS 
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

function reduce(array, func, seed) {
    //create result variable
    let result = []
    //determine if seed is undefined
    if (seed === undefined) { //can't use !seed because 0 is a common seed value 
        result = array[0]
        for (var i = 1; i < array.length; i++) {
            //reassign result to invoking function on result, current item, current index, and array 
            result = func(result, array[i], i, array);
        }

        //else seed is defined
    } else {
        result = seed
        for (var i = 0; i < array.length; i++) {
            result = func(result, array[i], i, array)
        }
    } return result

}



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

function extend() {
    var objectOne = arguments[0]
    for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            objectOne[key] = arguments[i][key]
        }
    } return objectOne
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}

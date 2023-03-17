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
* reject: performs some function on an array and return an array that contains only the elements that caused
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
 * partition: tests all the values of an array and splits them between two subarrays in a new array, one subarray with truthy values and one
 * subarray with falsey values 
 * @param {array}: an array of values that a function will test  
 * @param {function}: a function that tests the values of the array and determines whether they are truthy or falsey 
 * @return {array}: a new array comprised of two subarrays -- one that contains all the truthy values and one that contains all the falsey
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


/**
 * map: returns an array comprised of the result of a function called on each of the original array values
 * @param {collection}: an array or object that the function will act on  
 * @param {function}: a function that acts on the values in the array or object 
 * @return {array}: an array that contains the value of each function call 
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
module.exports.map = map 


/**
 * pluck: returns an array that contains the values for the input property for each object in the array
 * @param {array}: an array of objects 
 * @param {property}: a property that the function looks for in each object in the input array 
 * @return {array}: an array that contains the value of the input property for each object 
*/
function pluck(array, key) {
    return _.map(array, function (n) {
        return n[key]
    })
}
module.exports.pluck = pluck 


/**
 * every: checks each element in a collection for truthiness or falsiness by calling a function on that element. Returns true if all
 * values are true, otherwise returns false. 
 * @param {collection}: an array or object, which is looped over to call a function on every element of the collection
 * @param {function}: a function that is called on every element of the input array or object to determine whether that element is truthy or falsey.
 * @return {boolean}: if a function is provided and every function call results in true, returns true. Otherwise, returns false. 
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
module.exports.every = every 


/**
 * some: checks each element in a collection for truthiness or falsiness by calling a function on that element. Returns true if any
 * values are true, otherwise returns false. 
 * @param {collection}: an array or object, which is looped over to call a function on every element of the collection
 * @param {function}: a function that is called on every element of the input array or object to determine whether that element is truthy or falsey.
 * @return {boolean}: if a function is provided and any function call results in true, returns true. Otherwise, returns false. 
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
module.exports.some = some 


/**
 * reduce: 
 * @param {array}: 
 * @param {function}: 
 * @return {value}:  
*/
/** _.reduce  
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
module.exports.reduce = reduce 


/**
 * extend: 
 * @param {object}: 
 * @return {object}:  
*/
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
module.exports.extend = extend 


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}

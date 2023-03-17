// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./victoria-heffron.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */



var maleCount = function (array) {
    //use _.filter() to return an array of only male customers 
    //filter method will iterate through collection and pass each item to a 'test function'
    //if test function returns true, item is pushed to output array 
    let males = _.filter(array, function (customer) {
        return customer.gender === 'male';
    }); //returns array of only male customer objects [{male}, {male}, ...]; now we can count
    return males.length
};

var femaleCount = function (array) {
    //use _.reduce to accumulate number of female customers 
    //accumulator value = number of females customers; current represents current item in array 
    let females = _.reduce(array, function (accumulator, current) {

        if (current.gender === 'female') {
            accumulator += 1
        }
        return accumulator;
    }, 0)
    return females
}

/////
var oldestCustomer = function (array) {
    let oldest = _.reduce(array, function (accumulator, current) {
    
        if (current.age > accumulator.age) {
         accumulator = current
        }
        return accumulator;
    }, {age: 0})
    return oldest.name
}

////
var youngestCustomer = function(array){
    let youngest = _.reduce(array, function (accumulator, current) {
    
        if (current.age < accumulator.age) {
         accumulator = current
        }
        return accumulator;
    }, {age: 1000})
    return youngest.name
};

var averageBalance = function (){

};

var firstLetterCount = function(){

};

var friendFirstLetterCount = function(){

};

var friendsCount = function(){

};

var topThreeTags = function(){

};

var genderCount = function(){

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

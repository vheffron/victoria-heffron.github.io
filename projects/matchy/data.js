/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'hamster';
animal['name'] = 'Boris';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'squeak';
noises.push('chatter');
noises.unshift('hiss');
noises[noises.length] = 'sneeze';
console.log(noises.length);
console.log(noises[noises.length]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises
animal.noises.push('click')
console.log(animal)
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * Bracket notation or dot notation referring to keys and properties
 * 
 * 2. What are the different ways of accessing elements on arrays?
 *
 * Bracket notation referring to index number e.g. arrray[0]; methods like .push
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create array to contain all the animals 
var animals = [];
//push first animal to animals array
animals.push(animal);
console.log(animals)
var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'whoosh']}
//push duck to animals array
animals.push(duck)
console.log(animals)
//create 2 more animal objects with species, name, 2+ sounds
var dog = {species: 'dog', name: 'Stella', noises: ['bark', 'arf']};
var fish = {species: 'beta fish', name: 'Cleo', noises: ['glug', 'blub']};
animals.push(dog, fish)
console.log(animals);
console.log(animals.length)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I chose an array as the data structure so that we can access the values through their indexes
var friends = []

function getRandom(){ 
min = Math.ceil(0);
max = Math.floor(animals.length);
return Math.floor(Math.random() * (max - min) + min);

}
//Using a random index from this function that you just created, get a random animal`
var randomAnimal = getRandom(animal)
console.log(randomAnimal)
//access name of randomAnimal 
var randomName = animals[randomAnimal]['name']
console.log(animals[randomAnimal]['name'])
// add its `name` to `friends
friends.push(randomName)
console.log(friends)

dog['friends'] = friends
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
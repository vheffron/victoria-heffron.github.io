/**
 * LOOPS
 * 
 * 0: A loop is an iterative process than run the same code block multiple times, once for each item in an array until some condition is met
 * or once for each property of an object.
 * 
 * 1: While, for, and for-in loops: While loops run as long as some condition is true. For loops iterate through an array or string, accessing 
 * each index value in the array or string. They iterate as long as some set condition is not met, e.g. as long as the number of iterations has 
 * not yet reached the value of the length of the array. For-in loops iterate through objects, accessing each property of the object. The syntax 
 * of each type of loop is explained in the code examples below.
 * 
 * 2: Loop any number of times, forward counting up to some limit, and backward counting down to 0: A common way to iterate over arrays is by starting 
 * at the zero index and going through each index until the last one. But there are other ways to loop over arrays. We can loop a set number of times 
 * or we can loop forward up until some limit other than the array's length. We can also count backwards from the end (or some other starting place) to the
 * zero index (or some other stopping place).
 * 
 * 3: Loop over an array, forwards and backwards: As mentioned in the previous section, we can start at the beginning of an array and loop forwards, or 
 * start at the end of an array and loop backwards. 
 * 
 * 4: Loop over an object: We use for-in loops to loop over objects. For-in loops allow us to access each property in an object by its key.
 * 
 */

//1// While, for and for-in loops
//While loop
let num = 0;

while (num < 35) { //if num is less than 35, run the code block below 
    num++; //adds one to num
}// above process repeats until num = 34


console.log(num); // the last iteration runs when num is 34, and the code add one; prints 35

//For loop
function addOnetoOne(array) {
    for (let i = 0; i < array.length; i++) { // i is a variable that corresponds to each index in an array, starting with 0 and changing with each iteration;
        //i < array.length tells the for loop to run again as long as i is less than the value of the array's length; i++ means 
        //that i's value will increase by 1 with each iteration 
        if (array[i] === 1) { //an if statement within the for-loop; if the item at the current index is 1, run the code on the next line
            array[i] += 1 //add 1 to the current value 
        }
    } return array //return the input array outside of the for loop; returning the array inside the for loop will cause the loop to 
    //stop iterating after one run 
}

//For-in loop 
function printValues(object) {
    for (var key in object) { //the syntax of a for-in loop to iterate through every key/value pair in an object is for ([variable] in [input object] ){ [code]}
        console.log(object[key] + '!') //code to be run for each property ; this example prints just the values of an object plus an exclamation point 
    }
} 

//2// Loop any number of times
//Count forward to a set limit 
for (var i = 0; i <=3; i++){} //in this case the length of the array is irrelevant. The code will run 3 times, because our run condition is set to i <= 3

//Count backwards to 0 
for (var i = array.length - 1; i >= 0; i--){} //var i = array.length tells the computer to start at the end of the array; i >= 0 tells it to iterate as long
// as i is greater than or equal to 0, and i-- tells it to count down by 1 each iteration

//3// Loop forwards and backwards
    //Loop forwards
for (var i = 0; i <=3; i+=2){} // i+=2 tells the computer to loop forward, accessing every other index

//Loop backwards 
for (var i = array.length - 1; i >= 0; i-=2){} //i-=2 tells the computer to loop backwards, accessing every other index

//4//Looping over objects
function printValues(object) {
    for (var key in object) { 
        console.log(key + ': ' + object[key] + '!') //prints each property's key and value formatted as 'key: value"
    }
} 
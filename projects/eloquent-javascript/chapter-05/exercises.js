// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
   const flattened = array.reduce((array1, array2)=>{
    return array1.concat(array2);
  },[])
return flattened
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, testFunc, updateFunc, bodyFunc) {
  for (let i = value; testFunc(i); i = updateFunc(i)){
    bodyFunc(i)
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
for (var i = 0; i < array.length; i++){
  if (test(array[i]) === false){
    return false
  } 
} return true 
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) { 
//create a variable ltr and initialize as empty array
let ltr = []; 
//create a variable rtl and initialize as empty array
let rtl = [];

//iterate through input string using for loop 
for (let i = 0; i < string.length; i++){
  //create a variable called script and assign it the result of invoking charachter 
  //script on the current characters char code 
  let script = characterScript(string.charCodeAt(i));

  //determine if string(i) returns something from scripts array 
  if (script !== null){
    if (script.direction === 'ltr'){
      ltr.push(script);

    } else { 
      rtl.push(script) 
    }
  }
} if (ltr.length > rtl.length) {
  return 'ltr'
} else {
  return 'rtl'
}
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};

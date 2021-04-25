// refactor this function into ES2015 javascript
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0;
    });
  }

  //solution
const filterOutOdds = (...nums) => {
     return nums.filter(n => n % 2 === 0);
}

// Write a function called findMin that accepts a variable number of arguments
// and returns the smallest argument.

function findMin(...args) {
   return Math.min(...args);
}

// Write a function called mergeObjects that accepts two objects and returns a
// new object which contains all the keys and values of the first object and
// second object.

function mergeObjects(ob1, ob2) {
    return {...obj1, ...obj2};
}

// Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the
// original array values and all of additional arguments doubled.

function doubleAndReturnArgs(array,...args) {
    function double(n) {return n * 2};
    return [...array, double(...args)];
}
//or
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

// remove a random element in the items array and return a new array without
// that item. 

function removeRandom(items) {
    let newArray = [];
    let ranIndex = Math.floor(Math.random() * items.length)
    return [...items.slice(0,ranIndex, ..items.slice(ranIndex + 1))];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    const newArray = [...array1, ...array2];
    return newArray;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key] : value};
}
//or
function addKeyVal(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
    
}

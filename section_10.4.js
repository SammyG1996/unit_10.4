//Refactor it to use the rest operator & an arrow function:

function filterOutOdds(...nums) {
return nums.filter(num => num % 2 === 0)
}

//findMin
function findMin(...nums) {
  return nums.reduce((acc, num) => acc < num ? acc : num)
  }

//mergeObjects
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

//doubeAndReturnArgs
function doubleAndReturnArgs(arr, ...nums) {
  const newArr = nums.map((num) => num * 2)
  return [...arr, ...newArr]
}

/** remove a random element in the items array
and return a new array without that item. */
function removeRandom(...items) {
  const randomNum = Math.floor(Math.random() * items.length + 1);
  return items.filter(num => num !== items[randomNum])
}

/** Return a new array with every item in array1 and array2. */
function extend(array1, array2) {
  return [...array1, ...array2]
  }


/** Return a new object with all the keys and values
from obj and a new key/value pair */
function addKeyVal(obj, key, val) {
  return {...obj, [key]: val}
  }


/** Return a new object with a key removed. */
function removeKey(obj, key) {
const newObj = {...obj};
delete newObj[key]
return newObj
}

/** Combine two objects and return a new object. */
 function combine(obj1, obj2) {
    return {...obj1, ...obj2}
    }

/** Return a new object with a modified key and value. */
function update(obj, key, val) {
const newObj = {...obj};
newObj[key].val
return newObj
}









  
  
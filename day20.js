
// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.


var isEmpty = (obj) => {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  } 
  else {
    let arr = Object.keys(obj);
    return arr.length === 0;
  }
};

console.log(isEmpty([])); // true, because the array is empty
console.log(isEmpty([1, 2, 3])); // false, because the array is not empty
console.log(isEmpty({})); // true, because the object is empty
console.log(isEmpty({ a: 1 })); // false, because the object has a property
console.log(isEmpty('')); // false, since the function does not handle strings specifically


// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

var filter = function (arr, fn) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      temp.push(arr[i]);
    }
  }
  return temp;
};

greaterthan10 = (n) => {
  return n > 10;
};
firstIndex = (n, i) => {
  return i === 0;
};
pluseOne = (n) => {
  return n + 1;
};


console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], greaterthan10));
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], firstIndex));
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], pluseOne));




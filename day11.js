const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

// let callCount = 0;
// const memoizeSum = memoize((a, b) => {
//   callCount += 1;
//   return a + b;
  
// });
const factorial = (n)=> {
    if(n <= 1) return 1;
    return n* factorial (n - 1)
};
const memoizefac = memoize(factorial);
console.log(memoizefac(5));

// console.log(memoizeSum(2, 3));
// console.log(memoizeSum(4, 3));
// console.log(memoizeSum(6, 3));

// console.log(callCount);

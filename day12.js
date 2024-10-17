// Given two promises promise1 and promise2, return a new promise.
//  promise1 and promise2 will both resolve with a number.
// The returned promise should resolve with the sum of the two numbers.

const addTowpromises = async function (promise1, promise2) {
  return new Promise((resolve, reject) => {
    count = 2;
    res = 0;
    [promise1, promise2].forEach(async (Promise) => {
      try {
        const subres = await Promise;
        res += subres;
        count--;
        if (count === 0) {
          resolve(res);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
};

(async()=>{
    const Sum = await addTowpromises(Promise.resolve(6), Promise.resolve(2));
  console.log(Sum);
  
})();


// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

const expect = function (x) {
  return {
    toBe: (y) => {
      if (x !== y) {
        console.log("Not equal");
        return false;
      } else {
        console.log("Equal");
        return true;
      }
    },
    notToBe: (y) => {
      if (x === y) {
        console.log("Equal");
        return false;
      } else {
        console.log("Not Equal");
        return true;
      }
    },
  };
};
expect(5).toBe(5); // true
expect(4).toBe(10); //false
expect(4).notToBe(10); //true
expect(4).notToBe(4); //false

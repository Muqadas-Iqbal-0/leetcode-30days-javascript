// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

const createCounter = (n) => {
  let counter = n;
  return {
    increment: () => {
      counter++;
      return counter;
    },
    decrement: () => {
      counter--;
      return counter;
    },
    reset: () => {
      counter = n;
      return counter;
    },
  };
};

const counter = createCounter(5);
   console.log( "increment value is:" , counter.increment());
   console.log( "increment value is:" , counter.reset());
   console.log( "increment value is:" , counter.decrement());

   


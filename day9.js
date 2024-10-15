//Write a function argumentsLength that returns the count of arguments passed to it.
const argumentsLength = (...args) => {
    return args.length;
   

}
const fn = argumentsLength;
console.log(fn([1, 2, 3, 4, 5]));

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = () => {
    return  () => "Hello World";

}
const greeting = createHelloWorld()
console.log(greeting());

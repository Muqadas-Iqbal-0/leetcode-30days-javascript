
// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

// const once = (fn) => {
//     let isCall = true;
//     return(...args)=>{
//         if(isCall){
//             return undefined
//         }
//         isCall = false;
//         return fn(...args)
//     }

// }
const once = (fn) => {
    let isCall = false;
    return(...args)=>{
        if(isCall){
            return undefined
        }
        isCall = true;
        return fn(...args)
    }

}
const fn = (a,b,c)=>(a+b+c);
let oncefn = once(fn);
console.log(oncefn(3,4,5))
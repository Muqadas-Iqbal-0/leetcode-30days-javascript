var timeLimit = function (fn, t) {
  return async function (...args) {
//     return new Promise((resolve, rej) => {
//       const timeout = setTimeout(() => {
//         rej("Time Limit Exceeded");
//       }, t);
//       fn(...args)
//         .then((result) => {
//           clearTimeout(timeout);
//           resolve(result);
//         })
//         .catch((err) => {
//           clearTimeout(timeout);
//           rej(err);
//         });
//     });
//   };
      return new Promise( async(resolve, rej) => {
         const timeout =  setTimeout(()=>{
              rej("Time Limit Exceeded")
               }, t);
          try {
            const result = await fn(...args);
            resolve(result);

          } catch(err){
              rej(err);
          }
           clearTimeout(timeout);
      });
  }
};

const limitedtime = timeLimit(
  (t) => new Promise((res) => setTimeout(res, t)),
  100
);
limitedtime(150).catch((err) => console.log(err));

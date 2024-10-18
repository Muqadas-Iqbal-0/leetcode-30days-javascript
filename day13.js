// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis) {
    //  return new Promise(resolve => { 
    //     setTimeout(resolve, millis);
    //  });
    return new Promise((res, rej)=>{
        try{
            setTimeout(()=>res(5), millis)
        }
        catch(err){
     rej(err);
        }
       
    })
    }
 let t = Date.now();
 sleep(1000).then(() => console.log(Date.now() - t));
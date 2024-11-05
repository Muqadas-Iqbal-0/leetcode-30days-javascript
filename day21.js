const chunk = (array, size) => {
    let result = [];
    for (let i = 0; i < array.length; i+= size) {
       result.push(array.slice(i,i+ size))
        
    }
    return result
}


arr = [1,2,2,4,6,89,8]
size = 2;
const res =chunk(arr,size);
console.log(res);






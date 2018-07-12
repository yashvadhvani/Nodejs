let asyncAdd = (a,b) =>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(typeof a ==='number' && typeof b === 'number')
                resolve(a+b);
            else
                reject('Arguments must be num')
        },1500)
    })
}
let somePromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Hey worked');
        reject('error');
    }, 2000);
    
});

// somePromise.then((message)=> {
//     console.log(message);
//     console.log('hello');
// }, (error)=> {
//     console.log(error);
// })


asyncAdd(5,'7').then((res) => {
    console.log(res)
    return asyncAdd(res,33);
},(error) =>{
    console.log(error);
}).then((res)=>{
    console.log(res);
},error => {
    console.log(error);
})
console.log('Starting App');

setTimeout(() =>{
    console.log('Async Basics');
},2000);

setTimeout(() => {
    console.log('second');
}, 0);
console.log('Finishing up');
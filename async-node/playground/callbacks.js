let getUser = (id,callback) => {
    let user = {
        id,
        name :'vikram'
    };
    setTimeout(() => {
        callback(user);    
    }, 3000);
    
};
getUser(31, (user) => {
    console.log(user);
});

console.log('hello');
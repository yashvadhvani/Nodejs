let obj= {
    name: 'Yash',
};

let stringobj= JSON.stringify(obj);
console.log(typeof stringobj);
console.log(stringobj);

let personString ='{"name" : "yash" ,"age" : 25}';
console.log(JSON.parse(personString).name);
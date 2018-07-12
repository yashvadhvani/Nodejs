//Getting error_message
const geoCode =require('./geocode/geocode')
const getWeather =require('./geocode/getWeather')
const yargs = require('yargs');
const axios=require('axios');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAdress =encodeURIComponent(argv.a);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`;

axios.get(geocodeUrl).then((response)=>{
    console.log(response.data);
}).catch(e =>{
    console.log(e);
})
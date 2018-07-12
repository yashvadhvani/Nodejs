const geoCode =require('./geocode/geocode')
const getWeather =require('./geocode/getWeather')
const yargs = require('yargs');

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

geoCode.geocodeAddress(argv.a, (error,result)=>{
    if(error)
        console.log(error);
    else{
        geoCode.currentTemp(result.Latitude,result.Longitude,(err,res)=>{
            if(!err)
                console.log(res);
            else
                console.log(err);
        })
    }
        
});
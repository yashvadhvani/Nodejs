const request = require('request');

const currentTemp= (lat,log,callback) => {
    //https://api.darksky.net/forecast/f70e9696f8e61c187c68415bce1805cc/37.8267,-122.4233
    request({
        url :`https://api.darksky.net/forecast/f70e9696f8e61c187c68415bce1805cc/${lat},${log}`,
        json: true
    },(error,response,body)=>{ 
        if(error)
            callback('Unable to connect');
        else if(response.statusCode === 404 )
            callback('Unable to fetch');
        else
            callback(undefined,JSON.stringify(body.currently.temperature,undefined,2));

    })
}
module.exports.currentTemp=currentTemp;
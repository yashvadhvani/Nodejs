const request = require('request');
let geocodeAddress = (address) => {
    encodedUrl = encodeURIComponent(address);
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`,
            json: true
        }, (error, response, body) => {
            if (!error && body.status !== 'OVER_QUERY_LIMIT') {
                resolve({
                    Address: body.results[0].formatted_address,
                    Latitude: body.results[0].geometry.location.lat,
                    Longitude: body.results[0].geometry.location.lng
                })
                // console.log(`Address : ${body.results[0].formatted_address}`);
                // console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
                // console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
            } else {
                reject('Error !!!!');
            }
        })
    })
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location,undefined,2))
}).catch(error=>{
    console.log(error);
})
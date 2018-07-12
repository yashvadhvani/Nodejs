//f70e9696f8e61c187c68415bce1805cc
const request = require('request');
const geocodeAddress = (arg,callback) => {
    encodedUrl = encodeURIComponent(arg);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`,
        json: true
    }, (error, response, body) => {
        if (!error && body.status !== 'OVER_QUERY_LIMIT') {
            callback(undefined, {
                Address :body.results[0].formatted_address,
                Latitude : body.results[0].geometry.location.lat,
                Longitude : body.results[0].geometry.location.lng
            })
            // console.log(`Address : ${body.results[0].formatted_address}`);
            // console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
            // console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
        } else {
            callback('Error !!!!');
        }
    })
}

module.exports.geocodeAddress=geocodeAddress;


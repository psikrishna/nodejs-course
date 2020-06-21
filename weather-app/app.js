const apiConfig = require('../apiKeys');
const request = require('postman-request');
const log = console.log;

const url = 'http://api.weatherstack.com/current?access_key=' + apiConfig.weather_api_key + '&query=Lucknow&units=m';
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Lucknow.json?access_token=pk.eyJ1IjoicHNpa3Jpc2huYSIsImEiOiJja2JwZWM4NGkxNHkwMnltaThlc2F3d3RsIn0.J5crHQFpzQmgL1alHAJMEQ&limit=1';

// request({ url: url, json: true }, (error, response) => {
//     //log(response.body.current);
//     log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.precip + ' % chance of rain.')
// });

request({ url: geoUrl, json: true }, (error, response) => {
    const lat = response.body.features[0].center[1];
    const lng = response.body.features[0].center[0];
    log(lat, lng);
});
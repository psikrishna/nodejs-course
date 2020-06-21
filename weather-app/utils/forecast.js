const apiConfig = require('../../apiKeys');
const request = require('postman-request');
const log = console.log;

const forecast = (lat, lng, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + apiConfig.weather_api_key + '&query=' + lat + ',' + lng + '&units=m';
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('error in connection', undefined);
        }
        else if (response.body.error) {
            callback('unable to find location', undefined);
        }
        else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.precip + ' % chance of rain.');
        }
    });
};

module.exports = forecast;
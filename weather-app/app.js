const apiConfig = require('../apiKeys');
const request = require('postman-request');
const chalk = require('chalk');
const log = console.log;

const url = 'http://api.weatherstack.com/current?access_key=' + apiConfig.weather_api_key + '&query=Lucknow&units=m';
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Lucknow.json?access_token=' + apiConfig.mapbox_api_key + '&limit=1';

const location = 'Lucknow';

request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
        log(chalk.red.inverse('error in connection'));
    }
    else if (response.body.features.length === 0) {
        log(chalk.red.inverse('unable to find location'));
    }
    else {
        const lat = response.body.features[0].center[1];
        const lng = response.body.features[0].center[0];
        log(lat, lng);
    }
});

request({ url: url, json: true }, (error, response) => {
    if (error) {
        log(chalk.red.inverse('error in connection'));
    }
    else if (response.body.error) {
        log(chalk.red.inverse('unable to find location'));
    }
    else {
        log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.precip + ' % chance of rain.');
    }

});
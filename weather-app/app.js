const apiConfig = require('../apiKeys');
const request = require('postman-request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')
const log = console.log;

geocode('Allahabad', (error, data) => {
    if (error) {
        log(chalk.red.inverse.bold('error:', error));
    }
    else {
        log('data:', data);
    }
});

forecast(25.44202, 81.73326, (error, data) => {
    if (error) {
        log(chalk.red.inverse.bold('error:', error));
    }
    else {
        log('data:', data);
    }
})

//const url = 'http://api.weatherstack.com/current?access_key=' + apiConfig.weather_api_key + '&query=' + lat + ',' + lng + '&units=m';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         log(chalk.red.inverse('error in connection'));
//     }
//     else if (response.body.error) {
//         log(chalk.red.inverse('unable to find location'));
//     }
//     else {
//         log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.precip + ' % chance of rain.');
//     }

// });
const apiConfig = require('../apiKeys')
const request = require('postman-request');
const log = console.log;

const url = 'http://api.weatherstack.com/current?access_key=' + apiConfig.weather_api_key + '&query=New%20York';

request({ url: url, json: true }, (error, response) => {
    log(response.body.current);
});

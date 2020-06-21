const apiConfig = require('../apiKeys')
const request = require('postman-request');
const log = console.log;

//log(apiConfig.weather_api_key);

const url = 'http://api.weatherstack.com/current?access_key=' + apiConfig.weather_api_key + '&query=New%20York';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    log(data);
});

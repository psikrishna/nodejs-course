const apiConfig = require('../apiKeys')
const request = require('postman-request');
const log = console.log;

const url = 'http://api.weatherstack.com/current?access_key=' + apiConfig.weather_api_key + '&query=Lucknow&units=m';

request({ url: url, json: true }, (error, response) => {
    //log(response.body.current);
    log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.precip + ' % chance of rain.')
});

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
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')
const log = console.log;

const address = process.argv[2];

if (!address) {
    log(chalk.red.bold.inverse('no address provided'));
}
else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return log(chalk.red.inverse.bold('error:', error));
        }
        forecast(latitude, longitude, (error, forecastdata) => {
            if (error) {
                return log(chalk.red.inverse.bold('error:', error));
            }
            log(location);
            log(forecastdata);
        })
    });
}
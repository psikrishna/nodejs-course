const express = require('express');
const log = console.log;

const app = express();

app.get('', (req, res) => {
    res.send('<h1>express</h1>')
});

app.get('/help', (req, res) => {
    res.send({
        name: 'psi',
        age: 21,
    })
});

app.get('/about', (req, res) => {
    res.send('<title>about</title>')
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'lucknow',
        forecast: 'rainy',
    })
});

app.listen(3000, () => {
    log('server up on port 3000')
});
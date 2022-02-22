const request = require('request');

const forecast = function (data,cb) {
    request(`http://api.weatherstack.com/current?access_key=c0836804add4a5b8a07c8fbe1eb66d61&query=${data.latitude},${data.longitude}`, function (error, response, body) {
        console.error('error:', error);

        var result = JSON.parse(body);
        cb(result.current.weather_descriptions[0]);
    });
}

module.exports = forecast;
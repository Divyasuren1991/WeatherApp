const request = require('request');

const forecast = function (data,cb) {
    request(`http://api.weatherstack.com/current?access_key=c0836804add4a5b8a07c8fbe1eb66d61&query=${data.latitude},${data.longitude}`, function (error, response, body) {
        if(error){
            cb(error,undefined);
            return;
        }

        var result = JSON.parse(body);
        cb(undefined, result.current.weather_descriptions[0]);
    });
}

module.exports = forecast;
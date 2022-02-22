const request = require('request');

const geocode = function (city,cb) {
    request(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiZGl2eWFzdXIiLCJhIjoiY2t6cjV4Y3pyMHNudjJwbGd0ZHNuaW05cyJ9.OZpTQ-iOqd573Qm7n6OXcw`, function (error, response, body) {
        console.error('error:', error);

        var result = JSON.parse(body);
        var data = {
            latitude: result.features[0].center[1],
            longitude: result.features[0].center[0]
        }
        
        cb(data);
    });
}

module.exports = geocode;
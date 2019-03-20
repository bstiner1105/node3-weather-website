const request = require('request');


// const url = 'https://api.darksky.net/forecast/5f09e89c4ee2d7a578d683f66f8a020e/47.9874,7.8945?units=si&lang=de';


const forecast = (longitude, latitude, callback) => {

	const token = '5f09e89c4ee2d7a578d683f66f8a020e';
	const coordinates = longitude + ',' + latitude ;
	const url = 'https://api.darksky.net/forecast/' + token + '/' + coordinates + '?units=auto&lang=de';


	request({ url, json: true }, (error, { body }) => {
		if(error) {
			callback('Unable to connect to weather service!', undefined);
		} else if(body.error) {
			callback('Unable to find location.', undefined);
		} else {
			callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.');
		}

	});
};

module.exports = forecast;

const https = require('https');
const http = require('http');
const print = require('./print');

function get(username, topic) {

	try {

		const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
			if (response.statusCode === 200) {

				let body = '';
				// Read the data
				response.on('data', data => {
					body += data.toString();
				})

				response.on('end', () => {
					try {
						const profile = JSON.parse(body);

						print.message(profile.name, profile.badges.length, profile.points[topic], topic);
					} catch (error) {
						print.error(error);
					}
				});
			} else {
				const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
				const statusCodeError = new Error(message);
				print.error(statusCodeError);
			}
		});

		request.on('error', error => print.error(error));
	} catch (error) {
		print.error(error);
	}

}

module.exports.get = get;
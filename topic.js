// Print out list of Treehouse topic areas
const print = require('./print');
const https = require('https');
const http = require('http');

module.exports = {
	list: function (username){
		console.log("Choose from the following topics:");
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
						const topic = JSON.parse(body);
						
						console.log(Object.keys(topic.points));
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
}

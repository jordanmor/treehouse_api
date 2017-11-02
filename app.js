const https = require('https');
const http = require('http');
// Print Error Messages
function printError(error) {
	console.error(error.message);
}

function printMessage(name, badgeCount, point) {
	const message = `${name} has ${badgeCount} total badge(s) and ${point} total points.`;
	console.log(message);
}

function getProfile(username) {

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
						printMessage(profile.name, profile.badges.length, profile.points.total);
					} catch (error) {
						printError(error);
					}
				});
			} else {
				const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
				const statusCodeError = new Error(message);
				printError(statusCodeError);
			}
		});

		request.on('error', error => printError(error));
	} catch (error) {
		printError(error);
	}

}
const users = process.argv.slice(2);

users.forEach(getProfile);



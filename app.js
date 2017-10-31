const https = require('https');

function printMessage(name, badgeCount, point) {
	const message = `${name} has ${badgeCount} total badge(s) and ${point} total points.`;
	console.log(message);
}

function getProfile(username) {

	const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
		// console.log(response.statusCode);

		let body = '';

		response.on('data', data => {
			body += data.toString();
		})

		response.on('end', () => {
			const profile = JSON.parse(body);
			printMessage(profile.name, profile.badges.length, profile.points.total);
		});

	});

}
const users = process.argv.slice(2);

users.forEach(getProfile);



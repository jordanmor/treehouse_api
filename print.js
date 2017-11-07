// Print Error Messages

module.exports = {
	error: function(error) {
		console.error(error.message);
	},
	message: function(name, badgeCount, point, topic) {
		const message = `${name} has ${badgeCount} total badge(s) and ${point} points in ${topic}.`;
		console.log(message);
	}
};
// Print Error Messages

module.exports = {
	error: function(error) {
		console.error(error.message);
	},
	message: function(name, badgeCount, point) {
		const message = `${name} has ${badgeCount} total badge(s) and ${point} total points.`;
		console.log(message);
	}
};
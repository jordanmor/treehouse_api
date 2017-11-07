const profile = require('./profile');
const topic = require('./topic');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('');

rl.question('Enter username:', (answer) => {
  console.log('');
  const username = answer;
  topic.list(username);

  function secondInput() {
  	console.log('');
  	rl.question('Choose topic:', (answer) => {
		const chosenTopic = answer;
		console.log('');
		profile.get(username, chosenTopic);

		rl.close();
	});
  }

  setTimeout(secondInput, 8000);

});
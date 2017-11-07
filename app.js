const profile = require('./profile');
var prompt = require('prompt');

prompt.start();

prompt.get(['username', 'topic'], function (err, result) {
   if (err) { return onErr(err); }
   profile.get(result.username, result.topic);
   
});

function onErr(err) {
  console.log(err);
  return 1;
}


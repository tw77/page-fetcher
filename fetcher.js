const args = process.argv;
const request = require('request');
const fs = require('fs');
request(args[2], (error, response, body) => {
  fs.writeFile(args[3], body, function(err) {
    if (err) return console.log(err);
    console.log('Downloaded and saved to ' + args[3]);
  });
});
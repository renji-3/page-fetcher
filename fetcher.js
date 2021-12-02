let arg = process.argv.slice(2, 4);
const request = require('request');
const fs = require('fs');

request(`${arg[0]}`, (error, response, body) => {
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(`${arg[1]}`, body, err => {
    if (err) {
      console.error(error);
      return;
    }
    //file written successfully
  });
});



// https://www.youtube.com/
// /Users/renji/Lighthouse/Week2/Day3/page-fetcher
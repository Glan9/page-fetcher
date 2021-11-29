const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filepath = process.argv[3];

request(url, (error, response, body) => {
  if (!error) {
    fs.writeFile(filepath, body, (err) => {
      if (!err) {
        console.log(`Downloaded and saved ${body.length} bytes to ${filepath}`);
      } else {
        console.log(`There was an error writing to file: ${filepath}`);
      }
    });
  } else {
    console.log(`There was an error requesting from: ${url}`);
  }
});




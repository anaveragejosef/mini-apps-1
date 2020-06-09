// Require and create an express instance
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Serve client side html and js files
app.use(express.static('client'));
// Use json to parse data into req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// List on port 3000
app.listen(port, () => console.log(`Now listening at http://localhost:${port}`));

// Create route
app.post('/', (req, res) => {
  // Within the res/req function call a parse data function
  parseData(req.body.json, (err, results) => {
    // Based on response, send error or CSV
    if (err) res.status(400).send(err);
    res.status(201).send(results);
  });
})

// Parse Data
var parseData = (json, callback) => {
  var jsonObj = JSON.parse(json);
  var jsonKeys = Object.keys(jsonObj);
  // Create CSV string
  var csvOutput = '';
  // Get the keys from first obj for first line
  for (let key in jsonObj) {
    if (key === jsonKeys[jsonKeys.length - 2]) {
      csvOutput += key + '\n';
    } else if (key !== jsonKeys[jsonKeys.length - 1]) {
      csvOutput += key + ',';
    }
  }
  // Helper function
  var parseObject = obj => {
    // If children exist, call helper on each child
    if (obj.children) {
      for (let i =0; i < obj.children.length; i++) {
        parseObject(obj.children[i]);
      }
    }
    // Iterate through the object
    for (let key in obj) {
      // Create a new line with each value seperated by comma
      if (key === jsonKeys[jsonKeys.length - 2]) {
        csvOutput += obj[key] + '\n';
      } else if (key !== jsonKeys[jsonKeys.length - 1]) {
        csvOutput += obj[key] + ',';
      }
    }
  }
  // Start function with first object
  parseObject(jsonObj);
  // Once complete, write output to a file
  fs.writeFile('csv_report.csv', csvOutput, err => {
    if (err) callback(err);
  });
  // Then send the file back in the callback
  fs.readFile(path.join(__dirname + '/csv_report.csv'), (err, data) => {
    if (err) callback(err);
    callback(null, data);
  })
}

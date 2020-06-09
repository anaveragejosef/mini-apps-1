// Require and create an express instance
const express = require('express');
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
var parseData = (obj, callback) => {
  console.log('Parse, req.body = ', obj);
}
  // Accepts the JSON object
    // Create new string
     // Get the keys from first obj
      // Add these as the first line
    // Helper function
      // Iterate through the object
      // Create a new line with each value seperated by comma
      // If children, call helper
    // Start function with first object
  // Once complete, callback with result
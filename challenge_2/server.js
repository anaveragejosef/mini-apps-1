// Require and create an express instance
const express = require('express');
const app = express();
const port = 3000;

// Serve client side html and js files
app.use(express.static('client'));
// Use json to parse data into req.body
app.use(express.json());
// List on port 3000
app.listen(port, () => console.log(`Now listening at http://localhost:${port}`));

// Create route
  // First create an express call using post
  // The URL will be root for now
  // Within the res/req function call a parse data function
    // This takes the results and a callback
    // Based on response, send error or CSV

// Parse Data
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
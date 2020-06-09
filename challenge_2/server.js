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
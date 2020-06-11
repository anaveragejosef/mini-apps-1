const express = require('express');
const app = express();
const port = 3000;
const controllers = require('./controller.js');

app.use(express.static('public'));
app.listen(port, () => console.log(`Now listening on port ${port}`));

app.get('/', (req, res) => {
  controller.create(req, res);
})
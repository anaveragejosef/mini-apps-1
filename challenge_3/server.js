const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller.js');

app.use(express.static('public'));
app.listen(port, () => console.log(`Now listening on port ${port}`));

app.get('/', (req, res) => {
  console.log('In Server.js');
  controller.create(req, res);
})
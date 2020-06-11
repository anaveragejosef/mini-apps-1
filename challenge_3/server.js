const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.listen(port, () => console.log(`Now listening on port ${port}`));

app.post('/api', (req, res) => {
  console.log('Server req.body - ', req.body);
  controller.create(req.body, res);
})
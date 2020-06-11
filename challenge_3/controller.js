var models = require('./models.js');

module.exports =  {
  create: (body, res) => {
    console.log('Controller - ', body);
    models.createRecord(body, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send(results);
      }
    });
  }
}
var models = require('./models.js');

module.exports =  {
  create: (req, res) => {
    models.createRecord((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send(results);
      }
    });
  }
}
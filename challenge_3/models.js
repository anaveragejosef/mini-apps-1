var db = require('./db/index.js');

module.exports = {
  createRecord: callback => {
    console.log('In Model.js');
    db.connection.query('INSERT INTO transactions () VALUES () SELECT LAST_INSERT_ID()', function (error, results, fields) {
      if(error) callback(error);
      console.log('Results: ', results);
      callback(null, results);
    });
  }
}
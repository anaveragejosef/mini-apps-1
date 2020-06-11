var db = require('./db/index.js');

module.exports = {
  createRecord: callback => {
    db.connection.query('INSERT INTO transactions () VALUES () SELECT LAST_INSERT_ID()', function (error, results, fields) {
      if(error) callback(error);
      callback(null, results);
    });
  }
}
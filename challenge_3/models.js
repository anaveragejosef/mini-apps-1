var db = require('./db/index.js');

module.exports = {
  createRecord: (body, callback) => {
    console.log('Model body - ', body);
    var queryStr = "INSERT INTO transactions (name, email, password, address1, address2, city, state, zip, phone, card, exp, cvv, billing) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    var queryArgs = [body.name, body.email, body.password, body.address1, body.address2, body.city, body.state, body.zip, body.phone, body.card, body.exp, body.cvv, body.billing];
    db.connection.query(queryStr, queryArgs, function (error, results, fields) {
      if(error) callback(error);
      console.log('Results: ', results);
      callback(null, results);
    });
  }
}
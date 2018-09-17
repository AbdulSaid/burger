// Require in the connection to the database
require('./connection');

// Create methods that will execute the necessary MYSQL commads in the controlers
var orm = {
  // methods are selectAll()
  selectAll: function(cb) {
    var queryString = 'SELECT * FROM burgers';
    connection.query(queryString, function(err, result) {
      if (err) {
        res.status(500).end();
      }
      cb(result);
    });
  },
  insertOne: function(burger_input, cb) {
    var queryString =
      'INSERT INTO burgers (burger_name, devoured) VALUES (?, false)';
    connection.query(queryString, [burger_input], function(err, result) {
      if (err) {
        res.status(500).end;
      }
      cb(result);
    });
  },
  updateOne: function(id, cb) {
    var queryString = 'UPDATE burgers SET devoured = "true" WHERE id = ?';
    connection.query(queryString, [id], function(err, result) {
      if (err) {
        res.status(500).end;
      }
      cb(result);
    });
  }
};

// Export the ORM Object
module.exports = orm;

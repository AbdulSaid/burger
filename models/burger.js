// Import orm.js file

var orm = require('../config/orm');
// create code that will call the ORM functions using burger specific input for the ORM

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(burger_input, cb) {
    orm.insertOne(burger_input, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne([id], function(res) {
      cb(res);
    });
  }
};

// Export code at the end to controller
module.exports = burger;

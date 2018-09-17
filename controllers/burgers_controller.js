// Import express

var express = require('express');
var router = express.Router();

// Import burger.js
var burger = require('../models/burger');

// Create the router for the app
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/', function(req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/');
  });
});

router.put('/:id', function(req, res) {
  var id = req.params.id;
  console.log('iD of burger' + id);
  burger.updateOne(id, function() {
    res.redirect('/');
  });
});

// Export the router at the end
module.exports = router;

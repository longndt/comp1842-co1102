var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

//URL: localhost:3000/fpt
router.get('/fpt', function (req, res) {
  //Location: views/fpt.hbs
  res.render('fpt');
});

//URL: localhost:3000/hello
router.get('/hello', function (req, res, next) {
  res.send('say hello from index router');
});

module.exports = router;

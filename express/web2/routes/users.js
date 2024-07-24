var express = require('express');
var router = express.Router();

//URL: localhost:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//URL: localhost:3000/users/hello
router.get('/hello', function (req, res, next) {
  res.send('say hello from users router');
});

module.exports = router;

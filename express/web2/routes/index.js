var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
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

//localhost:3000/data
router.get('/data', (req, res) => {
  var country = "Vietnam"
  var year = 2024
  var greenwich = "Greenwich Vietnam"
  //views/data.hbs
  res.render('data',
    {
      country,
      year,
      fgw: greenwich,
      comp1842: "Web Programming 2"
    }
  )
})

router.get('/sports', (req, res) => {
  //create fake data in json format
  var sports = [
    {
      "id" : 1,
      "english": "badminton",
      "vietnamese" : "cầu lông"
    },
    {
      "id": 2,
      "english": "football",
      "vietnamese": "bóng đá"
    },
    {
      "id": 3,
      "english": "swimming",
      "vietnamese": "bơi lội"
    }
  ]
  res.render('sports', { sports })
})

//render login form
router.get('/login', (req, res) => {
  res.render('login')
})

//process login form
router.post('/login', (req, res) => {
  //get user's input from login form
  var username = req.body.username
  var password = req.body.password
  //var data = "Username : " + username "<br /> Password : " + password
  if (username == "admin" && password == "123456")
    res.send("<h1>Login succeed !</h1>")
  else
    res.send("<h1>Login failed !</h1>")
})

module.exports = router;

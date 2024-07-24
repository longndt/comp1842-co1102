const express = require('express')
const router = express.Router()

//localhost:3000/demo
router.get('/', (req, res) => {
  res.send("Say Hello from Demo Router")
})

//localhost:3000/demo/welcome
router.get('/welcome', (req, res) => {
   res.send("Welcome to my web app")
})

module.exports = router
//declare & import express framework
const express = require('express')
//use express framework
const app = express()
//declare server port
const port = 3456     //any port but default is 3000
//declare some routes to display web pages
app.get('/', (req, res) => {
   //only single "send"
   res.send('<h1>Hello world !</h1>')
})
app.get('/greenwich', (req, res) => {
   //but multiple "write"
   res.write('<h1>Hello Greenwich Vietnam !</h1>')
   res.write('<h1>We are studying Web Programming 2 !</h1>')
   res.end()
})
app.get('/demo', (req, res) => {
   //use "sendFile" to render a static web page
   res.sendFile(__dirname + '/demo.html')
})
//run web server
app.listen(port, () => {
   //console.log('Server is running at port ' + port)
   console.log(`Server is running at port ${port}`)
})
//run web app in terminal : npm start
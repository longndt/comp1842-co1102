//declare and import http module (package/library)
const http = require('http')
//declare server port
var port = 1234
//create web server
const server = http.createServer((req, res) => {
   //write header
   res.writeHead (200, { 'Content-Type' : 'text/html'})

   //set header (alternative method)
   //res.setHeader('Content-Type','text/html')

   //write (display/show) content to web page
   res.write("<h1 style='color: red'>Web Programming 2 - COMP1842</h1>")
   res.write("<h2 style='background-color: yellow'>Summer 2024</h2>")
   res.write("<h3 style='border: 3px solid blue'>Greenwich Hanoi</h3>")
   //end (stop) the response
   res.end()
})
//run web server (by listening to port)
server.listen(port, () => {
   //Hold CTRL button + click on URL in terminal to open web automatically
   console.log ('http://localhost:' + port)
})

//How to run code ?
//Terminal: node server | node server.js
//Browser : localhost:1234

//Stop server (in terminal): CTRL + C

//install and use "nodemon" (node monitor) to auto reload server if codes change
//Terminal : npm install -g nodemon
//Usage    : nodemon server
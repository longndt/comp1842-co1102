//declare & import 'express' library
const express = require('express')

//delare "fs" (file system) library
const fs = require('fs')

//declare server port
const port = 3000

//declare "app" server as "express" instance
const app = express()

//run server by listening to port
app.listen(port)

//display homepage
app.get("/", (req, res) => {
   res.setHeader('Content-Type', 'text/html')
   fs.readFile('views/index.html', (err, data) => {
      if (err) {
         console.error ('Read file error !')
      } else {
         res.write(data)
      }
      res.end()
   })
})

//display login page
app.get("/login", (req, res) => {
   res.setHeader('Content-Type', 'text/html')
   res.write("This is login page")
   res.end()
})

//display welcome page
app.get("/welcome", (req, res) => {
   res.send("<h1>Welcome to my web app</h1>")
})

//console.log('Server is running at http://localhost:' + port)
console.log(`Server is running at http://localhost:${port}`)

//Run web app in terminal : npm start
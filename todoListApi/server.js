const express = require('express')
//"process.env.PORT" is optional, only necessary for cloud deployment
//you can set any port number except duplicated port with other web apps
const port = process.env.PORT || 3000

//declare and import "mongoose" (work with database)
const mongoose = require('mongoose')

//config mongoose
const db = "mongodb://localhost:27017/api"
mongoose.connect(db)
   .then(() => console.log('connect to db succeed !'))
.catch((err) => console.log('connect to db failed !)' + err))

const app = express()

//declare the router
const todoListRouter = require('./api/routes/todoListRouter')
//register the router
todoListRouter(app)

app.listen(port)
console.log('server is running at http://localhost:' + port)
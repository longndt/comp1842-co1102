const express = require('express')
const port = 3000
const app = express()

//1) declare & config "mongoose"
const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/vocab-builder"
//vocab-builder: database name
mongoose.connect(db)
   .then(() => console.log('ok'))
.catch((err) => console.error(err))

//2) declare & config "body-parser"
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//3) declare & config "cors"
const cors = require('cors')
app.use(cors())

//4) define & register router
const vocabRouter = require('./api/routes/vocabRouter')
vocabRouter(app)

app.listen(port)

//Run web app in terminal : npm start
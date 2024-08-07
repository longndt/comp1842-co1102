const express = require('express')
const app = express()

//1) declare & config "mongoose"
const mongoose = require('mongoose')
//A. replace local db with cloud db (mongo atlas)
const db = "mongodb+srv://longndt:SwZZ3QRJ5YFMLYlc@cluster0.ziyavjz.mongodb.net/vocab-builder"
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

//B.config server port for cloud deployment
const port = process.env.PORT || 3001
app.listen(port)

//Run web app in terminal : npm start
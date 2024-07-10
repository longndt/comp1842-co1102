const express = require('express')
//"process.env.PORT" is optional, only necessary for cloud deployment
//you can set any port number except duplicated port with other web apps
const port = process.env.PORT || 5678
const app = express()

app.listen(port)
console.log('server is running at http://localhost:' + port)
const http = require('http')
const server = http.createServer((req, res) => {
   if (req.url == '/') {
      res.setHeader('Content-Type', 'text/html')
      res.write("<h1>Greenwich Vietnam</h1>")
      res.end()
   } else if (req.url == '/hanoi') {
      res.setHeader('Content-Type', 'text/html')
      res.write("<h1>Greenwich Hanoi</h1>")
      res.end()
   } else if (req.url == '/danang') {
      res.setHeader('Content-Type', 'text/html')
      res.write("<h1>Greenwich Danang</h1>")
      res.end()
   } else if (req.url == '/vietnam') {
      //res.writeHead(200, {'Content-Type' : 'application/json'})
      res.setHeader('Content-Type', 'application/json')
      res.write(JSON.stringify({ capital: "Hanoi" }))
      res.end()
   } else {
      res.setHeader('Content-Type', 'text/html')
      res.write("404 - Page not found !")
      res.end()
   }
})
server.listen(8888, () => {
   console.log('http://localhost:8888')
})
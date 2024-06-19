const http = require("http");
http.createServer((req, res) => {
   if (req.url == "/") {
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>This is homepage</h1>");
      res.write("<h1>Web Programming 2</h1>");
      res.write("<h1>Advanced Microservices</h1>");
      res.end();
   }
   else if (req.url == "/hello") {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(
         { "message": "hello greenwich vietnam !" }
      ));
      res.end();
   }
   else if (req.url == "/about")
      res.end("<h1>About Page</h1>");
   else
      res.end("<h1>404 - Page Not Found !</h1>");
}).listen(3456, () => {
   console.log("http://localhost:3456");
});
//import and declare "http" module (package/library)
const http = require('http');

//create web server
const server = http.createServer((request, response) => {
   //set header for html content
   response.setHeader("Content-Type", "text/html");
   //display content
   response.write("<i>hello world ! </i>");
   response.write("<h1>web programming 2 - comp1842</h1>");
   response.write("<p style='color: red'>Greenwich Vietnam</p>");
   response.write("<h3>Euro 2024 is happening in Germany</h3>");
   //end (complete) the response : IMPORTANT
   response.end();
});

//set server port
//3000: default port of NodeJS server
var port = 5000;

//run web server by listening port
server.listen(port, () => {
   //hold CTRL button & click on given link to open web page in browser
   console.log("Web server is running at http://localhost:" + port);
});


// npm install -g nodemon    | nodemon: node monitor
// nodemon server            | server : file name
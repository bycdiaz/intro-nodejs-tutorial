// line 2 includes the http module through the use of the require function
const http = require("http");
const dt = require("./myDateModule");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
  })
  .listen(8080);

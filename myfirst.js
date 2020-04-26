// line 2 includes the http module through the use of the require function
const http = require("http");
// const dt = require("./myDateModule");
const url = require("url");

http
  // create server with .createServer()
  .createServer(function (req, res) {
    // add content type with writeHead()
    res.writeHead(200, { "Content-Type": "text/html" });
    // Shows info from imported myDateModule
    // res.write("The date and time are currently: " + dt.myDateTime());
    // URL property of the req argument passes text after / in URL
    // res.write(req.url);

    // splits query string
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
    res.end(txt);
  })
  .listen(8080);

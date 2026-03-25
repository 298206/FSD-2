// write node js programme to load a simple html file defind as static on node js web server print
// as its content has html content.

var http = require("http")
var fs = require("fs")
var u = require("url")

var adder = "http://localhost:6051/demo.html"

var q = u.parse(adder, true);
http.createServer(
    function (req, res) {
        fs.readFile("." + q.pathname, function (err, data) {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" })
                res.end("404 Page Not Found")
            }
            else {
                res.writeHead(200, { "Content-Type": "text/html" })
                res.end(data)
            }
        }
        )
    }).listen(6051)
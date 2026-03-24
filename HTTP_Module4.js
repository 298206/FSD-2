// create one page with two links /home and /about both pages must contain relevant html type content,if user add
// any other url path then it will be redirected to the page which shows plain msg page not found.

var http = require("http")
var fs = require("fs")
http.createServer(
    function (req, res) {
        if (req.url === "/home") {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end("<h1>Home page</h1>")
        }
        else if (req.url === "/about") {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end("<h1>About page</h1>")
        }
        else {
            res.writeHead(404, { "Content-Type": "text/plain" })
            res.end("Page not found")
        }
    }).listen(3120)

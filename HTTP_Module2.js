// http module with image/png

var http = require("http")
var fs = require("fs")
http.createServer(
    function (req, res) {
        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end("<h1>Welcome to my website</h1> <img src='Image.png'/>")
        }
        else if (req.url === "/Image.png") {
            img = fs.readFileSync("Image.png")
            res.writeHead(200, { "Content-Type": "image/png" })
            res.end(img)
        }
    }).listen(3120)
// HTTP Module:--
// port range: 0 to 65535
// used port 3000,5000,8000 series

var http = require("http")
http.createServer(
    function (req, res) {
        res.writeHead(200, { "Content-Type": "application/json" })
        const data = {
            name: "John",
            age: 30,
        }
        res.end(JSON.stringify(data))
    }).listen(3120)

// "Content-Type": text/html , text/plain , application/json , image/jpeg , image/png , application/pdf , application/xml
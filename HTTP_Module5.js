// write node script to fetch values from url and display output as asked.
// 1. data must be written in file exam.txt file name must be fetch from url
// 2. read the content from file and send responce to server and display data in "/" page in same formate
// but h1 tag and red color
// 3. if any other page is requested then it will show page not found in plain text

var http = require("http");
var u = require("url");
var fs = require("fs");

var adder = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Wlcm to LJU#Allthebest";
var q = u.parse(adder, true);

// 1. Fetch filename (remove the leading slash) and data
var filename = q.pathname.substring(1); // Result: "exam.txt"
var qdata = q.query;
var hash = q.hash || ""; // Get the #Allthebest part

var filecontent = qdata.c1 + "\n" + qdata.c3 + "\n" + qdata.c2 + "\n" + hash;

// Write data to the file
fs.writeFileSync(filename, filecontent);

// 2. Create server
http.createServer(function (req, res) {
    if (req.url === "/") {
        // Read the content back from the file as requested
        var dataFromFile = fs.readFileSync(filename, "utf-8");

        res.writeHead(200, { "Content-Type": "text/html" });
        // Use <pre> tag inside h1 to preserve the line breaks (\n)
        res.end("<h1 style='color:red'><pre>" + dataFromFile + "</pre></h1>");
    } else {
        // 3. Handle other pages
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("page not found");
    }
}).listen(3120);

console.log("Server running at http://localhost:3120");

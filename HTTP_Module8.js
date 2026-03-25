// create http web page on which home page display welcome to login page in blue
// color and font size must be 32px login page show 1 html file from static url.
// static url having form with detail username, password, submit and reset Button.
// Gallary page reflect 1 image hello.jpg and any other page shows page not found.

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // 1. Home Page
    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1 style="color: blue; font-size: 32px;">welcome to login page</h1>');
    }

    // 2. Login Page
    else if (pathname === '/login') {
        fs.readFile('./login.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("File not found");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }

    // 3. Gallery Page
    else if (pathname === '/gallery') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<img src="hello.jpg" alt="Image not found">');
    }

    // 4. Handle the Static Image Request
    else if (pathname === '/hello.jpg') {
        fs.readFile('./hello.jpg', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(data);
            }
        });
    }

    // 5. Any other page: Page Not Found
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('page not found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

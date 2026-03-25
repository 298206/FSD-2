// write a nodejs script on which home page dosplays welcome to login page 
// in blue color and font size must be 32 px
// Login page shows 1 html file from static url having form with details for 
// username, password, submit and reset button, 
// gallery page reflects 1 image hello.jpg 
// and any other page shows page not found. 

const http = require('http');
const fs = require('fs');
process.noDeprecation = true;

http.createServer((req,res) => {
    if(req.url === '/' | req.url === '/home') {
        res.writeHead(
            200, {
                'Content-Type': 'text/html'
            }
        )
        res.end(`<p style = "color: blue; font-size: 32px">Welcome to Login Page</p>`)
    } else if(req.url === '/login.html') {
        res.writeHead(
            200, {
                'Content-Type': 'text/html'
            }
        )
        res.end(fs.readFileSync(`.${req.url}`), 'utf-8')
    } else if(req.url === '/gallery') {
        res.writeHead(
            200, {
                'Content-Type': 'image/jpg'
            }
        )
        res.end(fs.readFileSync('hello.jpg'))
    }
    else {
        res.writeHead(
            404, {
                'Content-Type': 'text/plain'
            }
        )
        res.end('Page not found. ')
    }
}).listen(3120);
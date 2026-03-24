// write node js to print query string of url in url.txt file using callback function

var u = require("url")
var fs = require("fs")
adder = "http://localhost:8080/detail.html?name=xyz&age=20"
// q = u.parse(adder, true)
// process.noDeprecation = true
// data = JSON.stringify(q.query)
// fs.writeFile("url.txt", data, (err) => {
//     if (err)
//         throw err
//     console.log("file written successfully")

// })

// OR
q = u.parse(adder, false)
process.noDeprecation = true
data = q.query
fs.writeFile("url.txt", data, (err) => {
    if (err)
        throw err
    console.log("file written successfully")

})
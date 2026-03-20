// write a node js to handle event to write data,append data and then read the file display a data in console do all the operations
// to async file system module

const ee = require('events');
const e = new ee();
var fs = require("fs")


e.on("append", () => {
    fs.appendFile("data.txt", "world", (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("append.")
            e.emit("read")
        }
    })
})

e.on("read", () => {
    fs.readFile("data.txt", "utf-8", (err, data) => {
        if (err) {
            throw err
        }
        else {
            console.log(data)
        }
    })
})

e.on("write", () => {
    fs.writeFile("write.txt", "hello", (err) => {
        if (err) {
            throw err
        }
        else {
            console.log("file writen.")
            e.emit("append")
        }
    })
})

e.emit("write")
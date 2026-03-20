// write a node js script using event handling to perform following task:
// 1. create a folder named abc
// 2. create a file named xyz.txt and write data into it.
// 3. append that data to that file and print msg data appened succesfully
// 4. read the content of file and print on console
// 5. copy content from xyz.txt --> pqr.txt
// 6. delete the file xyz.txt and print the msg all operations perform succesfully.
//  all do operations using sync file system module

var fs = require("fs")
const ee = require('events');
const e = new ee();

e.on("create", () => {
    fs.mkdirSync("abc")
    e.emit("createFile")
})
e.on("createFile", () => {
    fs.writeFileSync("abc/xyz.txt", "How are u?")
    e.emit("append")
})
e.on("append", () => {
    fs.appendFileSync("abc/xyz.txt", "helloo")
    console.log("append sucessfully.")
    e.emit("read")

})
e.on("read", () => {
    console.log(fs.readFileSync("abc/xyz.txt", "utf-8"))
    e.emit("copy")
})
e.on("copy", () => {
    fs.copyFileSync("abc/xyz.txt", "abc/pqr.txt")
    e.emit("delete")
})
e.on("delete", () => {
    fs.unlinkSync("abc/xyz.txt")
    console.log("deleted")
})
e.emit("create")
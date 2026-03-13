var fs = require("fs")
// fs.mkdirSync("node") : create a directory

// fs.writeFileSync("node/write.txt", "Be kind") : write a File

// fs.appendFileSync("node/write.txt", " to everyone") : append a file

// data = fs.readFileSync("node/write.txt", "utf-8")
// console.log(data)
// console.log(data.toString())

// 2 ways to read the file: toString OR utf-8

// fs.renameSync("node/write.txt", "node/readwrite.txt") : rename a file

// fs.unlinkSync("node/readwrite.txt") : delete a file

fs.rmdirSync("node")
// write node js script to write an array of object with properties cricketers name and
//  it's number in a file named cricketer.txt then the read file and display the object on console.

let obj = {
    "person":
        [
            {
                "name": "Riya",
                "age": 20
            },
            {
                "name": "preet",
                "age": 18
            },
            {
                "name": "Sarva",
                "age": 24
            }
        ]
}
d = JSON.stringify(obj)
var fs = require("fs")

// fs.writeFileSync("file.txt", d)
data = fs.readFileSync("file.txt", encoding = "utf-8")
console.log(JSON.parse(data))

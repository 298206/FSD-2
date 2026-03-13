// <!--Read data from file and arrange that data in asending order

var fs = require("fs")
// fs.writeFileSync("write.txt", "50 -1 99 100 200 56 78 59")

data = fs.readFileSync("write.txt", encoding = "utf-8")
data1 = data.split(" ")
d = data1.sort((a, b) => a - b)
console.log(d)
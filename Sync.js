// Create JSON object which contains array of objects, calculate parameter of square,
// parameter of circle by using side value and diameter value respectively.
// write object as well as parameter values in shape.txt file.

shape =
    [
        {
            "name": "square",
            "side": 8
        },
        {
            "name": "circle",
            "diameter": 10
        }
    ]
d = JSON.stringify(shape)
var fs = require("fs")

fs.writeFileSync("shape.txt", d)
data = fs.readFileSync("shape.txt", encoding = "utf-8")
b = JSON.parse(data)

c_peri = 2 * 3.14 * (b[1].diameter / 2)
console.log(c_peri)

s_peri = 4 * (b[0].side)
console.log(s_peri)

fs.appendFileSync("shape.txt", "Circle: " + c_peri + "\n Square: " + s_peri)



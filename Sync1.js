// write node js script to perfoem below task
// 1. write below object in f2.txt file { d: { a: 10, b: 20, c: [30, 10] } }
// 2.read data from the same file and perform only following task:

// 1. addition of a and b
// 2. sub.of 2nd element of c and b(must be a positive)
// 3. mul.of elements c

// 3. add the o / p of addition, sub. , and mul.in f2.txt file


obj = { d: { a: 10, b: 20, c: [30, 10] } }

d = JSON.stringify(obj)
var fs = require("fs")

fs.writeFileSync("f2.txt", d)
data = fs.readFileSync("f2.txt", encoding = "utf-8")
b = JSON.parse(data)

add = b.d.a + b.d.b
console.log(add)

sub = Math.abs(b.d.c[1] - b.d.b)
console.log(sub)

mul = b.d.c[0] * b.d.c[1]
console.log(mul)

fs.appendFileSync("f2.txt", "addition: " + add + "Subtraction: " + sub + "Multification: " + mul)
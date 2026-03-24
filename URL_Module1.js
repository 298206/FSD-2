// write a node js to pass a url as an aregument and print the url using url module find average value

var u = require("url")
adder = "http://localhost:8080/test?m1=50&m2=60&m3=70"
q = u.parse(adder, true)
process.noDeprecation = true
qdata = q.query
v1 = parseInt(qdata.m1)
v2 = parseInt(qdata.m2)
v3 = parseInt(qdata.m3)
console.log(v1, v2, v3)
total = v1 + v2 + v3
avg = total / 3
console.log("Average marks: " + avg)



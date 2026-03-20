var u = require("url")
adder = "http://localhost:8080/default.html?year=2025&month=march"
q = u.parse(adder, true)
process.noDeprecation = true
// remove an error
console.log(q)
qdata = q.query
console.log(qdata.year)
year = qdata.year
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("leap year")
}
else {
        console.log("Not leap year")
}
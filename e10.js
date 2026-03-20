// PB: 88
var obj = {
    "division1": [6, 7, 8, 9, 10],
    "division2": [2, 3, 2, 3, 2],
    "result": []
}
var fs = require("fs")

fs.writeFileSync("PB88.txt", obj.division1 + "\n" + obj.division2)

for (i in obj.division1) {
    obj.result[i] = Math.pow(obj.division1[i], obj.division2[i])
}

fs.appendFileSync("PB88.txt", "\nSolution after a^b " + obj.result)

console.log(obj.result)

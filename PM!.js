var pm = require("path")

path = pm.basename("D:/Riyaa/PM.html")
console.log(path)

path1 = pm.dirname("D:/Riyaa/PM.html")
console.log(path1)

ext = pm.extname("D:/Riyaa/PM.html")
console.log(ext)

path2 = pm.parse("D:/Riyaa/PM.html")
console.log(path2)

console.log(path2.name)
var fs = require("fs");

fs.writeFileSync("Exam.txt","Exam attempt");
fs.appendFileSync("Exam.txt","\nEntry 1 : Pass\nEntry 2 : Fail\nEntry 3 : Pass")

data = fs.readFileSync("Exam.txt","utf-8").split("Pass")
console.log(data.length-1)
if(data.length-1 >= 3){
    fs.writeFileSync("Exam.txt","")
}


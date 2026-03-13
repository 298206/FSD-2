var fs = require("fs")

fs.writeFile("test.txt",
    "Hellooo",
    function (err) {
        if (err) {
            console.log("error: " + err);
        }
        else {
            console.log("err")
        }
        console.log("write operation ")
    }
);
console.log("outside")

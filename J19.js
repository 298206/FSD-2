
//  write data to file,append data to file , read the file using use callback.

var fs = require("fs")

fs.writeFile("node.txt",
    "Hellooo",
    function (err) {
        if (err) {
            console.log("error: " + err);
        }
        else {
            // console.log("success")
            fs.appendFile("node.txt", "How are u", function (err1) {
                if (err1) {
                    console.log("fail: ", err1)
                }
                else {
                    // console.log("succesful")
                    fs.readFile("node.txt", "utf-8", (err, data) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            console.log(data)
                        }
                    })

                }
            })
        }
    }
);

// write node js to copy content of 1 file to another file data shoyuld be fetch from source.txt and
//  insert to destination.txt and read data from destination file end the end perform all the task async.

var fs = require("fs")

fs.writeFile("source.txt",
    "Hellooo",
    function (err) {
        if (err) {
            console.log("error: " + err);
        }
        else {
            data = fs.readFile("source.txt", "utf-8", function (err1, data) {
                if (err1) {
                    console.log("fail: ", err1)
                }
                else {
                    fs.writeFile("dest.txt", data, (err) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            d1 = fs.readFile("dest.txt", "utf-8", (err, d1) => {
                                if (err) {
                                    console.log("Error: ", err)
                                }
                                else {
                                    console.log(d1)
                                }
                            })
                        }
                    })

                }
            })
        }
    }
);

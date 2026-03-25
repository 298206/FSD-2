var fs = require("fs");
fs.writeFile("help.txt", "you are creating a file", function (err) {
    if (err) {
        console.log(err);
    }
    else {
        fs.appendFile("help.txt", "\nyou are appending a data", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                fs.readFile("help.txt", "utf-8", function (err, data) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log(data)
                        fs.copyFile("help.txt","help2.txt",function(err){
                            if(err){
                                console.log(err)
                            }
                            else{
                                console.log("Thanks for using this program");
                            }
                        })
                    }
                })
            }
        })
    }
})

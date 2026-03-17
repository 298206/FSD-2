// write node js to write the text "you are creating file" to help.txt after that append the text "you are appending
// data" to same hepl.txt file after that read the file and print content on console
// after finishing read operation copy of the content of help.txt file to help2.txt file
// after finishing copy operation print the line thanks for using this programme
//  write append,write,read and copy


var fs = require('fs')
fs.writeFile("help.txt", "You are creating the file", (err) => {
    if (err) {
        console.log("Error: ", err)
    } else {
        console.log("File created successfully");
        fs.appendFile("help.txt", "You are appending data", (err2) => {
            if (err2) {
                console.log("Error: ", err2)
            } else {
                console.log("Data appended successfully");
                data = fs.readFile("help.txt", "utf-8", (err3, data) => {
                    if (err3) {
                        console.log("Error: ", err3)
                    } else {
                        console.log("File read successfully");
                        fs.copyFile("help.txt", "help2.txt", (err4) => {
                            if (err4) {
                                console.log("Error: ", err4)
                            } else {
                                console.log("File copied successfully");
                                console.log("Thanks For using this program")
                            }
                        })
                    }
                })
            }
        })
    }
})
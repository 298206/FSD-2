// write a node js that performs the following operations using path module and
// Async file system module
// 1. from a given existing file path extract the directory name using path module
// 2. create the ertract directory inside and existing folder using fs module
// 3. extract the file name from the given path using path module
// 4. create that file inside the newly create directory and write some data into it
// 5. copy the content of this file to another file
// 6. delete the origional file after the copy content

var fs = require("fs")
var pm = require("path")

// 1.
dir = pm.dirname("D:/Riyaa/ABC/Sync11.txt")
console.log(dir)

// 3.
filename = pm.basename("D:/Riyaa/ABC/Sync11.txt")
console.log(filename)

// 2.
newfilepath = dir + '/' + filename

fs.mkdir(dir, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        fs.writeFile(newfilepath, "hello", (err) => {
            if (err) {
                console.log(err)
            }
            else {
                fs.copyFile(newfilepath, dir + "/new.txt", (err) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        fs.unlink(newfilepath, (err) => {
                            if (err) {
                                console.log(err)
                            }
                            else {
                                console.log("deleted")
                            }
                        })
                    }
                })
            }
        })
    }
})
var fs = require("fs")
fs.writeFile("source1.txt", "Good Afternoon", (err) => {
    if (err) throw err
    console.log("file copied")
    fs.copyFile("source1.txt", "dest1.txt", (err) => {
        if (err) throw err
        console.log("file copied")

        fs.readFile("dest1.txt", "utf-8", (err, data) => {
            if (err) throw err
            console.log("Destination file")
            console.log(data)
        })
    })
})

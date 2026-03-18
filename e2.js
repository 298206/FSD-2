const ee = require("events")

e2 = new ee()
e2.on('front', (start, end) => {
    console.log(`started from ${start} to ${end}`)
})
e2.emit("front", 1, 100)
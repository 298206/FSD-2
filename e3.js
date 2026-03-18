// write node js programme using events module to simulate a sequence of events
// 1. when connection event occurs print connection succesfully and trigger a data recived event
// 2. when the data recived event occurs print data recived succesfully
// 3. finally print thanks at the end of the execution.

const ee = require("events")

e3 = new ee()
e3.on('greet1', () => {
    console.log("connection succesfull.")
    e3.emit('data')
})
e3.on('data', () => {
    console.log("data recived.")
})
e3.emit('greet1')

console.log("Thanks")
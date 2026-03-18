// create a node js programme using events module
// 1. restering multiple event listner for different events(mye1,mye2)
// 2. removing specfic event listner for mye2
// 3. removing all listners associated with mye1
// 4. triggering events and observing which listners excute.

const e4 = require("events")

ee = new e4()

fun1 = (msg) => {
    console.log("Msg from fun-1: " + msg)
}
fun2 = (msg) => {
    console.log("Msg from fun-2: " + msg)
}

ee.on("mye1", fun1)
ee.on("mye1", fun2)
ee.on("mye2", fun1)
ee.on("mye2", fun2)

ee.removeListener("mye2", fun2)
ee.removeAllListeners("mye1")

ee.emit("mye1", "LJ")
ee.emit("mye2", "LJU")
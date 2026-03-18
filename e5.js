// write a node js script to create 2 listners for a common event print number of events associated with an emmiter
// remove one of the listner and call remaining listner again also print number of remaining listner
// at the end remove all the listners and print number of listners remaining.

const e5 = require("events")
e = new e5()

fun1 = (msg) => {
    console.log("Msg from fun-1: " + msg)
}
fun2 = (msg) => {
    console.log("Msg from fun-2: " + msg)
}

e.on("mye1", fun1)
e.on("mye1", fun2)
console.log("Number of listners for myevent: " + e.listenerCount("mye1"))

e.removeListener("mye1", fun2)
console.log("Number of listners for myevent: " + e.listenerCount("mye1"))

e.removeAllListeners("mye1")
console.log("Number of listners for myevent: " + e.listenerCount("mye1"))

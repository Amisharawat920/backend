const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.on("bellRing", (time) => {
    console.log("time is " + time + " Student should visit the class");
});

const student = (time) => {
    console.log("time is " + time + " Student should visit the class");
}
emitter.on("bellRing", student)
// emitter.on("bellRing", () => {
//     console.log("Teacher should start the class");
// });

// emitter.on("bellRing", () => {
//     console.log("security should close the gate");
// });

emitter.emit("bellRing", "10:00 AM");
emitter.off("bellRing", student);
emitter.emit("bellRing", "10:00 AM");

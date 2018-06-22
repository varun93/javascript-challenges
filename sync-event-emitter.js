const EventEmitter = require("events");

class LogEmitter extends EventEmitter {
  execute(fn) {
    console.log("Before executing");
    this.emit("begin");
    fn();
    this.emit("end");
    console.log("After executing");
  }
}

const Logger = new LogEmitter();

Logger.on("begin", () => {
  console.log("Begin Hook");
});

Logger.on("end", () => {
  console.log("End Hook");
});

Logger.execute(() => {
  console.log("..... Now executing ......");
});

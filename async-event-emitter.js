const EventEmitter = require("events");
const fs = require("fs");
const promisify = require("./promisify");

class WithTime extends EventEmitter {
  async execute(asyncFunc, ...args) {
    this.emit("begin");
    try {
      console.time("execute");
      const data = await asyncFunc(...args);
      this.emit("data", data);
      console.timeEnd("execute");
      this.emit("end");
    } catch (err) {
      this.emit("error", err);
    }
  }
}

const readFileAsArray = async file => {
  try {
    const readFile = promisify(fs.readFile);
    const data = await readFile([file]);
    const lines = data
      .toString()
      .trim()
      .split("\n");
    return lines;
  } catch (error) {
    throw new Error(error);
  }
};

const withTime = new WithTime();

withTime.on("begin", () => console.log("About to execute"));
withTime.on("end", () => console.log("Done with execute"));
withTime.on("data", data => {
  console.log(data);
});
withTime.on("error", error => {
  console.log(error);
});

const filename = "test.txt";
withTime.execute(readFileAsArray, filename);

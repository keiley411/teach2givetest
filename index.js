const EventEmitter = require("events");
const LogEvents = require("./LogEvents");

const Logger = new EventEmitter();

Logger.on("log-event", (message) => {
  LogEvents({ message });
});

setInterval(() => {
  Logger.emit("log-event", "new log event emmited");
}, 2000);

const fs = require("fs");
const fsPromises = require("fs").promises;
const Uuid = require("uuid");
const DateFns = require("date-fns");
const path = require("path");

const LOGS_FOLDER = path.join(__dirname, "logs");
const EVENT_FILE = path.join(LOGS_FOLDER, "eventLogs.txt");

const LogEvents = async ({ message }) => {
  if (!fs.existsSync(LOGS_FOLDER)) {
    await fsPromises.mkdir(LOGS_FOLDER);
  }
  const eventId = Uuid.v4();
  const eventDate = DateFns.format(new Date(), "MM/dd/yyyy HH:mm:ss");
  const event = {
    id: eventId,
    date: eventDate,
    message,
  };
  await fsPromises.appendFile(EVENT_FILE, JSON.stringify(event)+"\n");
};
module.exports = LogEvents;

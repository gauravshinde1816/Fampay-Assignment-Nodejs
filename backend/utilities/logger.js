const Winston = require("winston");
const { createLogger, format, transports, addColors } = require("winston");
const { combine, timestamp, label, printf } = format;

const LogFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

var filename = module.filename.split("/").slice(-1);

const logger = createLogger(
  {
    level: "info",
    format: combine(timestamp(), LogFormat),
    transports: [
      new transports.Console(),
      new transports.File({ filename: "error.log", level: "error" }),
      new transports.File({ filename: "combined.log" }),
    ],
  },
);

module.exports = logger;

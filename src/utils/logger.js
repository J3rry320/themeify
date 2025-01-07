const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});

function startLoader(message) {
  logger.info(`⏳ ${message}...`);
}

function logSuccess(message) {
  logger.info(`✔ ${message}`);
}

function logError(message) {
  logger.error(`✖ ${message}`);
}

function logInfo(message) {
  logger.info(`ℹ ${message}`);
}

module.exports = { startLoader, logSuccess, logError, logInfo };

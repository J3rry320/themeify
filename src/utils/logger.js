const ora = require("ora");
const chalk = require("chalk");

function startLoader(message) {
  const spinner = ora(message).start();
  return spinner;
}

function logSuccess(message) {
  console.log(chalk.green(`✔ ${message}`));
}

function logError(message) {
  console.log(chalk.red(`✖ ${message}`));
}

function logInfo(message) {
  console.log(chalk.blue(`ℹ ${message}`));
}

module.exports = { startLoader, logSuccess, logError, logInfo };

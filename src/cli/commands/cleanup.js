const fs = require("fs");
const path = require("path");
const { logInfo, logError, logSuccess } = require("../../utils/logger");

function cleanup({ directory }) {
  try {
    if (!directory) {
      throw new Error("Please specify a directory using --directory.");
    }

    const dirPath = path.resolve(process.cwd(), directory);
    if (!fs.existsSync(dirPath)) {
      throw new Error(`Directory does not exist: ${dirPath}`);
    }

    logInfo(`Cleaning up files in directory: ${dirPath}...`);
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      fs.unlinkSync(path.join(dirPath, file));
    });

    logSuccess(`Cleanup completed for directory: ${dirPath}`);
  } catch (error) {
    logError(`Error during cleanup: ${error.message}`);
  }
}

module.exports = cleanup;

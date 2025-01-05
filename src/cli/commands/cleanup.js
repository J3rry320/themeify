const fs = require("fs");
const path = require("path");
const { logSuccess, logError } = require("../utils/logger");

function cleanupFiles(targetDir) {
  try {
    const files = fs.readdirSync(targetDir);
    files.forEach((file) => fs.unlinkSync(path.join(targetDir, file)));
    logSuccess("Cleanup successful!");
  } catch (error) {
    logError("Error during cleanup: " + error.message);
  }
}

module.exports = { cleanupFiles };

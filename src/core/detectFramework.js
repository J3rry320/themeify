const fs = require("fs");
const path = require("path");
const { logInfo, logError } = require("../utils/logger");

function detectFramework() {
  try {
    logInfo("Detecting framework...");
    const packageJsonPath = path.resolve(process.cwd(), "package.json");

    if (!fs.existsSync(packageJsonPath)) {
      throw new Error("package.json not found in the current directory.");
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    const dependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };

    if (dependencies["@mui/material"]) {
      logInfo("Framework detected: MUI");
      return "mui";
    }
    if (dependencies["tailwindcss"]) {
      logInfo("Framework detected: Tailwind CSS");
      return "tailwind";
    }
    if (dependencies["bootstrap"]) {
      logInfo("Framework detected: Bootstrap");
      return "bootstrap";
    }
    if (dependencies["@shadcn/ui"]) {
      logInfo("Framework detected: Shadcn UI");
      return "shadcn";
    }

    logInfo("No specific framework detected. Falling back to CSS.");
    return "css";
  } catch (error) {
    logError(`Error detecting framework: ${error.message}`);
    return "css"; // Default to CSS fallback
  }
}

module.exports = { detectFramework };

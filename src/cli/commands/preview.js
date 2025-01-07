const cliColor = require("cli-color");
const palettes = require("../../themes/palettes");
const { logError } = require("../../utils/logger");
const hexToXterm = require("../../utils/colour");
const themes = require("../../themes/themes");

function preview({ paletteName }) {
  if (!paletteName) {
    logError("Please specify a palette name using --paletteName.");
    process.exit(1);
  }
  const colors = palettes[paletteName] || themes[paletteName];
  if (!colors) {
    logError("Invalid palette name.");
    process.exit(1);
  }

  console.log(
    cliColor.bgXterm(hexToXterm(colors.primary))("    "),
    cliColor.bold("Primary: ") + colors.primary
  );
  console.log("\n");
  console.log(
    cliColor.bgXterm(hexToXterm(colors.secondary))("    "),
    cliColor.bold("Secondary: ") + colors.secondary
  );
  console.log("\n");
  console.log(
    cliColor.bgXterm(hexToXterm(colors.error))("    "),
    cliColor.bold("Error: ") + colors.error
  );
  console.log("\n");
  console.log(
    cliColor.bgXterm(hexToXterm(colors.warning))("    "),
    cliColor.bold("Warning: ") + colors.warning
  );
  console.log("\n");
  console.log(
    cliColor.bgXterm(hexToXterm(colors.info))("    "),
    cliColor.bold("Info: ") + colors.info
  );
  console.log("\n");
  console.log(
    cliColor.bgXterm(hexToXterm(colors.success))("    "),
    cliColor.bold("Success: ") + colors.success
  );
}

module.exports = { preview };

const cliColor = require("cli-color");
const palettes = require("../../themes/palettes");

function previewTheme({ palette }) {
  const colors = palettes[palette];
  if (!colors) {
    console.error("Invalid palette name.");
    return;
  }

  console.log(
    cliColor.bgXterm(27)("    "),
    cliColor.bold("Primary: ") + colors.primary
  );
  console.log(
    cliColor.bgXterm(161)("    "),
    cliColor.bold("Secondary: ") + colors.secondary
  );
  console.log(
    cliColor.bgXterm(88)("    "),
    cliColor.bold("Error: ") + colors.error
  );
  console.log(
    cliColor.bgXterm(214)("    "),
    cliColor.bold("Warning: ") + colors.warning
  );
  console.log(
    cliColor.bgXterm(45)("    "),
    cliColor.bold("Info: ") + colors.info
  );
  console.log(
    cliColor.bgXterm(64)("    "),
    cliColor.bold("Success: ") + colors.success
  );
}

module.exports = previewTheme;

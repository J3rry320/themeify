const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const { logInfo, logError, logSuccess } = require("../utils/logger");
const fonts = require("../themes/fonts");
const palettes = require("../themes/palettes");
const themes = require("../themes/themes");

function ensureDirectoryExistence(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
    logSuccess(`Directory created: ${directoryPath}`);
  }
}

function generateFiles(framework, config) {
  try {
    logInfo(`Generating files for framework: ${framework}...`);

    const templatePath =
      framework.toLowerCase() === "css"
        ? path.resolve(__dirname, "../templates/cssTheme.hbs")
        : path.resolve(
            __dirname,
            `../templates/${framework.toLowerCase()}Theme.hbs`
          );

    const outputPath =
      framework.toLowerCase() === "css"
        ? path.resolve(process.cwd(), "./style/theme.css")
        : path.resolve(
            process.cwd(),
            `./theme/${framework.toLowerCase()}Theme.js`
          );

    // Ensure the required directories exist
    ensureDirectoryExistence(path.resolve(process.cwd(), "./theme"));
    ensureDirectoryExistence(path.resolve(process.cwd(), "./style"));

    logInfo(`Reading template from: ${templatePath}`);
    const template = fs.readFileSync(templatePath, "utf-8");

    logInfo("Compiling template with configuration...");
    const compiled = handlebars.compile(template);

    logInfo(`Generating content and writing to: ${outputPath}`);
    let data;
    if (config.theme) {
      const theme = themes[config.theme.split(" ")[0].toLowerCase()];
      console.log({ theme }, config.theme);
      if (!theme) {
        logError("Please provide a valid theme name");
        process.exit(1);
      }
      data = { ...theme };
    } else {
      let palette = palettes[config.palette];
      let font = fonts.find((ele) => ele === config.font);
      if (!palette || !font) {
        logError("Please provide a valid palette name or font name");
        process.exit(1);
      }
      data = {
        ...palette,
        font,
      };
    }
    console.log({ data });

    const content = compiled(data);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, content);

    logSuccess(`Files generated and saved to: ${outputPath}`);
    return outputPath;
  } catch (error) {
    logError(`Error generating files: ${error.message}`);
    process.exit(1); // Rethrow error for further handling
  }
}

module.exports = { generateFiles };

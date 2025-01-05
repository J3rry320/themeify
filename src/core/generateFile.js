const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const { logInfo, logError, logSuccess } = require("../utils/logger");
const fonts = require("../themes/fonts");
const palettes = require("../themes/palettes");
const themes = require("../themes/themes");

function generateFiles(framework, config) {
  try {
    logInfo(`Generating files for framework: ${framework}...`);

    const templatePath =
      framework.toLowerCase() === "css"
        ? path.resolve(__dirname, "../themes/cssTheme.hbs")
        : path.resolve(
            __dirname,
            `../themes/${framework.toLowerCase()}Theme.hbs`
          );

    const outputPath =
      framework.toLowerCase() === "css"
        ? path.resolve(process.cwd(), "./style/theme.css")
        : path.resolve(
            process.cwd(),
            `./theme/${framework.toLowerCase()}Theme.js`
          );

    logInfo(`Reading template from: ${templatePath}`);
    const template = fs.readFileSync(templatePath, "utf-8");

    logInfo("Compiling template with configuration...");
    const compiled = handlebars.compile(template);

    logInfo(`Generating content and writing to: ${outputPath}`);
    let data;
    if (config.theme) {
      if (!themes[config.theme]) {
        logError("Please provide a valid theme name");
        process.exit(1);
      }
      data = { ...themes[config.theme] };
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
    console.log(data);
    const content = compiled(data);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, content);

    return outputPath;
  } catch (error) {
    logError(`Error generating files: ${error.message}`);
    process.exit(1); // Rethrow error for further handling
  }
}

module.exports = { generateFiles };

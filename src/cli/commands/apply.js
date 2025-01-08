const { generateFiles } = require("../../core/generateFile");
const { detectFramework } = require("../../core/detectFramework");
const { startLoader, logSuccess, logError } = require("../../utils/logger");
const { getThemeConfig } = require("../prompt");

async function applyTheme(options) {
  startLoader("Detecting framework...");
  try {
    const detectedFramework = detectFramework();
    const config = await getThemeConfig();

    const framework =
      options.framework || config.framework || detectedFramework;

    // Override config with CLI options if provided
    if (options.theme) config.theme = options.theme;
    if (options.palette) config.palette = options.palette;
    if (options.font) config.font = options.font;
    if (options.path) config.path = options.path;

    const filePath = generateFiles(framework, config);
    logSuccess(`Theme applied successfully! Files generated at ${filePath}`);
  } catch (error) {
    logError("Error applying theme.");
    logError(error.message);
  }
}

module.exports = { applyTheme };

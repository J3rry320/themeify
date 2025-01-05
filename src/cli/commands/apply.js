const { generateFiles } = require("../../core/generateFile");
const { detectFramework } = require("../../core/detectFramework");
const { startLoader, logSuccess, logError } = require("../../utils/logger");
const { getThemeConfig } = require("../prompts");

async function applyTheme(options) {
  const loader = startLoader("Detecting framework...");
  try {
    const detectedFramework = detectFramework();
    const framework = options.framework || detectedFramework;
    const config = await getThemeConfig();

    // Override config with CLI options if provided
    if (options.theme) config.theme = options.theme;
    if (options.palette) config.palette = options.palette;
    if (options.font) config.font = options.font;

    loader.succeed("Framework detected: " + framework);

    const filePath = generateFiles(framework, config);
    logSuccess(`Theme applied successfully! Files generated at ${filePath}`);
  } catch (error) {
    loader.fail("Error applying theme.");
    logError(error.message);
  }
}

module.exports = { applyTheme };

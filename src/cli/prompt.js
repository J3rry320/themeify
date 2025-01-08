const { Select } = require("enquirer");
const { logInfo, logSuccess } = require("../utils/logger");
const themes = require("../themes/themes");
const fonts = require("../themes/fonts");
const palettes = require("../themes/palettes");
const { fromCamelCase } = require("../utils/common");
const noTheme = "None (Custom Configuration)";
async function getThemeConfig() {
  logInfo(
    "\nWelcome to the Theme Configurator!\n" +
      "- Choose a predefined theme for quick setup.\n" +
      "- If you select 'None,' you can customize your palette and font.\n"
  );

  const frameworkPrompt = new Select({
    name: "framework",
    message: "Select your UI framework:",
    choices: ["MUI", "Tailwind", "None", "ShadCN", "Bootstrap"],
  });

  const themePrompt = new Select({
    name: "theme",
    message: "Would you like to use a predefined theme?",
    choices: [
      noTheme,
      ...Object.keys(themes).map((theme) => ({
        name: fromCamelCase(theme),
        value: theme,
        message: fromCamelCase(theme),
      })),
    ],
  });

  const answers = {};
  answers.framework = await frameworkPrompt.run();
  answers.theme = await themePrompt.run();

  if (answers.theme === noTheme) {
    console.log(
      "\nYou chose custom configuration. Let's pick your palette and font!\n"
    );

    const palettePrompt = new Select({
      name: "palette",
      message: "Choose a color palette:",
      choices: Object.keys(palettes),
    });

    const fontPrompt = new Select({
      name: "font",
      message: "Choose a font:",
      choices: [...fonts],
    });

    answers.palette = await palettePrompt.run();
    answers.font = await fontPrompt.run();

    return answers;
  }

  logSuccess(
    `\nYou selected the ${answers.theme} theme. Palette and font are preconfigured for this theme.\n`
  );

  return answers; // Return the selected theme only
}

module.exports = { getThemeConfig, noTheme };

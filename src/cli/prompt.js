const { Select } = require("enquirer");

const { logInfo, logSuccess } = require("../utils/logger");

async function getThemeConfig() {
  logInfo(
    "\nWelcome to the Theme Configurator!\n" +
      "- Choose a predefined theme for quick setup.\n" +
      "- If you select 'None,' you can customize your palette and font.\n"
  );

  const frameworkPrompt = new Select({
    name: "framework",
    message: "Select your UI framework:",
    choices: ["MUI", "Tailwind", "None"],
    // 'Bootstrap', 'ShadCN',
  });

  const themePrompt = new Select({
    name: "theme",
    message: "Would you like to use a predefined theme?",
    choices: [
      { name: "Modern", value: "modern" },
      { name: "Vibrant", value: "vibrant" },
      { name: "None (Custom Configuration)", value: "none" },
    ],
  });

  const answers = {};
  answers.framework = await frameworkPrompt.run();
  answers.theme = await themePrompt.run();

  if (answers.theme === "none") {
    console.log(
      "\nYou chose custom configuration. Let's pick your palette and font!\n"
    );

    const palettePrompt = new Select({
      name: "palette",
      message: "Choose a color palette:",
      choices: ["material", "pastel"],
    });

    const fontPrompt = new Select({
      name: "font",
      message: "Choose a font:",
      choices: ["Roboto", "Lato", "Montserrat", "Open Sans"],
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

module.exports = { getThemeConfig };

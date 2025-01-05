const inquirer = require("inquirer");
const { logInfo, logSuccess } = require("../utils/logger");

async function getThemeConfig() {
  logInfo(
    "\nWelcome to the Theme Configurator!\n" +
      "- Choose a predefined theme for quick setup.\n" +
      "- If you select 'None,' you can customize your palette and font.\n"
  );

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: "Select your UI framework:",
      choices: ["MUI", "Tailwind", "None"],
      // "Bootstrap", "ShadCN",
    },
    {
      type: "list",
      name: "theme",
      message: "Would you like to use a predefined theme?",
      choices: [
        { name: "Modern", value: "modern" },
        { name: "Vibrant", value: "vibrant" },
        { name: "None (Custom Configuration)", value: "none" },
      ],
    },
  ]);

  if (answers.theme === "none") {
    console.log(
      "\nYou chose custom configuration. Let's pick your palette and font!\n"
    );

    const customConfig = await inquirer.prompt([
      {
        type: "list",
        name: "palette",
        message: "Choose a color palette:",
        choices: ["material", "pastel"],
      },
      {
        type: "list",
        name: "font",
        message: "Choose a font:",
        choices: ["Roboto", "Lato", "Montserrat", "Open Sans"],
      },
    ]);

    return { ...answers, ...customConfig };
  }

  logSuccess(
    `\nYou selected the ${answers.theme} theme. Palette and font are preconfigured for this theme.\n`
  );

  return answers; // Return the selected theme only
}

module.exports = { getThemeConfig };

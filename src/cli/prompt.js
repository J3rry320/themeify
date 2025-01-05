const inquirer = require("inquirer");

async function getThemeConfig() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: "Select your UI framework:",
      choices: ["MUI", "Tailwind", "Bootstrap", "ShadCN", "None"],
    },
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
  return answers;
}

module.exports = { getThemeConfig };

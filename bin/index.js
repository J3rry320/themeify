#!/usr/bin/env node

const { Command } = require("commander");
const { applyTheme } = require("../src/cli/commands/apply");
const { preview } = require("../src/cli/commands/preview");
const { cleanup } = require("../src/cli/commands/cleanup");
const displayAsciiArt = require("../src/cli/ascii");

const program = new Command();
displayAsciiArt(); // Display ASCII art.

program
  .name("theme-maker")
  .description("A CLI tool to apply themes to React and Next.js projects")
  .version("1.0.0");

program
  .command("apply")
  .description("Apply a theme to your project")

  .option("--path <path>", "Path to your project")
  .option("--framework <framework>", "UI framework (e.g., MUI, Tailwind, CSS)")
  .option("--theme <theme>", "Theme name")
  .option("--palette <palette>", "Color palette name")
  .option("--font <font>", "Font name")
  .action((options) => {
    console.log(options);
    applyTheme(options);
  });

program
  .command("preview")
  .description(
    "Preview a theme using a specified palette (e.g., --paletteName vibrant)"
  )
  .allowUnknownOption(false)
  .option("-p, --paletteName <name>", "The palette name to preview")
  .option("-t, --themeName <name>", "The theme name to preview")
  .option("-l, --list", "List available palettes and themes")
  .action(preview);

program
  .command("cleanup")
  .description(
    "Clean up generated files in a specific directory (e.g., --directory)"
  )
  .option("--directory <path>", "Directory to clean up")
  .action(cleanup);


program.parse(process.argv);

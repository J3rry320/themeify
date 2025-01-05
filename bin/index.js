#!/usr/bin/env node

const { program } = require("commander");
const applyTheme = require("../src/cli/commands/apply");
const preview = require("../src/cli/commands/preview");
const cleanup = require("../src/cli/commands/cleanup");
const displayAsciiArt = require("../src/cli/ascii");

displayAsciiArt(); // Display ASCII art.

program
  .name("theme-cli")
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
  .action(applyTheme);

program
  .command("preview")
  .description("Preview a theme before applying")
  .action(preview);

program
  .command("cleanup")
  .description("Clean up generated files")
  .action(cleanup);

program.parse(process.argv);

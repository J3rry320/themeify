const figlet = require("figlet");
const chalk = require("chalk");

const art1 = chalk.cyan(figlet.textSync("ThemeMaker", { font: "Standard" }));
const art2 = chalk.green(figlet.textSync("ThemeMaker", { font: "Slant" }));
const art3 = chalk.magenta(figlet.textSync("ThemeMaker", { font: "Big" }));
const art4 = chalk.yellow(figlet.textSync("ThemeMaker", { font: "Small" }));
const art5 = chalk.red(figlet.textSync("ThemeMaker", { font: "Banner" }));
const art6 = chalk.blue(figlet.textSync("ThemeMaker", { font: "Ghost" }));

const arts = [art1, art2, art3, art4, art5, art6];

// Function to load random ASCII art
function displayRandomArt() {
  console.log(arts[Math.floor(Math.random() * arts.length)]);
}

module.exports = displayRandomArt;

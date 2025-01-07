const figlet = require("figlet");
const cliColor = require("cli-color");
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});

function generateAsciiArt(text, font, color) {
  return cliColor[color](figlet.textSync(text, { font: font }));
}

const art1 = generateAsciiArt("ThemeMaker", "Standard", "cyan");
const art2 = generateAsciiArt("ThemeMaker", "Slant", "green");
const art3 = generateAsciiArt("ThemeMaker", "Big", "magenta");
const art4 = generateAsciiArt("ThemeMaker", "Small", "yellow");
const art5 = generateAsciiArt("ThemeMaker", "Banner", "red");
const art6 = generateAsciiArt("ThemeMaker", "Ghost", "blue");

const arts = [art1, art2, art3, art4, art5, art6];

// Function to load random ASCII art
function displayRandomArt() {
  console.log(arts[Math.floor(Math.random() * arts.length)]);
}

module.exports = displayRandomArt;

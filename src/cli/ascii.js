const figlet = require("figlet");
const cliColor = require("cli-color");


function generateAsciiArt(text, font, color) {
  return cliColor[color](figlet.textSync(text, { font: font }));
}

const art1 = generateAsciiArt("ThemeMaker", "Standard", "cyan");
const art2 = generateAsciiArt("ThemeMaker", "Slant", "green");
const art3 = generateAsciiArt("ThemeMaker", "Big", "magenta");
const art4 = generateAsciiArt("ThemeMaker", "Small", "yellow");
const art5 = generateAsciiArt("ThemeMaker", "Banner", "red");
const art6 = generateAsciiArt("ThemeMaker", "Ghost", "blue");
const art7 = generateAsciiArt("ThemeMaker", "Lean", "white");
const art8 = generateAsciiArt("ThemeMaker", "Star Wars", "cyan");
const art9 = generateAsciiArt("ThemeMaker", "Bulbhead", "green");
const art10 = generateAsciiArt("ThemeMaker", "Acrobatic", "yellow");
const art11 = generateAsciiArt("ThemeMaker", "Blocks", "blue");
const art12 = generateAsciiArt("ThemeMaker", "Digital", "red");
const art13 = generateAsciiArt("ThemeMaker", "Epic", "magenta");
const art14 = generateAsciiArt("ThemeMaker", "Roman", "white");
const art15 = generateAsciiArt("ThemeMaker", "Isometric1", "cyan");
const art16 = generateAsciiArt("ThemeMaker", "Cyberlarge", "green");
const arts = new Array(16)
  .fill(null)
  .map((_, index) => eval(`art${index + 1}`));

// Function to load random ASCII art
function displayRandomArt() {
  console.log(arts[Math.floor(Math.random() * arts.length)]);
}

module.exports = displayRandomArt;

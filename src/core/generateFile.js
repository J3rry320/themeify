const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

function generateFiles(framework, config) {
  const templatePath =
    framework.toLowerCase() === "css"
      ? path.resolve(__dirname, "../themes/cssTheme.hbs")
      : path.resolve(
          __dirname,
          `../themes/${framework.toLowerCase()}Theme.hbs`
        );
  const outputPath =
    framework.toLowerCase() === "css"
      ? path.resolve(process.cwd(), "./style/theme.css")
      : path.resolve(
          process.cwd(),
          `./theme/${framework.toLowerCase()}Theme.js`
        );

  const template = fs.readFileSync(templatePath, "utf-8");
  const compiled = handlebars.compile(template);

  const content = compiled(config);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, content);

  return outputPath;
}

module.exports = { generateFiles };

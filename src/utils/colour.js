const convert = require("color-convert");

function hexToXterm(hex) {
  const rgb = convert.hex.rgb(hex);
  return convert.rgb.ansi256(rgb[0], rgb[1], rgb[2]);
}
module.exports = hexToXterm;

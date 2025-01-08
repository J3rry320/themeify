const palettes = require("./palettes");
const fonts = require("./fonts");

module.exports = {
  modern: { ...palettes.material, font: fonts[0] }, // Roboto
  vibrantPastel: { ...palettes.pastel, font: fonts[1] }, // Poppins
  elegantDark: { ...palettes.dark, font: fonts[2] }, // Open Sans
  monochromeBold: { ...palettes.monochrome, font: fonts[3] }, // Lato
  neonFuturistic: { ...palettes.neon, font: fonts[4] }, // Montserrat
  vintageClassic: { ...palettes.vintage, font: fonts[5] }, // Raleway
  vibrantOcean: { ...palettes.ocean, font: fonts[6] }, // Nunito
  forestCalm: { ...palettes.forest, font: fonts[7] }, // Merriweather
  sunsetWarm: { ...palettes.sunset, font: fonts[8] }, // Playfair Display
  materialComfort: { ...palettes.material, font: fonts[9] }, // Cabin
  pastelSerene: { ...palettes.pastel, font: fonts[10] }, // Source Sans Pro
  darkMinimal: { ...palettes.dark, font: fonts[11] }, // Quicksand
  oceanDreamy: { ...palettes.ocean, font: fonts[12] }, // Comfortaa
  forestNatural: { ...palettes.forest, font: fonts[13] }, // Josefin Sans
  sunsetElegant: { ...palettes.sunset, font: fonts[14] }, // Oswald
};

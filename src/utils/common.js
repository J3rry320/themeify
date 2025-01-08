// We are doing this as enquirer is only returning the name and not the value for some reason even if I pass the value in the choices array
function toCamelCase(str) {
  return str
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}
function fromCamelCase(camelStr) {
  return camelStr
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
}

module.exports = { toCamelCase, fromCamelCase };

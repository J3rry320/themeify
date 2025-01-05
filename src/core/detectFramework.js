function detectFramework(dependencies) {
  if (dependencies["@mui/material"]) return "mui";
  if (dependencies["tailwindcss"]) return "tailwind";
  if (dependencies["bootstrap"]) return "bootstrap";
  if (dependencies["@shadcn/ui"]) return "shadcn";
  return "css"; // Default to CSS fallback
}

module.exports = detectFramework;

const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  target: "node", // Ensures compatibility with Node.js
  entry: "./bin/index.js", // Entry point for your CLI tool
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "index.js", // Bundled file name
    libraryTarget: "commonjs2", // Node.js module format
  },
  mode: "production", // Production mode for optimizations
  externals: [nodeExternals()], // Exclude Node.js built-ins and dependencies
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/core/templates", // Source folder for templates
          to: "templates", // Destination folder in the dist directory
        },
      ],
    }),
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }), // Add shebang for CLI execution
  ],
  optimization: {
    minimize: true, // Enable minification
    minimizer: [new TerserPlugin()], // Use Terser for JavaScript optimization
  },
};

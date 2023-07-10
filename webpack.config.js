// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./webpack/index.js", // your entry file
  output: {
    path: path.resolve(__dirname, "dist"), // your output directory
    filename: "openai-umd.js", // your output file name
    library: "OpenAI", // your library name
    libraryTarget: "umd", // your library target format
  },
};

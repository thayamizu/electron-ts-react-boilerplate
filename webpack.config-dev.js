const path = require("path");
const baseConfig = require("./webpack.config.js");

const developConfig = Object.assign(baseConfig, {
  // set development mode
  mode: "development"
});

// browser process
const main = Object.assign({}, developConfig, {
  target: "electron-main",
  entry: { main: "./src/main/Main.ts" },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,

        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "awesome-typescript-loader",
        options: { configFileName: "tsconfig.main.json" }
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
});

// renderer process.
const renderer = Object.assign({}, developConfig, {
  target: "electron-renderer",
  entry: { renderer: "./src/renderer/Renderer.tsx" },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "awesome-typescript-loader",
        options: { configFileName: "tsconfig.renderer.json" }
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
});
module.exports = [main, renderer];

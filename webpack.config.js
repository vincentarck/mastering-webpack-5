const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        // only match .css
        test: /\.(css)$/,
        use: [
          { loader: "style-loader" },
          // enable unique classname to prevent overrides class
          { loader: "css-loader", options: { modules: true } },
        ],
      },
      {
        // work with ".sass" or ".scss" filte
        test: /.s[ac]ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
};

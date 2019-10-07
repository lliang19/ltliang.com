const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  entry: {
    main: ["./src/web/frontend/main.tsx", hotMiddlewareScript]
  },

  mode: "development",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map"
});

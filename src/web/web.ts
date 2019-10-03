import express from "express";
import http from "http";
import path from "path";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const config = require("../../webpack.dev.js");

// Express app initialization
const app = express();
const compiler = webpack(config);

// Template configuration
app.set("view engine", "ejs");
app.set("views", "public");

// Static files configuration
// app.use("/assets", express.static(path.join(__dirname, "frontend")));
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));

// Controllers
app.get("/*", (req, res) => {
  res.render("index");
});

// Start function
export const start = (port: number): Promise<void> => {
  const server = http.createServer(app);

  return new Promise<void>((resolve, reject) => {
    server.listen(port, resolve);
  });
};

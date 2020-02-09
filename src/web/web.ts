import express from 'express';
import http from 'http';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Express app initialization
const app = express();

// Template configuration
app.set('view engine', 'ejs');
app.set('views', 'public');

const config = require('../../webpack.dev.js'); // eslint-disable-line
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));

// Controllers
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'resume.pdf'));
});
app.get('/favicon.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'favicon.png'));
});

// Start function
const start = (port: number): Promise<void> => {
  const server = http.createServer(app);

  // eslint-disable-next-line
  return new Promise<void>((resolve, reject) => {
    server.listen(port, resolve);
  });
};

export default start;

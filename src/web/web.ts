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

if (process.env.DEV === 'true') {
  const config = require('../../webpack.dev.js'); // tslint:disable-line
  const compiler = webpack(config);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));
} else {
  // Static files configuration
  app.use('/assets', express.static(path.join(__dirname, 'frontend')));
}

// Controllers
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'resume.pdf'));
});

// Start function
export const start = (port: number): Promise<void> => {
  const server = http.createServer(app);

  return new Promise<void>((resolve, reject) => {
    server.listen(port, resolve);
  });
};

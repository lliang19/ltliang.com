import express from 'express';
import http from 'http';
import path from 'path';
import wakeUpDyno from './wakeUpDyno';

// Express app initialization
const app = express();
const DYNO_URL = 'http://www.ltliang.com';

// Template configuration
app.set('view engine', 'ejs');
app.set('views', 'public');

// Static files configuration
app.use('/assets', express.static(path.join(__dirname, 'frontend')));

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
    server.listen(port, () => {
      wakeUpDyno(DYNO_URL, 25, () => null);
      resolve();
    });
  });
};

export default start;

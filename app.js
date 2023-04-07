const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
// const { parse } = require('url')

const next = require('next');

const app = express();

const dev = process.env.NODE_ENV !== 'production';
const port = 3000;
const hostname = 'localhost';

const nextApp = next({ dev, hostname, port });
const handle = nextApp.getRequestHandler();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'somerandomstrings',
  resave: false,
  saveUninitialized: true,
  cookie: { httpOnly: false, secure: false }
}));

nextApp.prepare().then(() => {
  const userApiController = require('./controllers/api/user');

  app.post('/api/user/login', userApiController.login);
  app.post('/api/user/logout', userApiController.logout);
  app.all('*', (req, res) => {
    return handle(req, res);
  });
});

module.exports = app;

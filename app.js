const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
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
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

nextApp.prepare().then(() => {
  app.all('*', (req, res) => {
    return handle(req, res);
  });
});

module.exports = app;

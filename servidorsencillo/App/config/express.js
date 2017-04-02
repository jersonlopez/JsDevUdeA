const bodyparser = require('body-parser');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const config = require('./config');
module.exports = function(app) {
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({
    extended: true }));
  app.use(helmet());
  app.use(morgan('dev'));
  app.use(compression());
  app.use('/public', express.static(path.join(config.root, '/public')));
};

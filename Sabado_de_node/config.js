/*
  This file contains global variables
*/

const path = require('path');

const rootPath = path.resolve(__dirname, '.');
const port = process.env.Dev ? 5000 : 8080;
const morganMode = process.env.Dev ? 'dev' : 'tiny';

module.exports = {
  rootPath,
  port,
  morganMode
}

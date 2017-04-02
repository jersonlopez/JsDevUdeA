const path  = require('path');
const config = {
  environment: process.env.NODE_ENV || 'dev',
  root:path.normalize(path.join(__dirname, '/../..')),
  server: {
    port: process.env.PORT || 8080
  }
};

module.exports = config;

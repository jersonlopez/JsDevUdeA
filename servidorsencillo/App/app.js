const express = require('express');
const config = require('./config/config');
const routes = require('./routes');

const app = express();
require('./config/express')(app);
app.use('/', routes);

app.listen(config.server.port, () => {
  console.log(`Magic happens on port ${config.server.port}`);
});

module.exports = app;

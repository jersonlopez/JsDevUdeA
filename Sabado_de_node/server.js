// This file contains the configuration of the server.
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./config');
const routes = require('./App/routes');

module.exports = (app) =>{
    app.set('port', config.port);

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(morgan(config.morganMode));


    app.use('/',routes);

}

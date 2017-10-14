const Router = require('express').Router;

const controller = require('./controller');

let router = new Router();

router.route('/greet')
      .get((...args) => controller.greet(...args));

router.route('/bye/:bye')
            .get((...args) => controller.bye(...args));
module.exports = router;

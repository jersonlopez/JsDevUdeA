const Router = require('express').Router;
const router = new Router();
const path = require('path');
const config = require('./config/config');

/* yeoman require hook */
/* Don't remove this comment, it is needed by the sub generator */

router.route('/').get((req, res) => {
  res.sendFile(path.join(config.root, '/public/index.html'));
});


/* yeoman use hook */
/* Don't remove this comment, it is needed by the sub generator' */

module.exports = router;

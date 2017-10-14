// Set of routes used by the application

const Router = require('express').Router;

const hello = require('./features/hello/route');

let router = new Router();

router.route('/ping')
      .get((req,res)=>{
        return res.status(200).json({msg:'Pong!!'});
      });

router.use('/hello',hello);

module.exports = router;

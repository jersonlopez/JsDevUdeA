const Router = require('express').Router;
const router = new Router();
const path = require('path');
const config = require('./config/config');
const login = require('login')

let users = []
/* yeoman require hook */
/* Don't remove this comment, it is needed by the sub generator */

router.route('/').get((req, res) => {
  res.sendFile(path.join(config.root, '/public/index.html'));
})
.post((req, res) => {
  let datos = req.body;
  //login.saludar(datos.user, datos.pass);
  console.log(datos);
  users.push(datos.user)
  //return res.status(200).send("<script>prompt("hola putos")</script>")
  return res.status(200).json({token:'itsOk!'})
});

router.route('/users').get((req,res)=>{
  return res.json({users:users}).status(200)
})

router.route('/:user').get((req,res)=>{
  for (var i = 0; i < users.length; i++) {
    if (req.params.user === users[i]) {
      return res.json({estado:'logueado',usuario:users[i]})
    }
  }
})



/* yeoman use hook */
/* Don't remove this comment, it is needed by the sub generator' */

module.exports = router;



//
//https://dsinfosrl.wordpress.com/2016/10/04/como-enviar-un-post-con-json/
//como hacer peticiones en ajax

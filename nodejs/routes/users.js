var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  if(username == 'admin' && password == '123456789'){
    res.send({login: true, message : 'Login thành công'})
    return;
  }
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  //console.log('do not respond with a resource to '+req.params.id);
  res.render('users', { name: req.params.id });
});
/*

router.get('/', function(req,res,next){
    console.log(req.params.username);
    res.render('users', {username: 22})
});
*/

module.exports = router;

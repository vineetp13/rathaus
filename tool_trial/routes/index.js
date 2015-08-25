var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('index_test', { title: 'Express test tada!' });
});


/*
router.view = function(req,res){
    res.render('main');
}

*/
module.exports = router;

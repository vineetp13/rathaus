var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  	var json_ob_req = req.params.json_ob_req;
  	//just quietly drop it
  	
    var json_ob = { action:"date +%s", result:"1367263074"};
    //res.render('users', { layout : 'layout', json: (json_ob) });
    //console.log(json_ob);
    res.render('users', { json_ob : json_ob });
});

router.get('/:id', function(req, res, next) {
  //console.log('do not respond with a resource to '+req.params.id);
  //res.render('users', { name: req.params.id });
  var json_ob = {id: req.params.id, name: "Dangerous Dave"};
  
  //res.send("waf");
  res.render('users', {json_ob: json_ob});
});
/*

router.get('/', function(req,res,next){
    console.log(req.params.username);
    res.render('users', {username: 22})
});
*/

module.exports = router;

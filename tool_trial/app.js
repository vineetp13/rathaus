var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index'); //edit by vineet
var users = require('./routes/users');

var app = express();

//app.use('/users/:username', users.view);

function yourCallback(){
    console.log("callback received");
}

// Writing...
 var fs = require("fs");
 var myJson = {
     key: "myvalue"
     };
//

//     // And then, to read it...
     //myJson1 = require("./filename.json");
     //console.log(myJson1);
// }

// view engine setup
app.set('views', path.join(__dirname, 'views')); //edit by vineet
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //edit by vineet
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/styles',  express.static(__dirname + '/styles'));

app.use('/', routes); //edit by vineet
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


     fs.writeFileSync( "file_trial.json", JSON.stringify( myJson ), "utf8",
     function(err){
         if(err){
            console.log(err);
         }
         else{
             console.log("file saved");
         }
     });
     //fs.close("filename.json");
     //
     myJson1 = require("./file_trial.json");
     console.log(myJson1);

module.exports = app;

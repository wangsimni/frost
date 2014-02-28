
var express = require('express');
var http = require('http');
var path = require('path');
var helpers = require('view-helpers');

var app = express();

// all environments
app.set('port', process.env.PORT || 5416);
app.set('views', path.join(__dirname, 'app/views'));
app.use(express.logger('dev'));

var consolidate = require('consolidate');
app.engine('jade', consolidate.jade);

app.use(express.cookieParser());

app.use(express.urlencoded());
app.use(express.json());
app.use(express.methodOverride());

app.use(helpers('Frost'));

app.use(app.router);

app.use(express.favicon());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.locals.pretty = true;
}

// config
var config = require('./config');

// mysql
var mysql = require('mysql');
var pool = mysql.createPool(config.poolConfig);
app.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    console.log(err);
    console.log(conn);
    callback(err, conn);
  });
};

require('./app/controllers')(app);

http.createServer(app).listen(app.get('port'), config.host, function(){
  console.log('Express server listening on port ' + app.get('port'));
});

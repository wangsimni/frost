
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 5416);
app.set('views', path.join(__dirname, 'app/views'));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

var engines = require('consolidate');
app.engine('jade', engines.jade);

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.locals.pretty = true;
}

// mysql
var mysql = require('mysql');
var pool = mysql.createPool(require('./persistence'));
app.getConnection = function(callback) {
	pool.getConnection(function(err, conn) {
		callback(err, conn);
	});
};

require('./app/controllers')(app);

var host = '0.0.0.0';

http.createServer(app).listen(app.get('port'), host, function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var restify = require('restify');
var server = restify.createServer();
const port = 8080;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testing');
var db = mongoose.connection;

db.on('error', function(msg){
	console.log('Mongoose bit the dust; ' + msg);
});

db.once('open', function(){
	console.log("Mongoose connection established.");
});

server.get('/',restify.serveStatic({
    directory: './client',
    default: "index.html"
}));

server.listen(port, function(){
	console.log('%s listening on %s', server.name, port);
});
/*set up server with '/' path, provides a client, while any of the other paths (email path)
provide a restful api */


var restify = require('restify');
var hello = require('.routes');
var server =  restify.createServer();
var port = 8088;

// local folders and files
var hello = require('./routes/hello');
var client = require('./cient');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/enron');
var db = mongoose.connection;


db.on('error', function(msg){
    console.log('Mongoose connection error %s', msg);
});

db.once('open', function(){
    console.log('Mongoose connection established');
});


// client
server.get('/', function(req, res, next){
    fs.readFile('index.html', function(err, data){
        if(err){
            console.log("Cannot read file index.html");
            res.send(404);
        } else {
            var body = data.toString();
            res.writeHead(200, {
                'Content-Length' : Buffer.byteLength(body),
                'Content-Type' : 'text/html'
            });
            res.write(body);
            res.end();
        }
        return next ();
    });
});

//server responses
server.get('/emails',emails.get);
server.get
server.get('/', function(req, res, next){
    res.send("Hello World");
    next();
});

server.get('/hello/:name', function(req, res, next) {
    res.send('Hello ' + req.params.name);
    next();
});

server.listen(8088, function() {
    console.log('%s listening at %s;', server.name, server.url);
});
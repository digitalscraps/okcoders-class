
var restify = require('restify');
var server =  restify.createServer();
var port = 8088;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/enron');
var db = mongoose.connection;
var Schema = mongoose.Schema;

var schema = new Schema({
    _id: Schema.Types.ObjectId,
    sender: String,
    recipients: [],
    cc: [],
    text: String,
    mid: String,
    fpath: String,
    bcc: [],
    to: [],
    replyto: Schema.Types.Mixed,
    ctype: String,
    fname: String,
    date: Date,
    subject: String
});

db.on('error', function(msg){
    console.log('Mongoose connection error %s', msg);
});

db.once('open', function(){
    console.log('Mongoose connection established');
});
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
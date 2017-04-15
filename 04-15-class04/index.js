/*set up server with '/' path, provides a client, while any of the other paths (email path)
provide a restful api */




var restify = require('restify');
var server =  restify.createServer();
var port = 8088;
var fs = require('fs');

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
// what collection is schema assocted with
var Emails = mongoose.model('emails', schema);

db.on('error', function(msg){
    console.log('Mongoose connection error %s', msg);
});

db.once('open', function(){
    console.log('Mongoose connection established');
});

//write function to GET emails
function getEmails(req, res, next){
    Emails.find().limit(10).exec(function(err,data){
        if(err){res.send('Error;');}
        else {
            res.json(data);
        }
    });
    return next();
}

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
server.get('/emails',getEmails);

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
//Load HTTP module
//var http = require('http');
//var fs = require('fs');

//Create HTTP server and listen on port 8000 for requests
//http.createServer(function (req, res) {
   // console.log(req.url);
    //fs.readFile('text.txt', (err, data) => {

   // if (err) throw err;
   // console.log('oops wrong');
   // });

// Set the response HTTP header with HTTP status and Content type
//   res.writeHead(200, {'Content-Type': 'text/plain'});
   
// Send the response body
 //  res.end(data.toString());
//}).listen(8000);

// Print URL for accessing server
//console.log('Server running at http://127.0.0.1:8000/')

//var circle = require('./circle');

//var area = circle.area(24);

//console.log('A circle with a radius of 24 has an area of ' + area);

var mongo = require('mongodb');
var mc = mongo.MongoClient;

var url = 'mongodb://localhost:27017/testing';

mc.connect(url,function(err,db){

    if(err){console.log("unable to access database on " + url); }
    var posts = db.collection('posts');
    posts.find({}).toArry(function(err, docs){
        console.log(docs);
        db.close();
    });
});
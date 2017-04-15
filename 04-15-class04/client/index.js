/* create client directory, and then create new index.js
move index.html file
*/

var fs = require('fs');

exports.get = function(req, res, next){
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
}
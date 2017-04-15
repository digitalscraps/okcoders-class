var restify = require('restify');


exports.send = function(req, res, next) {
    res.send("Testing " + req.params.name);
    return next();
}

server.get('/hello/:name', function(req, res, next) {
    res.send('Hello ' + req.params.name);
    next();
});

server.listen(8088, function() {
    console.log('%s listening at %s;', server.name, server.url);
});
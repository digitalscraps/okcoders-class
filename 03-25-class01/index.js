//load modules
var http = require('http');

// set port number
const PORT = process.env.PORT || 8080));

function handleRequest(res, res) {
    res.end('<h1>Bork Bork Bork</h1>');
}

const server = http.createServer(handleRequest);

//Start the server
server.listen(PORT, ()=> {
    // This is a callback
    console.log('server is running on port ${PORT}');
});
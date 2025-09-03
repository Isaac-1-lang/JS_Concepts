var http = require('http');

// Create the server
var server = http.createServer(function(req, res) {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // Check if the request is for the root URL "/"
    if (req.url == "/") {
        res.end("Welcome");
    } else {
        res.end("Page not found");
    }
});

// Log when the server starts listening
console.log("It is listening now!!!");

// Make the server listen on port 5000
server.listen(5000);

const port = 5000;
const hostName = '127.0.0.1';
const http = require('http');
const server = http.createServer((req,res) => {
    res.setHeader('Content-Type',text/html);
    if(req.url === '/') {
        res.statusCode = 200;
        res.write('<h1>Welcome to our home page</h1>');
        res.end();
    } else {
        res.statusCode = 404;
        res.write('Error page');
    }
})
server.listen(port,hostName,() =>{
    console.log(`Server is running  on:http//${hostName}:${port}`);
});
// What is the difference between res.write and res.end?
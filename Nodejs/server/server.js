const http = require('http');
const server = http.createServer((req,res)=> {
    const statusCode = 404;
    const contentType = 'text/html';
    res.writeHeader(statusCode,{ 'Content-Type': contentType });
    if(req.url == '/') {
        res.write("<h1>My name is NIYOBYOSE Isaac!</h1>");
        res.write("<p>I am a software developper</p>");
        res.end();
    } else if(req.url == '/login') {
        res.write("<h1>Rely on the others!!!</h1>");
        res.end();
    } else {
        res.write("<h1>Page not found</h1>");
        res.end();
    }
}).listen(4000,() => {
    console.log("Server is running on port 4000");
})
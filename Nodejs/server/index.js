const { error } = require('console');
const http = require('http');
const server = http.createServer((req,res) => {
    res.writeHeader(404,'Content-Type','text/html');
    if(req.url == "/") {
        res.write("<h1>My name is NIYOBYOSE Isaac!</h1>");
        res.write("<p>I am a software developper</p>");
        res.end();
    } else if(req.url == "/login") {
       res.write("<h1>Rely on the others!!!</h1>");
    } else {
        res.write("The page is not found!!!");
    }

}).listen(4000,() => {
    console.log("Server is running on port 4000");
})
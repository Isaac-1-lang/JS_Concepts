// Routing using get, post, put and delete
const expressed  = require('express');
const app = expressed();
const port = 4600;
app.get('/',(req,res)=> {
    res.send('Hello, World');
});
app.get('/about',(req,res)=> {
    res.send("About us page")
})
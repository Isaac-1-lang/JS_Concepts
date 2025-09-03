// Why is it not running
const express = require('express');
const app = express();

app.use((req,res,next)=> {
    console.log(`${req.method} request to ${req.url} at ${new Date().toISOString()}`);
    next();
})
app.get('/', (req, res) => {
    res.send('Hello, World!');
   });

app.listen(3000,()=> {
    console.log('Server running on port 3000');
});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/',(req,res) => {
    const name = req.query.name;

    if(name) {
        res.send("Hello visitor");
    } else {
        res.send(`Hello, Isaac ! Welcome to our server..`);
    }
})
app.listen(PORT,(req,res)=> {
    console.log(`the server is running of ${PORT} PORT`);
})

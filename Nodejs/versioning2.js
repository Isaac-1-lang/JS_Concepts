// console.log("Come on now!!!!");
// const { format } = require('date-fns');
// console.log(format
//     (new Date(),
//     'yyyyMMdd\tHH:mm:ss'))

// const { v4:uuid } = require('uuid');


// console.log(uuid() ) 
// Event emitters
const path = require('path');
const express_land = require('express');
const obj = express_land();
const PORT = process.env.PORT || 3000;

// Define a route for '/page'
obj.get('/page', (req, res) => {
    const page = req.query.type;  // Get the 'type' query parameter

    if (page === 'about') {
        res.send("<h1>NIYOBYOSE Isaac Precieux..</h1>");
    } else if (page === 'contact') {
        res.send("Hello people in Africa where the first language is Kinyarwanda..");
    } else if(page === '/') {
      res.write("<h1>Hello World</h1>");
    } 
    else {
        res.send('<h1>Welcome now</h1>');
    }

});

// Start the server
obj.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});

 
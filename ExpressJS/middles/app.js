const express = require('express');
const app = express();
// Application-level middleware to log requests
app.use((req, res, next) => {
 console.log(`${req.method} request to ${req.url} at ${new
Date().toISOString()}`);
 next(); // Pass control to the next middleware
});
// A simple route
app.get('/', (req, res) => {
 res.send('Hello, World!');
});
app.listen(3000, () => {
 console.log('Server running on port 3000');
});

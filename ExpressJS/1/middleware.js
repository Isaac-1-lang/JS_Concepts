// Use of middlewares in js
const express =require('express');
const app = express();
const loggerMiddleWare = (req,res,next) => {
    console.log(`${req.method} request to ${req.url} at ${new Date().toISOString()}`);
    next(); // Call the next middleware or route handler
};
// Apply middleware Globally
app.use(loggerMiddleWare);
// Route-specific middleware example
const authMiddleWare = (req,res,next) => {
    const token = req.headers['authorization'];
    if(token === '12345') {
        console.log("Authorization successful");
        next
        ();
    } else {
        res.status(403).send("Forbidden: Invalid Token");
    }
};
// Main Route
app.get('/',(req,res)=> {
    res.send("Welcome to the homepage");
})
// Error-Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
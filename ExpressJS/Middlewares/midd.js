const express = require("express");
const app = express();

// Logger middleware
const logger = (req, res, next) => {
    console.log("Request received at:", req.url); // Log the request URL or any other information
    next(); // Call next() to pass control to the next middleware or route handler
}

// Use logger middleware globally
app.use(logger);

// Route handler
app.get("/", (req, res) => {
    res.send("Hello people in the country");
});
// Using error handling middlewares
app.use((err,req,res,next)=> {
    res.status(500).send("Ooops!!!.The server is not working")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

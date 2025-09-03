const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3300;
const router = require('./routes');
app.use('/',router);
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Students')  // Corrected the URL
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => console.log("MongoDB connection error:", err));

// Set up the server to listen on the specified port
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});

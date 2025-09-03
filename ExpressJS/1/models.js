const mongoose = require('mongoose');

// Define the Student schema
const StudentSchema = new mongoose.Schema({
    names: String,
    age: Number,
});

// Create and export the model
module.exports = mongoose.model('Student', StudentSchema);

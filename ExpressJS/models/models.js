let express = require("express");
let app = express();
let bodyParser = require("body-parser");

let students = [
    { "name": "Isaac Niyo", "age": "15", "school": "rca" },
    { "name": "Isabella Nkunda", "age": "15", "school": "rca" }
];

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Home Route
app.get("/", function (req, res) {
    res.json({ "message": "Welcome to my app" });
});

// Get All Students
app.get("/students", function (req, res) {
    res.json(students);
});

// Add a New Student
app.post("/students", (req, res) => {
    let student = req.body;

    // Validate input
    if (student.name && student.age && student.school) {
        students.push(student);
        res.status(201).json({ "message": "Student added successfully", "students": students });
    } else {
        res.status(400).json({ "message": "Invalid input. Please provide name, age, and school." });
    }
});

// Start Server
app.listen(5000, function () {
    console.log("Node server is running on port 5000...");
});

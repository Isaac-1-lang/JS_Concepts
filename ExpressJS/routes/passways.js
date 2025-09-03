const express = require('express');
const router = express.Router();

// Route to display the list of users
router.get("/", (req, res) => {
    res.send("User lists");
});

// Route to display the form to create a new user
router.get("/new", (req, res) => {
    res.send("User New Form");
});

module.exports = router;

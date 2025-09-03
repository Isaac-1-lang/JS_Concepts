const express = require("express");
const router = express.Router();

// Route to render index.ejs
router.get("/", (req, res) => {
    res.render("index",{title: "Home Page"});
});

module.exports = router;

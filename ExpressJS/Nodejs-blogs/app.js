require("dotenv").config();

const express = require("express");  // ✅ Corrected import name
const expressLayouts = require("express-ejs-layouts");
const mainRoutes  = require("./server/routes/main");
const app = express();  // ✅ Initialize 'app' first

// Middleware
app.use(expressLayouts);
app.use(express.static("public"));
app.use("/", require("./server/routes/main"));
app.use("/",mainRoutes);

// Templating Engine
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Define PORT correctly
const PORT = process.env.PORT || 5300;

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});

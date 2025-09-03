// built in middlewares in express
const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json({ message: "Not allowed to go any where"}));
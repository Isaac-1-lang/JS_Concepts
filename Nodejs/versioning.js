// const { format } = require('date-fns');
// console.log(format
//     (new Date(),
//     'yyyyMMdd\tHH:mm:ss'))
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
    const dates = new Date();
    // Formatting the date to a readable format
    const formattedDate = dates.toLocaleString();
    res.end(`Hello World, Now it is on ${formattedDate}`);
});

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}.`);
});
// Second expressjs (Routing)
const PORT1 = 6969;
app.get("/users",(req,res)=> {
    res.send({data: "Here is your data"});
});
app.post("/users",(req,res) => {
    res.send({data:"User Updated"});
});
app.put("/users",(req,res)=> {
    res.send({data:"The user Updated"});
})
app.delete("/users",(req,res)=> {
    res.send({data:"The user was deleted."})
})
app.listen(PORT1, () => {
    console.log(`The server is running on http://localhost:${PORT}`)
})
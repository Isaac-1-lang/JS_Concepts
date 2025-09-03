const path= require("path");
const express = require("express");



const app = express();


app.get('/',(req,res)=> {
    res.sendFile(path.resolve(__dirname,'public','index.html'));
})


path.extname
path.basename
path.join
path.dirname


// Using OS module

const os = require("os");
console.log(os.freemem());
console.log(os.platform());
console.log(os.totalmem());



const fs = require('fs');
const files = fs.readFileSync('./express.js');
console.log("The file structure is:" + files);
fs.readdir('/', function (err,files) {
    if(err) console.log("Err",err);
    else console.log('Result',files);
})
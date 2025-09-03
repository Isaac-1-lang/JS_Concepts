const express= require('express');
        const app = express();
        const port = 3000;
        // Middleware to parse the url encoded
        app.use(express.urlencoded({extended: true}));
        // Handle GET  request to show the form
        app.get('/express',(req,res)=> {
            res.sendFile('/Users/user/Documents/LECTURES/JS/Nodejs/express.html');
        });
        app.post('/',(req,res)=> {
            const First_Name = req.body.fname;
            const Lasrt_Name = req.body.lname;


            res.send(`Registration successfully for First_Name: ${First_Name}`)
            res.send(`Registration successfully for First_Name: ${Lasrt_Name}`)

        })
        app.listen(port, ()=> {
            console.log(`The server is running on the port ${port}`);
        })
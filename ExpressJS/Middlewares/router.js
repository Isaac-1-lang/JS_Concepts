const express = require('express');
const app = express();
const router = express.Router();

router.use((req,res,next)=> {
    const isAdmin= req.query.admin === true;
    if(isAdmin) {
        next();
    } else {
        res.status(403).send("Access denied for the user");
    }
})
router.get('/dashboard',(req,res)=> {
    res.send("Welcome to the Admin Dashboard");
});

app.use('/admin',router);

app.listen(3000,()=> {
    console.log("The server is running on teh port 3000");
})
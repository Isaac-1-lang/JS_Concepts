const express = require("express");
const app = express();
const router = express.Router();

// Router-level middleware to check if the user is admin

router.use((req,res,next)=> {
    const isAdmin = req.query.admin = true;// simulate admin check
    if(isAdmin) {
        next();// contiune to the next middleware
    } else {
        res.status(403).send("Access denied: Admins only");
    }
});
// After continueing as an admin

router.use('/dashboard',(req,res)=> {
    res.send("Welcome to the Admin Dashboard");
});
router.get('/dashboard', (req, res) => {
    res.send('Welcome to the Admin Dashboard');
   });
   // Mount the router at /admin
   app.use('/admin', router);
   app.listen(3000, () => {
    console.log('Server running on port 3000');
   });
   
const router = require("express").Router();

router.get("/login", (req,res) =>{
    res.render("login.ejs");
});

router.get("/google", (req,res) =>{
    
});

module.exports = router;
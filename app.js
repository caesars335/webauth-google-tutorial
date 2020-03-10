const express = require("express");
const path = require("path");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");

const app = express();


app.set("view engine", "ejs");

//============= Middleware ===============
// authen
app.use("/auth" , authRoutes);


// ======== Root Service ========
app.get("/", (req,res) =>{
    // res.sendFile(path.join(__dirname,"views/home.html"));
    res.render("home.ejs");
});

const PORT = 3000;

app.listen(PORT,() =>{
    console.log("Server is running at " + PORT)
});
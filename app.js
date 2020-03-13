const express = require("express");
const path = require("path");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const passportSetup = require("./config/passport-setup");
const passport = require("passport");
const cookieSession = require("cookie-session");
const key = require("./config/key");
const app = express();


app.set("view engine", "ejs");

//============= Middleware ===============
//cookie
app.use(cookieSession({
    maxAge: 1000*60*60,
    keys: [key.cookie.secret]
}));
// init passport for se/derialization
app.use(passport.initialize());
// session
app.use(passport.session());
// authen
app.use("/auth", authRoutes);
// profle
app.use("/profile", profileRoutes);




// ======== Root Service ========
app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname,"views/home.html"));
    res.render("home.ejs", {user: req.user});
});

const PORT = 35000;

app.listen(PORT, () => {
    console.log("Server is running at " + PORT)
});
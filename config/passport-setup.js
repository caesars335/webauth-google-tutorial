const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const key = require("./key");
passport.use(
    new GoogleStrategy(
        {   clientID: key.google.client,
            clientSecret: key.google.secret,
            callbackURL: "/auth/google/redirect"},
        () => {
            // nothing now
        }
        )
);


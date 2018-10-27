const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
// const UserGoogle = require("../models/GoogleUser");
const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      //options for the google strat
      callbackURL: "/api/users/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshTokeb, profile, done) => {
      //passport callback function
      console.log(profile);
      User.findOne({ googleId: profile.id }).then(curUser => {
        if (curUser) {
          console.log("Profile already exists");
        } else {
          new User({
            userType: "Google",
            name: profile.displayName,
            googleId: profile.id,
            avatar: profile.photos[0].value,
            password: "NA",
            email: "NA",
            active: "true"
          })
            .save()
            .then(newUser => {
              console.log("new user created" + newUser);
            });
        }
      });
    }
  )
);

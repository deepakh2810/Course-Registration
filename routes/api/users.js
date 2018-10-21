const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const randomstring = require("randomstring");
const mailer = require("../../misc/mailer");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateVerificationUser = require("../../validation/email_verification");

const keys = require("../../config/keys");
const User = require("../../models/User");

// @route   POST  api/users/register
// @desc    Tests post route
// @access  Public

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exsist";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm"
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          //Generate a secret token
          const randomSecretToken = randomstring.generate();
          newUser.randomSecretToken = randomSecretToken;
          newUser.active = false;
          // Compose an email
          const html = `Hi ${req.body.name}!
          <br/>
          <br />
          Thank you for registering with us.
          Please verify your email by pasting following token:
          Token: <b>${randomSecretToken}</b>
          <br />
          on the following page: 
          <a href="http://localhost:3000/verify">Course-Select verifying page</a>
          
          <br /> </br>
          Have a good day!
          <br /> </br>

          Team,
          <br />
          Course Select
          `;
          //Send the email
          mailer.sendEmail(
            "admin@courseselect.com",
            req.body.email,
            "Email verification",
            html
          );
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET  api/users/login
// @desc    Login users/ return JWT Token
// @access  Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User email not found";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        if (user.active === false) {
          errors.inactive = "You need to verify your account";
          return res.status(400).json(errors);
        }
        //user matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar };
        //sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 36000 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   POST  api/users/verfiy
// @desc    Verify post route
// @access  Public

router.post("/verify", (req, res) => {
  const { errors, isValid } = validateVerificationUser(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ randomSecretToken: req.body.secrettoken })
    .then(user => {
      if (user && user.active === false) {
        User.findOneAndUpdate({ $set: { active: true } }).then(user =>
          res.json({ success: true })
        );
      } else if (user.active === true) {
        errors.message = "Account has been active already. Please login!";
        return res.status(400).json(errors);
      }
    })
    .catch(err => res.status(404).json({ message: "Invalid token entered" }));
});

// @route   GET  api/users/current
// @desc    Return current user
// @access  private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;

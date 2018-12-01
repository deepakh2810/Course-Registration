const express = require("express");
const router = express.Router();
const passport = require("passport");

const Reviews = require("../../models/Reviews");
const nodemailer = require('nodemailer');

router.get(
    "/:coursenumber",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Reviews.find({ coursenumber: req.params.coursenumber })
        .then(Reviews => {
          res.json(Reviews);
        })
        .catch(err => res.status(404).json({ success: false }));
    }
  );


  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "courseselect2018@gmail.com",
      pass: "admin@1234"
    }
  });


  router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      console.log("Inside api post", req.body);
      const abc = new Reviews({
        studentname: req.body.reviewsData.studentname,
        coursenumber: req.body.reviewsData.coursenumber,
        Reviews_Comment: req.body.reviewsData.description
      });
      console.log("abc :  ", abc.body );








        // Compose an email
                const html = `Hi ${req.body}!
                  <br/>
                  <br />
                  Thank you for registering with us.
                  Please verify your email by pasting following token:<br/>
                  Token: <b>Hola</b>
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
                // mailer.sendEmail(
                //   "admin@courseselect.com",
                //   req.body.email,
                //   "Email verification",
                //   html
                // );
                var mailOptions = {
                  from: "courseselect2018@gmail.com",
                  //to:   "eguevara1996@gmail.com", //req.body.email,
                  to:   req.body.reviewsData.description,

                  subject: "Email verification",
                  text: html
                };
                transporter.sendMail(mailOptions, function(error, info) {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log("Email sent: " + info.response);
                  }
                });
                //////////// email



      abc
        .save()
        .then(reviews => {
          console.log(reviews);
          Reviews.find({ coursenumber: reviews.coursenumber }).then(Reviews => {
            res.json(Reviews);
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  );

  router.delete(
    "/:coursenumber",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Reviews.findByCoursenumber(req.params.coursenumber)
        .then(reviews => {
          let coursenumber = reviews.coursenumber;
          reviews.remove().then(() => {
            Reviews.find({ coursenumber: coursenumber }).then(Reviews => {
              res.json(Reviews);
            });
          });
        })
        .catch(err => console.log(err));
    }
  );

  module.exports = router;

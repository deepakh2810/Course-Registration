const express = require("express");
const router = express.Router();
const passport = require("passport");
// Payment Model
const TheSchemaPayment = require("../../models/Payment");
const validatePaymentInput = require("../../validation/payment");

const jwt = require("jsonwebtoken");
const randomstring = require("randomstring");
const mailer = require("../../misc/mailer");
const keys = require("../../config/keys");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const gravatar = require("gravatar");
const Studentinfo = require("../../models/Studentinfo");


router.get("/payment",
passport.authenticate("jwt", { session: false }),
 (req, res, next) => {
  // console.log(req.body, req.body.name );
  res.send({
    name: req.body.name,
    email: req.body.email,
    creditcardnumber: req.body.creditcardnumber ///,
  //  expirationmonthyear: req.body.paymentinfo.expirationmonthyear,
    //ccv: req.body.paymentinfo.ccv
  }).catch(next);
});


{/*
router.post("/payment",
passport.authenticate("jwt", { session: false }),
(req, res, next) => {
  const { errors, isValid } = validatePaymentInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  console.log("my post request");
  Payment.create(req.body).then(function(payment){ // or  instead of these 2 lines above
     res.send(payment);
   }).catch(next);
 });
*/}

router.post("/payment",
passport.authenticate("jwt", { session: false }),
//passport.authenticate("googleToken", { session: false }),
(req, res) => {
  console.log("Now Processing the post() method!");

  //Studentinfo.findOne({ name: req.params.name })
  //.then(Studentinfo => {
  //const apayment = new TheSchemaPayment(req.body);

//  Studentinfo.coursesselected.unshift(apayment);
  //Studentinfo.save().then(Studentinfo => res.json(Studentinfo));
  //TheSchemaPayment(apayment);
  //TheSchemaPayment.save().then(TheSchemaPayment => res.json(TheSchemaPayment)); })
//.catch(err => res.status(404).json({ success: false }));

  {/*
  User.findOne({ "local.email": req.body.email }).then(user => {
    if (!user) {
      User.findOne({ "google.email": req.body.email }).then(user => {
        const payload = {
          id: user.id,
          name: user.google.name,
          email: user.google.email
        };
    });}
    else{
    const payload = {
      id: user.id,
      name: user.local.name,
      email: user.local.email
    };
  }
});
*/}

  // const { errors, isValid } = validatePaymentInput(req.body);
  // if (!isValid) {    return res.status(400).json(errors);  }
  console.log("Now Processing the post() method!");

  const newpayment = new TheSchemaPayment( {
    name: req.body.paymentinfo.name,
    email: req.body.paymentinfo.email,
    creditcardnumber: req.body.paymentinfo.creditcardnumber,
    expirationmonthyear: req.body.paymentinfo.expirationmonthyear,
    //expirationyear: req.body.paymentinfo.expirationyear,
    ccv: req.body.paymentinfo.ccv
  }); // req.body);


  //const apayment = new TheSchemaPayment(req.body);
//  apayment.save();

  // console.log(newpayment);
newpayment
.save()
.then(newpayment => res.json(newpayment))
.catch(err => console.log(err));

 //Payment.create(req.body).then(function(payment){ // or  instead of these 2 lines above
  //  res.send(payment);  }
  // Compose an email
  // const html = `Hi ${req.body.name}!
  //   <br/>
  //   <br />
  //   Thank you for using CourseSelect.
  //   Here is the reciept of your transaction:<br/>
  //   Token: <b>${randomSecretToken}</b>
  //   <br />
  //   on the following page:
  //   <a href="http://localhost:3000/verify">Course-Select verifying page</a>
  //
  //   <br /> </br>
  //   Here are the courses you selected to enroll in:
  //   <br /> </br>
  //
  //   <br /> </br>
  //   Have a good day!
  //   <br /> </br>
  //
  //   Team,
  //   <br />
  //   Course Select
  //   `;
  // //Send the email
  // mailer.sendEmail(
  //   "admin@courseselect.com",
  //   req.body.email,
  //   "Reciept of transaction",
  //   html
  // );

});


module.exports = router;

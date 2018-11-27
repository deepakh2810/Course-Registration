const express = require("express");
const router = express.Router();
const passport = require("passport");

// Course Model
const Course = require("../../models/Course");
const validateCourseInput = require("../../validation/course");

// @route   GET api/courses
// @desc    Get All courses
// @access  Public
router.get("/", (req, res) => {
  Course.find()
    .sort({ date: -1 })
    .then(courses => res.json(courses));
});

// @route   GET api/courses
// @desc    Get a course with coursenumber
// @access  Public

router.get(
  "/:coursenumber",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("Here in the api", req.params.coursenumber);
    Course.findOne({ coursenumber: req.params.coursenumber })
      .then(Course => {
        // console.log("In Api: ", Course);
        res.json(Course);
      })
      .catch(err => res.status(404).json({ success: false }));
  }
);

// @route   POST api/courses
// @desc    Create A new Course
// @access  Public
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCourseInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    console.log("Request: ", req.body);
    const newCourse = new Course({
      name: req.body.name,
      coursenumber: req.body.coursenumber,
      instructor: req.body.instructor,
      description: req.body.description,
      department: req.body.department,
      location: req.body.location,
      schedule: req.body.schedule,
      year: "2018",
      semester: "Spring",
      reviews: req.body.reviews

    });

    Course.findOne({ coursenumber: newCourse.coursenumber }).then(course => {
      if (course) {
        errors.coursenumber = "That Course Number already exists";
        res.status(400).json(errors);
      }
      //Save profile
      newCourse.save().then(course => res.json(course));
    });

    // newCourse.save().then(course => res.json(course));
  }
);

// @route   DELETE api/courses/:id
// @desc    Delete A Course
// @access  Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(course => course.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;

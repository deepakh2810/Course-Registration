const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CourseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  coursenumber: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: true
  },
  schedule: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: false
  },
  semester: {
    type: String,
    required: false
  },
  department: {
    type: String,
    required: false
  },

  reviews: [
    {
    review: { type: String },
    name: { type: String },
    studentid: { type: String },
    date: { type: Date}
  }
],

  date: {
    type: Array,
    default: Date.now
  }

});

module.exports = Course = mongoose.model("course", CourseSchema);

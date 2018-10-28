const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentInfoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  major: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  studentid: {
    type: String,
    required: true
  },
  gpa: {
    type: String,
    required: true
  },
  courses: [
    {
      name: { type: String },
      courseNumber: { type: String },
      instructor: { type: String },
      description: { type: String },
      location: { type: String },
      schedule: { type: String }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Studentinfo = mongoose.model("studentinfo", StudentInfoSchema);

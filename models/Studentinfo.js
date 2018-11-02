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
  coursesselected: [
    {
      name: { type: String },
      coursenumber: { type: String },
      instructor: { type: String },
      description: { type: String },
      location: { type: String },
      schedule: { type: String },
      year: { type: String },
      semester: { type: String },
      department: { type: String }
    }
  ],
  coursesincart: [
    {
      name: { type: String },
      coursenumber: { type: String },
      instructor: { type: String },
      description: { type: String },
      location: { type: String },
      schedule: { type: String },
      year: { type: String },
      semester: { type: String },
      department: { type: String }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Studentinfo = mongoose.model("studentinfo", StudentInfoSchema);

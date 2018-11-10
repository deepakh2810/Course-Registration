import React, { Component } from "react";
import Selection from "./selection";
import Dashboard from "../dashboard/Dashboard";
import Sidebar from "../layout/Sidebar";

class AddSwapDelete extends Component {
  state = {
    studentInfo: {
      Name: "Ranjana Sinha",
      Major: "Computer Science",
      Type: "Graduate Student",
      StudentId: "2000169288",
      GPA: "3.33",
      Courses: [
        {
          id: "c031",
          name: "Machine Learning",
          courseNumber: "CSCI597",
          Instructor: "Donald Williamson",
          Description: "It is a very good course",
          Link: "http://www.artificialintelligence.com",
          Location: "Luddy Hall 2011",
          Schedule: "Monday, Wednesday 7:15 PM"
        },
        {
          id: "c039",
          name: "Deep Learning",
          courseNumber: "CSCI598",
          Instructor: "Minje Kim",
          Description: "It is a very good course",
          Link: "http://www.artificialintelligence.com",
          Location: "Luddy Hall 2014",
          Schedule: "Monday, Wednesday 2:00 PM"
        }
      ]
    }
  };

  handleDeleteCourse = courseId => {
    const updatedCourses = this.state.studentInfo.Courses.filter(
      c => c.id !== courseId
    );

    let studentInfo = this.state.studentInfo;
    studentInfo.Courses = updatedCourses;
    this.setState(studentInfo);
  };

  handleSwapCourse = (courseIdToBeSwapped, selectedCourse) => {
    const updatedCourses = this.state.studentInfo.Courses.filter(
      c => c.id !== courseIdToBeSwapped
    );

    updatedCourses.push(selectedCourse);

    let studentInfo = this.state.studentInfo;
    studentInfo.Courses = updatedCourses;

    this.setState(studentInfo);
  };
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
      <div className="create-profile">
      <div className="container">
          <div className="row">

        <div className="container-fluid">
        <div className="row">
      
        <div className="col-md-8">
        <Selection
          studentInfo={this.state.studentInfo}
          onDelete={this.handleDeleteCourse}
          onSwap={this.handleSwapCourse}
        /></div>
        </div>
        </div>

          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      
    );
  }
}

export default AddSwapDelete;

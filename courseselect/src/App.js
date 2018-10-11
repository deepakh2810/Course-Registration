import React, { Component } from "react";
import "./App.css";
import Selection from "./components/selection";

class App extends Component {
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
      <React.Fragment>
        <Selection
          studentInfo={this.state.studentInfo}
          onDelete={this.handleDeleteCourse}
          onSwap={this.handleSwapCourse}
        />
      </React.Fragment>
    );
  }
}

export default App;

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
        }
      ]
    }
  };

  render() {
    return (
      <React.Fragment>
        <Selection studentInfo={this.state.studentInfo} />
      </React.Fragment>
    );
  }
}

export default App;

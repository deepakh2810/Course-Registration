import React, { Component } from "react";
import Courses from "./courses";
// import CourseSearch from "./coursesearch";

class SwapCourse extends Component {
  state = {
    courses: [
      {
        id: "c001",
        name: "Elements of AI",
        courseNumber: "CSCI551",
        Instructor: "David Crandal",
        Description: "It is a very good course",
        Link: "http://www.artificialintelligence.com",
        Location: "Luddy Hall 1090",
        Schedule: "Monday, Wednesday 7:15 PM",
        Added: 0
      },
      {
        id: "c002",
        name: "Software Engineering 1",
        courseNumber: "CSCI565",
        Instructor: "Adeel Bhutta",
        Description: "It's an excellent course",
        Link: "http://www.artificialintelligence.com",
        Location: "Luddy Hall 1091",
        Schedule: "Tuesday, Thurseday 7:15 PM",
        Added: 0
      },
      {
        id: "c003",
        name: "Algorithm Design and Analysis",
        courseNumber: "CSCI503",
        Instructor: "Huan Zhou",
        Description: "The best",
        Link: "http://www.artificialintelligence.com",
        Location: "Luddy Hall 1092",
        Schedule: "Monday, Wednesday 11:15 AM",
        Added: 0
      },
      {
        id: "c004",
        name: "Info Architecture for Web",
        courseNumber: "INFO531",
        Instructor: "Ali Ghazinejad",
        Description: "The best",
        Link: "http://www.artificialintelligence.com",
        Location: "Luddy Hall 1030",
        Schedule: "Monday, 1:15 PM",
        Added: 0
      }
    ]
  };
  render() {
    // console.log("Course", this.props.studentInfo);

    return (
      <React.Fragment>
        {/* <CourseSearch /> */}
        <main className="container">
          <Courses
            courses={this.state.courses}
            stateInfo={this.props.stateInfo}
            onSwap={this.props.onSwap}
            swapWith={1}
            onBack={this.props.onBack}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default SwapCourse;

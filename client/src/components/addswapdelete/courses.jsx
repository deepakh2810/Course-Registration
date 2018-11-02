import React, { Component } from "react";
import Course from "./course";
import ReviewPage from "../reviewcourse/ReviewPage";

class Courses extends Component {
  render() {
    // console.log("hello");
     console.log(this.props);
    return (
      <div>
        {this.props.courses.map(course => (
          <Course
            key={course.id}
            course={course}
            onAdd={this.props.onAdd}
            stateInfo={this.props.stateInfo}
            swapWith={this.props.swapWith}
            onSwap={this.props.onSwap}
            onBack={this.props.onBack}
          />

        ))}



      </div>

    );
  }
}

export default Courses;

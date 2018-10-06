import React, { Component } from "react";
import Course from "./course";

class Courses extends Component {
  render() {
    // console.log("hello");
    // console.log(this.props);
    return (
      <div>
        {this.props.courses.map(course => (
          <Course key={course.id} course={course} onAdd={this.props.onAdd} />
        ))}
      </div>
    );
  }
}

export default Courses;

import React, { Component } from "react";
// import Courses from "./components/courses";
// import CourseCart from "./components/coursecart";
import CourseCart from "./coursecart";
import Courses from "./courses";

class AddCourses extends Component {
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

  handleAddToCart = course => {
    console.log("In Add to cart", course.Schedule);
    let raiseAlert = 0;
    let alertMessage = "The schedule clashes with courses you already have:";
    console.log(this.props.studentInfo.Courses);

    for (var i = 0; i < this.props.studentInfo.Courses.length; i++) {
      console.log("Checking", this.props.studentInfo.Courses[i].Schedule);

      if (this.props.studentInfo.Courses[i].Schedule === course.Schedule) {
        raiseAlert = 1;
        alertMessage =
          alertMessage + " " + this.props.studentInfo.Courses[i].name;
      }
    }

    if (raiseAlert === 1) {
      alert(alertMessage);
    } else {
      const courses = [...this.state.courses];
      const ind = courses.indexOf(course);
      // console.log(ind);
      courses[ind] = { ...course };
      courses[ind].Added = 1;
      // console.log(courses);
      this.setState({ courses });
    }
  };

  handleRemoveFromCart = course => {
    const courses = [...this.state.courses];
    // console.log("COURSES", courses);

    // console.log(course.id);
    for (var i = 0; i < courses.length; i++) {
      if (courses[i].id === course.id) {
        courses[i].Added = 0;
      }
    }
    console.log("Courses", courses);
    this.setState({ courses });
  };

  render() {
    // console.log(this.props.studentInfo);
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <main className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <Courses
                courses={this.state.courses}
                onAdd={this.handleAddToCart}
              />
            </div>
            <div className="col-md-3">
              <CourseCart
                coursesAdded={this.state.courses.filter(c => c.Added === 1)}
                onDelete={this.handleRemoveFromCart}
              />
              <button
                onClick={() => this.props.onBack("add")}
                className="btn btn-primary float-right m-2"
              >
                Back
              </button>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default AddCourses;

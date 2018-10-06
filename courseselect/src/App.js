import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Courses from "./components/courses";
import CourseCart from "./components/coursecart";

class App extends Component {
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
        Schecdule: "Monday, Wednesday 7:15 PM",
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
        Schecdule: "Tuesday, Thurseday 7:15 PM",
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
        Schecdule: "Monday, Wednesday 11:15 AM",
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
        Schecdule: "Monday, 1:15 PM",
        Added: 0
      }
    ]
  };

  handleAddToCart = course => {
    // console.log("Add to cart");
    const courses = [...this.state.courses];
    const ind = courses.indexOf(course);
    // console.log(ind);
    courses[ind] = { ...course };
    courses[ind].Added = 1;
    // console.log(courses);
    this.setState({ courses });
  };

  handleRemoveFromCart = course => {
    const courses = [...this.state.courses];
    // console.log("COURSES", courses);

    // console.log(course.id);
    for (var i = 0; i < courses.length; i++) {
      if (courses[i].id == course.id) {
        courses[i].Added = 0;
      }
    }
    console.log("Courses", courses);
    this.setState({ courses });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
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
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

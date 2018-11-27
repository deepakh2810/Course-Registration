import React, { Component } from "react";
import { connect } from "react-redux";
import { getCourses } from "../../actions/courseActions";
import CourseCart from "../add-swap-delete-course/coursecart";
//import ViewCourse from "../add-swap-delete-course/viewcourse";
import MyViewCourse from "./MyViewCourse";
import Cart from "../payment/Cart";
import Payment from "../payment/Payment";
import { getStudentInfoByName } from "../../actions/studentinfoActions";

var length = 1;


class ListCourses extends Component {

  state = {
    Department: "None",
coursesselected: [
    {
      name:  "Computing & Technology Bootcamp",
      coursenumber: "INFO221" ,
      instructor: "Charles Escue" ,
      description: "A high-level introduction ...",
      location:  "Luddy Hall 2011" ,
      schedule: "Online Course" ,
      year: "2018" ,
      semester:  "Spring" ,
      department:  "INFO"
    }
  ]
    };

  componentDidMount() {
    this.props.getCourses();
  }

  handleSetButton = dept => {
    this.setState({
      Department: dept
    });
  };

  filterCoursesInProfile = course => {
    let flag = true;


    for (var i = 0; i < this.state.coursesselected.length; i++) {
      if (this.state.coursesselected[i].name === course.name) {
        flag = false;
      }
    }
    if (flag === true) {
      return (
          <React.Fragment>
          <MyViewCourse
            key={course.name}
            course={course}
            studentid={this.props.studentid}
            coursesincart={this.state.coursesselected}
            coursesselected={this.state.coursesselected}
            status="addtocart" //add these courses to cart
          />

{/*  //if you put <Payment ... here then you will get the error coursesselected = null when you try to do Add New Course  */ }

          </React.Fragment>

      );
    }
  };
  renderAddCoursesForDepartment = () => {
    let chosenCourses = this.props.courses.courses.filter(
      c => c.department === this.state.Department
    );

    if (this.props.courses.courses.length > 0) {
      return (
        <React.Fragment>
          <main className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                {chosenCourses.map(course =>
                  this.filterCoursesInProfile(course)
                )}
              </div>

            {/*
              <div className="col-md-4">
                <CourseCart
                  studentid={this.props.studentid}
                  coursesincart={this.state.coursesselected}
                />
                <button
                  onClick={() => this.props.onBack("add")}
                  className="btn btn-info float-right m-2"
                >
                  Back
                </button>
              </div>
              */}




            </div>
          </main>
        </React.Fragment>
      );
    } else {
      return <div>Nothing Offered yet</div>;
    }
  };

  renderCourses() {
    if (this.state.Department === "None")
      return <div>{this.renderAddCourses()}</div>;
    else {
      return <div>{this.renderAddCoursesForDepartment()}</div>;
    }
  }

  renderAddCourses() {
    if (this.props.courses.courses.length > 0) {
      return (
        <React.Fragment>
          <main className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                {this.props.courses.courses.map(course =>
                  this.filterCoursesInProfile(course)
                )}
              </div>
              {/*
              <div className="col-md-4">
                <CourseCart
                  studentid={this.props.studentid}
                  coursesincart={this.state.coursesselected}
                />
                <button
                  onClick={() => this.props.onBack("add")}
                  className="btn btn-info float-right m-2"
                >
                  Back
                </button>
              </div>
              */}


            </div>
          </main>
        </React.Fragment>
      );
    } else {
      return <div>Nothing Offered yet</div>;
    }
  }

  render() {
    let searchButtonName = "";
    switch (this.state.Department) {
      case "None":
        searchButtonName = "Select Department";
        break;
      case "CS":
        searchButtonName = "Computer Science";
        break;
      case "INFO":
        searchButtonName = "Informatics";
        break;
      case "ILS":
        searchButtonName = "Library Sciences";
        break;
      case "ENGG":
        searchButtonName = "Engineering";
        break;
      default:
        searchButtonName = "Select Department";
    }
    return (
      <React.Fragment>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {/* {this.state.Department} */}
            {searchButtonName}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button
              onClick={() => this.handleSetButton("CS")}
              className="dropdown-item"
              type="button"
            >
              Computer Science
            </button>
            <button
              onClick={() => this.handleSetButton("INFO")}
              className="dropdown-item"
              type="button"
            >
              Informatics
            </button>
            <button
              onClick={() => this.handleSetButton("ILS")}
              className="dropdown-item"
              type="button"
            >
              Library Sciences
            </button>
            <button
              onClick={() => this.handleSetButton("ENGG")}
              className="dropdown-item"
              type="button"
            >
              Engineering
            </button>
          </div>
        </div>
        <div>{this.renderCourses()}</div>
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
    courses: state.courses,
    studentinfobyname: state.studentsinfo

  };
};

export default connect(
  mapStateToProps,
  { getCourses, getStudentInfoByName}
)(ListCourses);

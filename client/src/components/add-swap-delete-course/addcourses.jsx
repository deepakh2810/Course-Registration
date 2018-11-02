import React, { Component } from "react";
import { connect } from "react-redux";
import CourseCart from "./coursecart";
import { getCourses } from "../../actions/courseActions";
import ViewCourse from "./viewcourse";

class AddCourses extends Component {
  componentDidMount() {
    this.props.getCourses();
  }

  filterCoursesInProfile = course => {
    let flag = true;
    for (var i = 0; i < this.props.coursesselected.length; i++) {
      if (this.props.coursesselected[i].name === course.name) {
        flag = false;
      }
    }

    if (flag === true) {
      return (
        <ViewCourse
          key={course.name}
          course={course}
          studentid={this.props.studentid}
          onAdd={this.handleAddToCart}
          coursesincart={this.props.coursesincart}
          coursesselected={this.props.coursesselected}
          status="addtocart" //add these courses to cart
        />
      );
    }
  };

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
              <div className="col-md-4">
                <CourseCart
                  studentid={this.props.studentid}
                  coursesincart={this.props.coursesincart}
                />
                <button
                  onClick={() => this.props.onBack("add")}
                  className="btn btn-info float-right m-2"
                >
                  Back
                </button>
              </div>
            </div>
          </main>
        </React.Fragment>
      );
    } else {
      return <div>Nothing Offered yet</div>;
    }
  }

  render() {
    return <div>{this.renderAddCourses()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

export default connect(
  mapStateToProps,
  { getCourses }
)(AddCourses);

import React, { Component } from "react";
import { connect } from "react-redux";
import { postCourseToCart } from "../../actions/studentinfoActions";
import { removeCourseFromStudent } from "../../actions/studentinfoActions";
import { swapCourse } from "../../actions/studentinfoActions";
// import { log } from "util";
class ViewCourse extends Component {
  handleAdd = () => {
    let raiseAlert = 0;
    let alertMessage = "The schedule clashes with courses you already have:";

    for (var i = 0; i < this.props.coursesselected.length; i++) {
      if (
        this.props.coursesselected[i].schedule === this.props.course.schedule
      ) {
        raiseAlert = 1;
        alertMessage = alertMessage + " " + this.props.coursesselected[i].name;
      }
    }
    if (raiseAlert === 1) {
      alert(alertMessage);
    } else {
      this.props.postCourseToCart(this.props.studentid, this.props.course);
    }
  };

  handleDelete = () => {
    this.props.removeCourseFromStudent(this.props.studentid, this.props.course);
  };

  hendleSwap = () => {
    this.props.swapCourse(
      this.props.studentid,
      this.props.course,
      this.props.swapCourseInfo.courseId
    );
    let alertMessage =
      'Your course "' +
      this.props.swapCourseInfo.courseName +
      '" is swapped with "' +
      this.props.course.name +
      '".';
    alert(alertMessage);
    window.location.reload();

    this.props.onBack("swap");
  };

  renderAddOrSwapButton() {
    if (this.props.status === "selectedcourses") {
      return (
        <React.Fragment>
          <button
            onClick={() =>
              this.props.onSwap(this.props.course._id, this.props.course.name)
            }
            className="btn btn-info"
          >
            Swap This course{" "}
          </button>
          <button
            onClick={this.handleDelete}
            className="btn btn-info float-right"
          >
            Delete
          </button>
        </React.Fragment>
      );
    } else if (this.props.status === "addtocart") {
      for (var i = 0; i < this.props.coursesincart.length; i++) {
        if (this.props.coursesincart[i].name === this.props.course.name) {
          return (
            <React.Fragment>
              <button className="btn btn-info m-2" disabled>
                Add
              </button>
            </React.Fragment>
          );
        }
      }
      return (
        <React.Fragment>
          <button onClick={this.handleAdd} className="btn btn-info m-2">
            Add
          </button>
        </React.Fragment>
      );
    } else if (this.props.status === "swapwith") {
      return (
        <React.Fragment>
          <button onClick={this.hendleSwap} className="btn btn-info m-2">
            Swap with this Course
          </button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <button onClick={this.handleAdd} className="btn btn-info m-2">
            Add
          </button>
        </React.Fragment>
      );
    }
  }

  render() {
    let CourseIdentifier =
      this.props.course.coursenumber + " " + this.props.course.name;

    return (
      <div className="card w-90 m-2">
        <div className="card-body">
          <div className="card-title">
            <h2>{CourseIdentifier}</h2>
          </div>
          <div className="card-text">
            <p>{this.props.course.description}</p>
            <h4>
              Instructor: <strong>{this.props.course.instructor}</strong>
            </h4>
            <h4>{this.props.course.location}</h4>
            <h5>{this.props.course.schedule}</h5>
            <a href="#" className="float-right">
              View More
            </a>
            <br />
            {this.renderAddOrSwapButton()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    studentinfo: state.studentinfo
  };
};

export default connect(
  mapStateToProps,
  { postCourseToCart, removeCourseFromStudent, swapCourse }
)(ViewCourse);

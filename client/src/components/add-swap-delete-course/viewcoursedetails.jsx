import React, { Component } from "react";
import { getCoursesByCourseNumber } from "../../actions/courseActions";
import { connect } from "react-redux";

class ViewCourseDetails extends Component {
  componentDidMount() {
    let coursenumber = this.props.match.params.coursenumber;

    this.props.getCoursesByCourseNumber(coursenumber);
  }
  renderCourses() {
    if (this.props.courses.courses._id == null) {
      return <div>Loading..</div>;
    } else {
      return (
        <React.Fragment>
          <h1>{this.props.courses.courses.name}</h1>
          <br />
          <h2>
            Instructor: <strong>{this.props.courses.courses.instructor}</strong>
          </h2>
          <p>{this.props.courses.courses.description}</p>
          <div className="row">
            <div className="col-md-6">
              <h3>Location: {this.props.courses.courses.location}</h3>
              <h4>Schedule: {this.props.courses.courses.schedule}</h4>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">{this.renderCourses()}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

export default connect(
  mapStateToProps,
  { getCoursesByCourseNumber }
)(ViewCourseDetails);

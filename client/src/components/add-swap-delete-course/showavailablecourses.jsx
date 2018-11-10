import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCourses } from "../../actions/courseActions";
// import { Link } from "react-router-dom";

class ShowCourse extends Component {
  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    console.log(this.props);
    return <h1>Hello</h1>;
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
)(ShowCourse);

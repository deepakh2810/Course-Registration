import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "../layout/Sidebar";
import CreateCourse from "./createcourse";

class CreateCourseWrapper extends Component {
  render() {
    console.log("In create course wrapper");
    const { user } = this.props.auth;

    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-10">
              <CreateCourse username={user.name} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

CreateCourseWrapper.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CreateCourseWrapper);

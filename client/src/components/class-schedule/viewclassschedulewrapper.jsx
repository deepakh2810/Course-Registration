import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sidebar from "../layout/Sidebar";
import ViewSchedule from "./viewschedule";

class ViewClassScheduleWrapper extends Component {
  state = {};
  render() {
    const { user } = this.props.auth;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-10">
              <ViewSchedule username={user.name} />
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

ViewClassScheduleWrapper.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(ViewClassScheduleWrapper);

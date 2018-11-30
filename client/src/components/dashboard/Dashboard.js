import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import Sidebar from "../layout/Sidebar";
import ProfileActions from "./ProfileActions";
import Experience from "./Experience";
import Education from "./Education";

import { Link } from "react-router-dom";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  onDeleteClick(e) {
    this.props.deleteAccount();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <div className="col-md-10">
                <div className="create-profile">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 m-aut">
                        <h1 className="display-4 text-center"> Edit Profile</h1>

                        <p className="lead text-muted">
                          Welcome{" "}
                          <Link to={`/profile/${profile.handle}`}>
                            {user.name}
                          </Link>
                        </p>
                        <ProfileActions />
                        <Experience experience={profile.experience} />
                        <Education education={profile.education} />

                        <div style={{ marginBottom: "60px" }} />
                        <button
                          onClick={this.onDeleteClick.bind(this)}
                          className="btn btn-danger"
                        >
                          Delete My Account
                        </button>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        dashboardContent = (
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <div className="col-md-2">
                <div className="col-md-10">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="row">
                        <Link
                          to="/create-profile"
                          className="btn btn-lg btn-info"
                        >
                          Create Profile
                        </Link>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    return (
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">{dashboardContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);

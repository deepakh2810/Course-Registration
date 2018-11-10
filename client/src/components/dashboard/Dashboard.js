import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import CreateProfile from "../create-profile/CreateProfile";

import { Link } from "react-router-dom";
import AddSwapDelete from "../addswapdelete/addswapdel";
import StudentDashboard from "../cards/studentdashboard";
import Navbar from "../layout/Navbar";
//import Payment from "../payment/Payment";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
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
        dashboardContent = (<div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>
          <div className="col-md-10">
            <StudentDashboard />
          </div>
        </div>
        </div>);
          
      } else {
        dashboardContent = <h1></h1>
         
      
      }
    }
    return (
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              {dashboardContent} 
              
            </div>
           
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
  profile: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);


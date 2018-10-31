import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import CreateProfile from "../create-profile/CreateProfile";
import './navBar.css';
import { Link } from "react-router-dom";
import AddSwapDelete from "../addswapdelete/addswapdel";

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
        dashboardContent = (<React.Fragment>
          <div className="wrapper">
            <nav id="sidebar">
            <div className="sidebar-header">
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "100px", marginLeft: "50px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />{" "}
            <p className="lead text-muted" align="center" > Welcome <br/><b>{user.name}</b></p>
              
              </div>
              
              <ul className="list-unstyled components">
              <li>
                    <a href="/"  aria-expanded="true">
                    <i className="glyphicon glyphicon-home" />
                    Home
                    </a>
              </li>
              <li>
                    <a href="/create-profile" aria-expanded="true">
                    <i className="glyphicon glyphicon-user" />
                    User Details
                    </a>
             </li>
              <li>

                  <a href="/AddSwapDelete" aria-expanded="true">
                    <i className="glyphicon glyphicon-duplicate" />
                      Course Search
                  </a>
                  </li>
               <li>
                  <a href="/" aria-expanded="true">
                    <i className="glyphicon glyphicon-link" />
                    Course Reviews
                  </a>
                </li>
                <li>
                  <a href="/" aria-expanded="true">
                    <i className="glyphicon glyphicon-paperclip" />
                     Group Chat
                  </a>
                </li>
                <li>
                  <a href="/" aria-expanded="true">
                    <i className="glyphicon glyphicon-send" />
                    Direct Message
                  </a>
                </li>
             

                <li>
                  <a href="/" aria-expanded="true">
                    <i className="glyphicon glyphicon-shopping-cart" />
                    Check Out
                  </a>
                </li>
            
              </ul>
            </nav>
           
            {/* <div id="content">
                <div className="container-fluid">
                  <div className="navbar-header">
                </div>
            </div>
        </div>*/}
          </div> 
      </React.Fragment>
        );
          
      } else {
        dashboardContent = (
         
          <React.Fragment>
          <div className="wrapper">
            <nav id="sidebar">
            <div className="sidebar-header">
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "100px", marginLeft: "50px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />{" "}
            <p className="lead text-muted" align="center" > Welcome <br/><b>{user.name}</b></p>
              
              </div>
              
              <ul className="list-unstyled components">
              <li>
                    <a href="/"  aria-expanded="true">
                    <i className="glyphicon glyphicon-home" />
                    Home
                    </a>
              </li>
              <li>
                    <a href="/create-profile" aria-expanded="true">
                    <i className="glyphicon glyphicon-user" />
                    User Details
                    </a>
             </li>
              <li>

                  <a href="/AddSwapDelete" aria-expanded="true">
                    <i className="glyphicon glyphicon-duplicate" />
                      Course Search
                  </a>
                  </li>
               <li>
                  <a href="/" aria-expanded="true">
                    <i className="glyphicon glyphicon-link" />
                    Course Reviews
                  </a>
                </li>
                <li>
                  <a href="/" aria-expanded="true">
                    <i className="glyphicon glyphicon-paperclip" />
                     Group Chat
                  </a>
                </li>
                <li>
                  <a href="/" aria-expanded="true">
                    <i className="glyphicon glyphicon-send" />
                    Direct Message
                  </a>
                </li>
             

                <li>
                  <a href="/" aria-expanded="true">
                    <i className="glyphicon glyphicon-shopping-cart" />
                    Check Out
                  </a>
                </li>
            
              </ul>
            </nav>
           
            {/* <div id="content">
                <div className="container-fluid">
                  <div className="navbar-header">
                </div>
            </div>
        </div>*/}
          </div> 
      </React.Fragment>
        );
      }
    }
    return (
      <div className="dashboard">
        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">  */}
              {dashboardContent}
            </div>
      //      </div>
      //    </div>
      // </div>
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


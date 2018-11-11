import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import CreateProfile from "../create-profile/CreateProfile";
import Radium from "radium";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import "./navBar.css";
library.add(faStroopwafel);

class SidebarProf extends Component {
  state = {};
  render() {
    const styles = {
      base: {
        ":hover": {
          color: "#ffffff",
          cursor: "pointer"
        }
      }
    };

    const { user } = this.props.auth;
    return (
      <React.Fragment>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "20px",
              width: "200%",
              background: "#2F363A",
              marginLeft: "-15px",
              marginTop: "-24px",
              height: "180vh"
            }}
          >
            <div className="sidebar-header">
              <img
                className="rounded-circle"
                src={user.avatar}
                style={{ width: "100px", marginLeft: "25px" }}
              />
              <p className="lead" align="center">
                <b>
                  {" "}
                  Welcome <br />
                  {user.name}
                </b>
              </p>
            </div>

            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="/"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-home" />
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/create-profile"
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-user-ninja" />
                  User Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/createnewcourse"
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-search" />
                  Create Course
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-envelope-square" />
                  Reviews
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-comments" />
                  Let's Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

SidebarProf.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
export default connect(mapStateToProps)(SidebarProf);

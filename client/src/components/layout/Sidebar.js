import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import "./navBar.css";

library.add(faStroopwafel);

class Sidebar extends Component {
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
                <Link
                  className="nav-link active"
                  to="/"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-home" />
                  &nbsp; Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-user-ninja" />
                  &nbsp;User Details
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/addcourses"
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-search" />
                  &nbsp;Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-envelope-square" />
                  &nbsp;Reviews
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/chat"
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-comments" />
                  &nbsp; Let's Chat
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-shopping-cart" />
                  &nbsp; Shopping Cart
                </Link>
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

Sidebar.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
export default connect(mapStateToProps)(Sidebar);

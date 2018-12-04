import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/edatesActions";
// import { Link } from "react-router-dom";
import EDatesCard from "./edatescard";

class EdatesAdmin extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  getName(user) {
    if (user.local) {
      return user.local.name;
    } else {
      return user.google.name;
    }
  }

  render() {
    if (this.props.users.users) {
      return (
        <React.Fragment>
          {this.props.users.users.map(user => (
            <EDatesCard
              key={user.university_id}
              data={user}
              name={this.getName(user)}
            />
          ))}
        </React.Fragment>
      );
    } else {
      return <h3>Loading...</h3>;
    }
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(EdatesAdmin);

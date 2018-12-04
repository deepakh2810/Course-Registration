import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/holdsactions";
import HoldsCard from "./holdscard";

class HoldsAdmin extends Component {
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
            <HoldsCard key={user._id} data={user} name={this.getName(user)} />
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
)(HoldsAdmin);

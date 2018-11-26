import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/todoactions";
import { Link } from "react-router-dom";

class ToDoAdmin extends Component {
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
    console.log("In todo Admin:", this.props);
    if (this.props.users.users) {
      return (
        <React.Fragment>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Role</th>
                <th scope="col">University Id</th>
                <th scope="col">User Name</th>
                <th scope="col" />
              </tr>
            </thead>
            {this.props.users.users.map(user => (
              <tbody key={user.university_id}>
                <tr>
                  <td>
                    <h3>{user.user_type}</h3>
                  </td>
                  <td>
                    <h3>{user.university_id}</h3>
                  </td>
                  <td>
                    <h3>{this.getName(user)}</h3>
                  </td>
                  <td>
                    <Link to={"/addtodo/" + user.university_id}>
                      <button type="button" className="btn btn-info m-2">
                        Add
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </React.Fragment>
      );
      //   return <h2>Admin</h2>;
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
)(ToDoAdmin);

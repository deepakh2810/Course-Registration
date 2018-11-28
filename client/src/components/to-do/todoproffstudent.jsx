import React, { Component } from "react";
import { getToDoByUniId } from "../../actions/addtodoactions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ToDoProffStudent extends Component {
  componentDidMount() {
    console.log("In todo student-proff:", this.props);
    const university_id = this.props.auth.user.university_id;
    this.props.getToDoByUniId(university_id);
  }
  renderExistingContent() {
    // return <h2>In here</h2>;
    if (this.props.todos.todos[0]) {
      console.log("In the render component: ");
      return (
        <React.Fragment>
          <h2>Existing Items on the list:</h2>
          {this.props.todos.todos.map(todo => (
            <div className="card w-90 m-2">
              <div className="card-body">
                <div className="card-title">
                  <div className="row">
                    <div className="col col-md-12">
                      <h4 key={todo._id}>{todo.Todo_Comment}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      );
    }
  }

  render() {
    console.log("In Proff-student To Do", this.props);
    return (
      <React.Fragment>
        {/* <h2>Hello</h2> */}
        <div className="container-fluid">{this.renderExistingContent()}</div>
      </React.Fragment>
    );
  }
}
ToDoProffStudent.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { getToDoByUniId }
)(ToDoProffStudent);
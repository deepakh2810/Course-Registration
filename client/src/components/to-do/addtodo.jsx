import React, { Component } from "react";
import SidebarAdmin from "../layout/SidebarAdmin";
import {
  getToDoByUniId,
  postToDoByUniId,
  deleteByToDoId
} from "../../actions/addtodoactions";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    const university_id = this.props.match.params.university_id;
    this.props.getToDoByUniId(university_id);
  }
  hendleDelete(todo_id) {
    console.log("In Delete", todo_id);
    console.log("UniID: ", this.props.match.params.university_id);
    this.props.deleteByToDoId(todo_id, this.props.match.params.university_id);
  }
  onSubmit(e) {
    console.log("On submit");
    console.log("The state: ", this.state);

    // e.preventDefault();
    const todoData = {
      University_ID: this.props.match.params.university_id,
      description: this.state.description
    };
    this.props.postToDoByUniId(todoData, this.props.history);
  }

  onChange(e) {
    console.log("onchange");
    console.log("target: ", e.target.name);
    console.log("value: ", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  renderToDoTextBox() {
    return (
      <React.Fragment>
        <h2>Add a new item:</h2>
        <form onSubmit={this.onSubmit}>
          <TextAreaFieldGroup
            placeholder="* Description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            // error={errors.description}
            info="Add a new To Do item"
          />
          <input
            type="submit"
            // value="Submit"
            className="btn btn-info"
          />
        </form>
      </React.Fragment>
    );
  }

  renderExistingContent() {
    // return <h2>In here</h2>;
    if (this.props.todos.todos[0]) {
      console.log("In the render component: ");
      return (
        <React.Fragment>
          <br />
          <br />
          <h2>Existing Items on the list:</h2>
          {this.props.todos.todos.map(todo => (
            <div className="card w-90 m-2">
              <div className="card-body">
                <div className="card-title">
                  <div className="row">
                    <div className="col col-md-10">
                      <h4>{todo.Todo_Comment}</h4>
                    </div>
                    <div className="col col-md-2">
                      <button
                        onClick={() => this.hendleDelete(todo._id)}
                        className="btn btn-info m-2"
                      >
                        Delete
                      </button>
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
    console.log("In Add To Do", this.props);
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <SidebarAdmin />
            </div>
            <div className="col-md-10">
              {/* <h2>Add to do</h2> */}
              {this.renderToDoTextBox()}
              {this.renderExistingContent()}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { getToDoByUniId, postToDoByUniId, deleteByToDoId }
)(AddToDo);

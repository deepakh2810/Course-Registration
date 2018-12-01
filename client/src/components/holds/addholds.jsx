import React, { Component } from "react";
import SidebarAdmin from "../layout/SidebarAdmin";
import {
  getHoldsByUniId,
  postHoldsByUniId,
  deleteByHoldsId
} from "../../actions/addholdsactions";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class AddHolds extends Component {
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
    this.props.getHoldsByUniId(university_id);
  }
  hendleDelete(holds_id) {
    console.log("In Delete", holds_id);
    console.log("UniID: ", this.props.match.params.university_id);
    this.props.deleteByHoldsId(holds_id, this.props.match.params.university_id);
  }
  onSubmit(e) {
    console.log("On submit");
    console.log("The state: ", this.state);

    e.preventDefault();
    const holdsData = {
      University_ID: this.props.match.params.university_id,
      description: this.state.description
    };
    console.log("this.props.history: ", this.props.history);

    this.props.postHoldsByUniId(holdsData, this.props.history);
  }

  onChange(e) {
    console.log("onchange");
    console.log("target: ", e.target.name);
    console.log("value: ", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  renderHoldsTextBox() {
    console.log("this.props.history: ", this.props.history);

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
            info="Add a new Hold item"
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

    if (this.props.holds.holds[0]) {
      console.log("this.props.history: ", this.props.history);

      console.log("In the render component: ");
      return (
        <React.Fragment>
          <br />
          <br />
          <h2>Existing Items on the list:</h2>
          {this.props.holds.holds.map(holds => (

            <div className="card w-90 m-2">
              <div className="card-body">
                <div className="card-title">
                  <div className="row">
                    <div className="col col-md-10">
                      <h4>{holds.Holds_Comment}</h4>
                    </div>
                    <div className="col col-md-2">
                      <button
                        onClick={() => this.hendleDelete(holds._id)}
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
              {this.renderHoldsTextBox()}
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
    holds: state.holds
  };
};

export default connect(
  mapStateToProps,
  { getHoldsByUniId, postHoldsByUniId, deleteByHoldsId }
)(AddHolds);

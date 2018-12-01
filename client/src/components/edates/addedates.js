import React, { Component } from "react";
import SidebarAdmin from "../layout/SidebarAdmin";
import {
  getEdatesByUniId,
  postEdatesByUniId,
  deleteByEdatesId
} from "../../actions/addedatesactions";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class AddEdates extends Component {
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
    this.props.getEdatesByUniId(university_id);
  }
  hendleDelete(edates_id) {
    this.props.deleteByEdatesId(edates_id, this.props.match.params.university_id);
  }
  onSubmit(e) {
  
    const edatesData = {
      University_ID: this.props.match.params.university_id,
      description: this.state.description
    };
    this.props.postEdatesByUniId(edatesData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  renderEdatesTextBox() {
    return (
      <React.Fragment>
        <h2>Add the new Enrollment date:</h2>
        <form onSubmit={this.onSubmit}>
          <TextAreaFieldGroup
            placeholder="* Enrollment Date in YYYY-mm-dd format"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            info="Add the Enrollment date"
          />
          <input
            type="submit"
            className="btn btn-info"
          />
        </form>
      </React.Fragment>
    );
  }

  renderExistingContent() {
    if (this.props.edates.edates[0]) {
      return (
        <React.Fragment>
          <br />
          <br />
          <h2>Existing Items on the list:</h2>
          {this.props.edates.edates.map(edates => (
            <div className="card w-90 m-2">
              <div className="card-body">
                <div className="card-title">
                  <div className="row">
                    <div className="col col-md-10">
                      <h4>{edates.Edates}</h4>
                    </div>
                    <div className="col col-md-2">
                      <button
                        onClick={() => this.hendleDelete(edates._id)}
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
    console.log("Edates: ", this.props);
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <SidebarAdmin />
            </div>
            <div className="col-md-10">
              {/* <h2>Add to do</h2> */}
              {this.renderEdatesTextBox()}
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
    edates: state.edates
  };
};

export default connect(
  mapStateToProps,
  { getEdatesByUniId, postEdatesByUniId, deleteByEdatesId }
)(AddEdates);

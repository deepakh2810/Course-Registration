import React, { Component } from "react";
import SidebarAdmin from "../layout/SidebarAdmin";
import {
  getFaidByUniId,
  postFaidByUniId,
  deleteByFaidId
} from "../../actions/addfaidactions";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class AddFaid extends Component {
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
    this.props.getFaidByUniId(university_id);
  }
  hendleDelete(faid_id) {
    this.props.deleteByFaidId(faid_id, this.props.match.params.university_id);
  }
  onSubmit(e) {
  
    const faidData = {
      University_ID: this.props.match.params.university_id,
      description: this.state.description
    };
    this.props.postFaidByUniId(faidData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  renderFaidTextBox() {
    return (
      <React.Fragment>
        <h2>Add the new Financial Aid Amount:</h2>
        <form onSubmit={this.onSubmit}>
          <TextAreaFieldGroup
            placeholder="* Financial Aid Amount"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            info="Add the Financial Aid Amount"
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
    if (this.props.faid.faid[0]) {
      return (
        <React.Fragment>
          <br />
          <br />
          <h2>Existing Items on the list:</h2>
          {this.props.faid.faid.map(faid => (
            <div className="card w-90 m-2">
              <div className="card-body">
                <div className="card-title">
                  <div className="row">
                    <div className="col col-md-10">
                      <h4>{faid.faid}</h4>
                    </div>
                    <div className="col col-md-2">
                      <button
                        onClick={() => this.hendleDelete(faid._id)}
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
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <SidebarAdmin />
            </div>
            <div className="col-md-10">
              {/* <h2>Add to do</h2> */}
              {this.renderFaidTextBox()}
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
    faid: state.faid
  };
};

export default connect(
  mapStateToProps,
  { getFaidByUniId, postFaidByUniId, deleteByFaidId }
)(AddFaid);

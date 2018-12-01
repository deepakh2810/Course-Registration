import React, { Component } from "react";
import { getEdatesByUniId } from "../../actions/addedatesactions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class EdatesStudent extends Component {
  componentDidMount() {
    const university_id = this.props.auth.user.university_id;
    this.props.getEdatesByUniId(university_id);
  }
  renderExistingContent() {
    if (this.props.edates.edates[0]) {
      return (
        <React.Fragment>
          <h2>Existing Items on the list:</h2>
          {this.props.edates.edates.map(edates => (
            <div className="card w-90 m-2">
              <div className="card-body">
                <div className="card-title">
                  <div className="row">
                    <div className="col col-md-12">
                      <h4 key={edates._id}>{edates.edates}</h4>
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
    console.log("In EDates front end: ", this.props);
    return (
      <React.Fragment>
        <div className="container-fluid">{this.renderExistingContent()}</div>
      </React.Fragment>
    );
  }
}
EdatesStudent.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    edates: state.edates,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { getEdatesByUniId }
)(EdatesStudent);
import React, { Component } from "react";
import { log } from "util";

class ViewCourse extends Component {
  renderAddOrSwapButton() {
    if (this.props.status === "added") {
      return (
        <React.Fragment>
          <button className="btn btn-info">Swap This course </button>
          <button className="btn btn-info float-right">Delete</button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <button className="btn btn-info m-2">Add</button>
        </React.Fragment>
      );
    }
  }
  render() {
    return (



      <div className="card w-75 m-2">
        <div className="card-body">
          <div className="card-title">
            <h2>{this.props.course.name}</h2>
          </div>
          <div className="card-text">
            <p>{this.props.course.description}</p>
            <h4>{this.props.course.location}</h4>
            <h5>{this.props.course.schedule}</h5>
            <a href="#" className="float-right">
              View More
            </a>
            <br />
            {this.renderAddOrSwapButton()}
          </div>
        </div>
      </div>

    );
  }
}

export default ViewCourse;

import React, { Component } from "react";

class Course extends Component {
  renderAddButton() {
    if (this.props.course.Added === 1)
      return (
        <button
          onClick={() => this.props.onAdd(this.props.course)}
          className="btn btn-primary btn-sm"
          disabled
        >
          Add to cart
        </button>
      );

    return (
      <button
        onClick={() => this.props.onAdd(this.props.course)}
        className="btn btn-primary btn-sm"
      >
        Add to cart
      </button>
    );
  }
  render() {
    return (
      <div className="card w-75 m-2">
        <div className="card-body">
          <div className="card-title">
            <h2>{this.props.course.name}</h2>
          </div>
          <div className="card-text">
            <p>{this.props.course.Description}</p>
            <h4>{this.props.course.Location}</h4>
            <h5>{this.props.course.Schecdule}</h5>
            <a href="#" className="float-right">
              View More
            </a>
            {this.renderAddButton()}
          </div>
        </div>
      </div>
    );
  }
}

export default Course;

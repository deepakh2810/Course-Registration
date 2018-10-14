import React, { Component } from "react";

class Course extends Component {
  renderAddOrSwapButton() {
    // console.log("Ranjana: ", this.props);
    if (this.props.stateInfo.add === 1) {
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

    if (this.props.stateInfo.swap.ind === 1) {
      return (
        <button
          onClick={() => {
            this.props.onSwap(
              this.props.stateInfo.swap.courseId,
              this.props.course
            );
            this.props.onBack("swap");
          }}
          className="btn btn-primary btn-sm"
        >
          Swap
        </button>
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
            <p>{this.props.course.Description}</p>
            <h4>{this.props.course.Location}</h4>
            <h5>{this.props.course.Schedule}</h5>
            <a href="#" className="float-right">
              View More
            </a>
            {this.renderAddOrSwapButton()}
          </div>
        </div>
      </div>
    );
  }
}

export default Course;

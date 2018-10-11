import React, { Component } from "react";
import AddCourses from "./addcourses";
import SwapCourse from "./swapcourse";

class Selection extends Component {
  state = {
    selectButtonInfo: {
      add: 0,
      swap: {
        ind: 0,
        courseId: ""
      }
    }
  };

  handleAddView = () => {
    // console.log("Am I here?");
    // console.log(this.state.selectButtonInfo);

    const selectButtonInfo = this.state.selectButtonInfo;
    selectButtonInfo.add = 1;
    // console.log(selectButtonInfo);

    // this.state.selectButton.add = 1;
    this.setState(selectButtonInfo);
  };

  handleSwapView = courseId => {
    // console.log("Handle Swap");
    const selectButtonInfo = this.state.selectButtonInfo;
    selectButtonInfo.swap.ind = 1;
    selectButtonInfo.swap.courseId = courseId;
    // console.log(selectButtonInfo);

    this.setState(selectButtonInfo);
  };

  handleBacktoHome = backFrom => {
    // console.log("Back From:", backFrom);
    const selectButtonInfo = this.state.selectButtonInfo;
    // console.log(selectButtonInfo);

    switch (backFrom) {
      case "add":
        selectButtonInfo.add = 0;
        break;
      case "swap":
        selectButtonInfo.swap.ind = 0;
        break;
      default:
        break;
    }

    // console.log("After update:", selectButtonInfo);
    this.setState(selectButtonInfo);
  };

  renderSelection() {
    if (this.state.selectButtonInfo.add === 1)
      return (
        <React.Fragment>
          <AddCourses
            studentInfo={this.props.studentInfo}
            stateInfo={this.state.selectButtonInfo}
            onBack={this.handleBacktoHome}
          />
        </React.Fragment>
      );

    if (this.state.selectButtonInfo.swap.ind === 1)
      return <div>{this.renderSwapCourses()}</div>;

    return <div>{this.renderSelectionContent()}</div>;
  }

  renderSwapCourses() {
    return (
      <React.Fragment>
        <SwapCourse
          // studentInfo={this.props.studentInfo}
          stateInfo={this.state.selectButtonInfo}
          onBack={this.handleBacktoHome}
          onSwap={this.props.onSwap}
        />
      </React.Fragment>
    );
  }

  renderSelectionContent() {
    return (
      <React.Fragment>
        <button onClick={this.handleAddView} className="btn btn-info m-2">
          Add New Course{" "}
        </button>
        <h2 className="m-2">Your Current Schedule: </h2>
        {this.props.studentInfo.Courses.map(Course => (
          <div key={Course.id} className="card  m-4">
            <div className="card-body">
              <div className="card-title">
                <h3>{Course.name}</h3>
              </div>
              <div className="card-text">
                <p>{Course.Description}</p>
                <h4>{Course.Location}</h4>
                <h5>{Course.Schedule}</h5>
              </div>
              <button
                onClick={() => this.handleSwapView(Course.id)}
                className="btn btn-info m-2"
              >
                Swap This course{" "}
              </button>
              <button
                onClick={() => this.props.onDelete(Course.id)}
                className="btn btn-info float-right"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }

  render() {
    return <div>{this.renderSelection()}</div>;
  }
}

export default Selection;

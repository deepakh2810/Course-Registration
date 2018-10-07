import React, { Component } from "react";
import AddCourses from "./addcourses";

class Selection extends Component {
  state = {
    selectButtons: {
      add: 0,
      delete: 0,
      swap: 0
    }
  };

  renderAddCourses = () => {
    // console.log("Am I here?");
    // console.log(this.state.selectButtons);

    const selectButtons = this.state.selectButtons;
    selectButtons.add = 1;
    // console.log(selectButtons);

    // this.state.selectButton.add = 1;
    this.setState(selectButtons);
  };

  handleBacktoHome = backFrom => {
    console.log("Back From:", backFrom);
    const selectButtons = this.state.selectButtons;
    console.log(selectButtons);

    switch (backFrom) {
      case "add":
        selectButtons.add = 0;
    }

    console.log("After update:", selectButtons);
    this.setState(selectButtons);
  };

  renderSelection() {
    if (this.state.selectButtons.add === 1)
      return (
        <React.Fragment>
          <AddCourses
            studentInfo={this.props.studentInfo}
            // stateInfo={this.state.selectButtons}
            onBack={this.handleBacktoHome}
          />
        </React.Fragment>
      );

    return (
      <div>
        <div className="row m-2">
          {/* <div className="col"> */}
          <button onClick={this.renderAddCourses} className="btn btn-primary">
            Add{" "}
          </button>
        </div>
        <div className="row m-2">
          <button className="btn btn-primary">Delete</button>
        </div>
        <div className="row m-2">
          <button className="btn btn-primary">Swap </button>
        </div>
      </div>
    );
  }

  render() {
    // console.log(this.props.studentInfo);

    return this.renderSelection();
  }
}

export default Selection;

import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudentinfo } from "../../actions/studentinfoActions";
import ViewCourse from "./viewcourse";
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

  componentDidMount() {
    this.props.getStudentinfo();
  }

  findStudentInfo = () => {
    let username = this.props.username;

    let availableCourses = [];
    this.props.studentinfo.studentinfo.forEach(function(item) {
      if (item.name === username) {
        availableCourses = item.courses;
      }
    });

    return availableCourses;
  };
  renderSelection() {
    if (this.state.selectButtonInfo.add === 1)
      return (
        <React.Fragment>
          <AddCourses
          // studentInfo={this.props.studentInfo}
          // stateInfo={this.state.selectButtonInfo}
          // onBack={this.handleBacktoHome}
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
        {this.findStudentInfo().map(course => (
          <ViewCourse key={course._id} course={course} status="added" />
        ))}
      </React.Fragment>
    );
  }

  render() {
    return <div>{this.renderSelection()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    studentinfo: state.studentsinfo
  };
};

export default connect(
  mapStateToProps,
  { getStudentinfo }
)(Selection);

import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudentInfoByName } from "../../actions/studentinfoActions";
import ViewCourse from "./viewcourse";
import AddCourses from "./addcourses";
import SwapCourse from "./swapcourse";
import Cart from "../payment/Cart";
import Payment from "../payment/Payment";
import ListCourses from "../reviewcourse/ListCourses"


class Selection extends Component {
  state = {
    selectButtonInfo: {
      add: 0,
      swap: {
        ind: 0,
        courseId: "",
        courseName: ""
      }
    }
  };

  handleAddView = () => {
    const selectButtonInfo = this.state.selectButtonInfo;
    selectButtonInfo.add = 1;

    this.setState(selectButtonInfo);
  };

  handleBacktoHome = backFrom => {
    const selectButtonInfo = this.state.selectButtonInfo;

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

    this.setState(selectButtonInfo);
  };

  handleSwapView = (courseid, coursename) => {
    const selectButtonInfo = this.state.selectButtonInfo;
    selectButtonInfo.swap.ind = 1;
    selectButtonInfo.swap.courseId = courseid;
    selectButtonInfo.swap.courseName = coursename;

    this.setState(selectButtonInfo);
  };

  componentDidMount() {
    this.props.getStudentInfoByName(this.props.username);
  }

  renderSelection() {
    if (this.state.selectButtonInfo.add === 1)
      return (
        <React.Fragment>
          <AddCourses
            onBack={this.handleBacktoHome}
            studentid={this.props.studentinfobyname.studentinfo.studentid}
            coursesincart={
              this.props.studentinfobyname.studentinfo.coursesincart
            }
            coursesselected={
              this.props.studentinfobyname.studentinfo.coursesselected
            }
          />

          <ListCourses
            onBack={this.handleBacktoHome}
            studentid={this.props.studentinfobyname.studentinfo.studentid}
            coursesincart={
              this.props.studentinfobyname.studentinfo.coursesincart
            }
            coursesselected={
              this.props.studentinfobyname.studentinfo.coursesselected
            }
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
          studentid={this.props.studentinfobyname.studentinfo.studentid}
          stateInfo={this.state.selectButtonInfo}
          onBack={this.handleBacktoHome}
          coursesselected={
            this.props.studentinfobyname.studentinfo.coursesselected
          }
          coursesincart={this.props.studentinfobyname.studentinfo.coursesincart}
        />

        <ListCourses
          studentid={this.props.studentinfobyname.studentinfo.studentid}
          stateInfo={this.state.selectButtonInfo}
          onBack={this.handleBacktoHome}
          coursesselected={
            this.props.studentinfobyname.studentinfo.coursesselected
          }
          coursesincart={this.props.studentinfobyname.studentinfo.coursesincart}
        />

      </React.Fragment>
    );
  }

  renderSchedule() {
    if (this.props.studentinfobyname.studentinfo.coursesselected.length === 0) {
      return (
        <h4 className="m-2">
          You do not have any courses added. Please add few.
        </h4>
      );
    } else {
      return (
        <React.Fragment>
          {this.props.studentinfobyname.studentinfo.coursesselected.map(
            course => (
              <ViewCourse
                key={course._id}
                studentid={this.props.studentinfobyname.studentinfo.studentid}
                course={course}
                status="selectedcourses" //courses that are already added to the profile
                onSwap={this.handleSwapView}
                coursesselected={
                  this.props.studentinfobyname.studentinfo.coursesselected
                }
              />
            )
          )}


        {/*  {this.props.studentinfobyname.studentinfo.coursesselected.map(
            course => (
              <ListCourses
                key={course._id}
                studentid={this.props.studentinfobyname.studentinfo.studentid}
                course={course}
                status="selectedcourses" //courses that are already added to the profile
                onSwap={this.handleSwapView}
                coursesselected={
                  this.props.studentinfobyname.studentinfo.coursesselected
                }
              />
            )
          )}  */}
        </React.Fragment>
      );
    }
  }

  renderSelectionContent() {
    return (
      <React.Fragment>
        <button onClick={this.handleAddView} className="btn btn-info m-2">
          Add New Course{" "}
        </button>
        <h2 className="m-2">Your Current Schedule: </h2>
        <div>{this.renderSchedule()}</div>
      </React.Fragment>
    );
  }

  render() {
    if (this.props.studentinfobyname.studentinfo.coursesselected) {
      return <div>{this.renderSelection()}</div>;
    } else {
      return <div>Loading..</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    studentinfobyname: state.studentsinfo
  };
};

export default connect(
  mapStateToProps,
  { getStudentInfoByName }
)(Selection);

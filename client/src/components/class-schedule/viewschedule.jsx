import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudentInfoByName } from "../../actions/studentinfoActions";

class ViewSchedule extends Component {
  componentDidMount() {
    this.props.getStudentInfoByName(this.props.username);
  }

  render() {
    console.log("Props: ", this.props);
    console.log(
      "Length: ",
      this.props.studentinfobyname.studentinfo.coursesselected
    );
    if (this.props.studentinfobyname.studentinfo.coursesselected) {
      return (
        <React.Fragment>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Course #</th>
                <th scope="col">Class</th>
                <th scope="col">Schedule</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            {this.props.studentinfobyname.studentinfo.coursesselected.map(
              course => (
                <tbody key={course.coursenumber}>
                  <tr>
                    <td>
                      <h3>{course.coursenumber}</h3>
                    </td>
                    <td>
                      <h3>{course.name}</h3>
                    </td>
                    <td>
                      <h3>{course.schedule}</h3>
                    </td>
                    <td>
                      <h3>{course.location}</h3>
                    </td>
                  </tr>
                </tbody>
              )
            )}
          </table>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h3>Loading..</h3>
        </React.Fragment>
      );
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
)(ViewSchedule);

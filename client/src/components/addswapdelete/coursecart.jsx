import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Courses from "./courses";
import Cart from "../payment/Cart";
import ViewCourse from "./viewcourse";
import { getCourses } from "../../actions/courseActions";
import { connect } from "react-redux";
import ReviewPage from "../reviewcourse/ReviewPage";
import AddCourses from "./addcourses";

class CourseCart extends Component {



  renderTable() {
    if (this.props.coursesAdded )
      return <p className="text-center">No courses in the cart yet.</p>;


    return (
      <React.Fragment>
        <table className="table table-dark">
          {this.props.coursesAdded.map(course => (
            <tbody key={course.id}>
              <tr>
                <td>{course.name}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => this.props.onDelete(course)}
                    className="btn btn-danger btn-sm float-right"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <button onClick={ <Redirect to=  '/Payment' />} className="btn btn-success w-100">Pay Now</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid ">
          <h3 className="text-center">Cart</h3>
          {this.renderTable()}
        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};



export default CourseCart;

import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCourseFromCart } from "../../actions/studentinfoActions";
import { getStudentInfoByName } from "../../actions/studentinfoActions";
import { getCourses } from "../../actions/courseActions";
import { Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
//import AddCourses from "../add-swap-delete-course/addcourses"
import CourseCart from "../add-swap-delete-course/coursecart";
//import './TheForm.css';
import TextFieldGroup from "../common/TextFieldGroup";

{
  /*   ///  this was inside the return
  <form onSubmit = {this.props.printFunction}>
  <h1> Cart  <span className="price" style={{color: 'black'}}>
  <i className="fa fa-shopping-cart" /> <b></b></span> </h1>
  <hr/>
  <p> Financial Aid Deduction
  <span className="price" style={{color: 'black'}}><b> </b></span>
  </p>
  <p> Total Cost
  <span className="price" style={{color: 'black'}}><b> </b></span>
  </p>
  <p>
   <br/> <Button onClick = {this.props.printFunction} bsStyle="info"> Print </Button>  </p> <br/>
  </form>
*/
}

class Cart extends React.Component {
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

  state = {
    Department: "None",
    coursesincart: [
      {
        name: "Computing & Technology Bootcamp",
        coursenumber: "INFO221",
        instructor: "Charles Escue",
        description: "A high-level introduction ...",
        location: "Luddy Hall 2011",
        schedule: "Online Course",
        year: "2018",
        semester: "Spring",
        department: "INFO"
      },
      {
        name: "Machine Learning",
        coursenumber: "CSCI525",
        instructor: "Donald Williamson",
        description: "Theory and practice of constructing ...",
        location: "Luddy Hall 0311",
        schedule: "Monday, Wednesday 7:15 PM",
        year: "2018",
        semester: "Spring",
        department: "CS"
      }
    ]
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

  //componentDidMount() {
  //this.props.getStudentInfoByName(this.props.username);  }

  render() {
    // const numofcoursesincart = this.state.coursesincart.length;
    if (this.props.coursesincart) {
      const numofcoursesincart = this.props.coursesincart.length;
      //const numofcoursesincart = this.state.coursesincart.length;

      //const numofcoursesincart = this.state.coursesincart.length;
      const costperCourse = 1000;
      const totalcostCourses = 0;

      console.log("Inside the cart: ", this.props);

      return (
        <React.Fragment>
          {/* <div className="container-fluid"> */}
          {/* <div className="row"> */}
          {/* <div className="col-md-6 m-auto"> */}
          <div className="shadow-lg p-4 mb-10 bg-grey rounded">
            <h1 className="display-4 text-center">Cart</h1>
            <hr />
            {this.props.coursesincart.map(course => (
              <h3>{course.name}</h3>
            ))}
            <p className="lead text-left" style={{ color: "black" }}>
              Price of Courses: <br /> <i className="fa fa-shopping-cart" />
              {" $1000"}
            </p>
            <p className="lead text-left" style={{ color: "black" }}>
              {" "}
              Total Number of Courses in Cart: {numofcoursesincart}{" "}
            </p>
            <p className="lead text-left" style={{ color: "black" }}>
              {" "}
              Total Cost of Courses: {1000 * numofcoursesincart}
            </p>

            <hr />
            <h4>Financial Aid:</h4>
            <form onSubmit={this.props.funcfinaid}>
              <TextFieldGroup
                id="financialAidAmount"
                name="financialAidAmount"
                placeholder="Enter Financial Aid Amount Here"
                type="text"
              />

              <div className="lead text-left" style={{ color: "black" }}>
                Financial Aid Deduction:{" "}
                {this.props.enteredfinancialaid && (
                  <p> {this.props.enteredfinancialaid} </p>
                )}{" "}
              </div>
              {this.props.error && <p> {this.props.error} </p>}

              <div className="lead text-left" style={{ color: "black" }}>
                {" "}
                Total Cost after Financial Aid:{" "}
                {this.props.newpricetotal && (
                  <p> {this.props.newpricetotal} </p>
                )}{" "}
              </div>

              {console.log("length of coursesincart:" + { numofcoursesincart })}

              <input
                type="submit"
                value="Calculate Financial Aid"
                className="btn btn-info btn-block mt-4"
              />
            </form>
          </div>
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </React.Fragment>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

const mapStateToProps = state => {
  return {
    studentinfo: state.studentinfo,
    studentinfobyname: state.studentsinfo
  };
};
export default connect(
  mapStateToProps,
  { getStudentInfoByName, getCourses }
)(Cart);

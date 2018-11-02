import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import AddCourses from "../addswapdelete/addcourses"
import Courses from "../addswapdelete/courses";
import Course from "../addswapdelete/course";
import CourseCart from "../addswapdelete/coursecart";

import './TheForm.css';
{/*
  renderTable() {
  //  if (this.props.coursesAdded.length === 0)
    //  return <p className="text-center">No courses in the cart yet.</p>;

    return (
      <React.Fragment>
        <table className="table table-dark">
          {this.props.coursesAdded.map(course => (
            <tbody key={course.id}>
              <tr>
                <td>{course.name}</td>
                <td>
                  {" "}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <button onClick={ <Redirect to=  '/Payment' />} className="btn btn-success w-100">Pay Now</button>
      </React.Fragment>
    );
  }

  */ }

class Cart extends React.Component{




render(){

  return(


  <form onSubmit = {this.props.printFunction}>


{/*
     <CourseCart/>

     <div className= "containerRight float-right m-1">
      {this.renderTable()}
    </div>
*/ }

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



  );
}

}

export default Cart;

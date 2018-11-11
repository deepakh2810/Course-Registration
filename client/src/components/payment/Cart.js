import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCourseFromCart } from "../../actions/studentinfoActions";
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
//import AddCourses from "../add-swap-delete-course/addcourses"
//import CourseCart from "../add-swap-delete-course/coursecart";
import './TheForm.css';




class Cart extends React.Component{

render(){
  return(
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



  );
}

}

export default Cart;

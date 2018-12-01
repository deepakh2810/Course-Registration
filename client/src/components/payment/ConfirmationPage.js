import React, { Component } from "react";
import { connect } from "react-redux";
import PdfPage from "./PdfPage.jsx";
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
import CourseCart from "../add-swap-delete-course/coursecart";

import PropTypes from "prop-types";
import Cart from  "./Cart";
import { receiptInfo } from  "./Cart";
import Payment from "./Payment";

class ConfirmationPage extends React.Component{



    printFunction = (e) => {
      e.preventDefault();
      window.print();
    }


render(){

  const theInfo = this.props.receiptInfo;
//  const stateInfo = this.state.receiptInfo;

//  const propsData = this.props.location.state.detail.receiptInfo;


  console.log("theInfo: ", theInfo);
//  console.log("stateInfo: ", stateInfo);
//  console.log("propsData: ", propsData);

//  console.log("receiptInfo: ", receiptInfo);




  return(

<form onSubmit={this.props.printFunction}>

<div>


    <div className="container"   >
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="shadow-lg p-4 mb-10 bg-grey rounded">
            <h1 className="display-4 text-center">Confirmation of Checkout</h1>
            <p className="lead text-center" style={{color: 'black'}}  >Here is your Reciept </p>

            <PdfPage/>


            <div class="form-group">
               <button  name="submit" type="submit" class="btn btn-primary">Print PDF of Reciept</button>
             </div>




          </div>
        </div>
      </div>
    </div>
</div>


</form>


      );
    }

  };

  const mapStateToProps = state => {
    return {
      receiptInfo: state.receiptInfo
    };
  };
  ConfirmationPage.propTypes = {
    receiptInfo: PropTypes.object.isRequired
  };

    export default ConfirmationPage;

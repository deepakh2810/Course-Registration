import React from "react";
import Cart from "./Cart"
//import FinancialAid from "./FinancialAid"
import './TheForm.css';
import NewForm from "./NewForm"

import { connect } from "react-redux";
import { getStudentInfoByName } from "../../actions/studentinfoActions";
import { removeCourseFromCart } from "../../actions/studentinfoActions";
import CourseCart from "../add-swap-delete-course/coursecart";
import AddCourses from "../add-swap-delete-course/addcourses"
import { getCourses } from "../../actions/courseActions";
import ViewCourse from "../add-swap-delete-course/viewcourse";
import Selection from "../add-swap-delete-course/selection";
import { postPayment } from "../../actions/paymentActions";

//const TheSchemaPayment = require("../../../models/Payment");

{/*
  handlePayment = (a) =>{
    a.preventDefault();
    this.props.postPayment(this.props.studentid, this.props.paymentinfo);
  }  // this was in the componenet
*/}


class Payment extends React.Component{


  state = {
    finaidchanged: undefined,
    formSubmitted: undefined,
    error: undefined
  }

    state = {
      enteredfinancialaid: undefined,
      error: undefined,
      newpricetotal: undefined,

      Department: "None",
    coursesincart: [
      {
        name:  "Computing & Technology Bootcamp",
        coursenumber: "INFO221" ,
        instructor: "Charles Escue" ,
        description: "A high-level introduction ...",
        location:  "Luddy Hall 2011" ,
        schedule: "Online Course" ,
        year: "2018" ,
        semester:  "Spring" ,
        department:  "INFO"
      },
      {
        name:  "Machine Learning",
        coursenumber: "CSCI525" ,
        instructor: "Donald Williamson" ,
        description: "Theory and practice of constructing ...",
        location:  "Luddy Hall 0311" ,
        schedule: "Monday, Wednesday 7:15 PM" ,
        year: "2018" ,
        semester:  "Spring" ,
        department:  "CS"
      }
    ],

    coursesselected: [
      {
        name:  "Computing & Technology Bootcamp",
        coursenumber: "INFO221" ,
        instructor: "Charles Escue" ,
        description: "A high-level introduction ...",
        location:  "Luddy Hall 2011" ,
        schedule: "Online Course" ,
        year: "2018" ,
        semester:  "Spring" ,
        department:  "INFO"
      }
    ]

      };


  submitFunction = (e) => {
    e.preventDefault();
    const namecard = e.target.elements.nameoncard.value;
    const cardnum = e.target.elements.creditcardnumber.value;
    const expirmonthyear = e.target.elements.expirationmonthyear.value;
    //const expiryear = e.target.elements.expirationyear.value;
    const cvv = e.target.elements.cardcvv.value;
    const email = e.target.elements.emailaddress.value;
    const buttonSubmitted = 'Submitted!';
    if( email && namecard && expirmonthyear && cvv && cardnum ){
      const info = {email, namecard, expirmonthyear, cvv, cardnum };
      const data = JSON.stringify(info);
      // console.log("const info after JSON.stringify: " + info);
    // console.log(buttonSubmitted);


    const completedForm = {
      name: namecard,
      email: email,
      creditcardnumber: cardnum,
      expirationmonthyear: expirmonthyear,
      //expirationyear: expiryear,
      ccv: cvv
    }
    console.log(" This is completedForm before JSON.stringify "+ completedForm);

    const formStringJson = JSON.stringify( completedForm);
    console.log(" This is completedForm AFTER JSON.stringify "+ completedForm);

    console.log(" email: "+ email);


    this.props.postPayment("", completedForm);


    this.setState( {
      formSubmitted: 'Submitted!',
      error: " "
     } );
   }
   else{
     this.setState( {
     error: "Form is missing information",
     formSubmitted: undefined
   } );
   }
 }



 funcfinaid = (e) => {
   e.preventDefault();
   const finaidamount = e.target.elements.financialAidAmount.value;
   const newtotal = (1000 * this.state.coursesincart.length) - finaidamount;
   console.log(" finaidamount: "+ finaidamount);
   console.log(" newtotal: "+ newtotal);
   if( finaidamount ){
     this.setState( {
       enteredfinancialaid: finaidamount,
       newpricetotal: newtotal,
       error: " "
      } );
    }
    else{
      this.setState( {
      error: "No Financial Aid Entered",
      enteredfinancialaid: undefined,
      newpricetotal: undefined
    } );
    }
 }



  printFunction = (e) => {
    e.preventDefault();
    window.print();
  }
  applyChangesFunction = (e) => {
    e.preventDefault();
    const checkchange = e.target.elements.checkedChanges.value;
    const applyChanges = 'Changes Applied!';
    if(checkchange){
    console.log(applyChanges);
    this.setState( {
      finaidchanged:   'Changes Applied!',
      error: " "
     } );
   }
   else  {
     this.setState( {
        finaidchanged: undefined,
          error: "No Changes made"
     } );
  }
}

  render() {
    return (
<div className="App"> <br/>

<div id="first">
  <NewForm   formSubmitted = {this.state.formSubmitted}
  submitFunction={this.submitFunction}
  error = {this.state.error}   />
</div>

    {/*
        <div className="row">

          //    <div className="thecontainer"> <br/>
                 <br/>
                   <div id="first">
                      <NewForm   formSubmitted = {this.state.formSubmitted}
                      submitFunction={this.submitFunction}
                      error = {this.state.error}   />
                   </div>
            //   </div> <br/>
    */}

          <div id="second">


          {/*     <div className="containerRight">
                 <FinancialAid applyChangesFunction = {this.applyChangesFunction}
                   finaidchanged = {this.state.finaidchanged}
                     error = {this.state.error} />
               </div>
                <br/> */}


           <div className="containerRight">
           <Cart
            funcfinaid = {this.funcfinaid}
            enteredfinancialaid = {this.state.enteredfinancialaid}
            newpricetotal = {this.state.newpricetotal}
            error = {this.state.error}
            printFunction = {this.printFunction} />  </div>

{/*
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
               */ }


               <div className="col-md-9">
               {
                // console.log( "coursesincart:" + this.props.studentinfobyname.studentinfo.coursesincart ),
                 //console.log( "coursesselected:" + this.props.studentinfobyname.studentinfo.coursesselected )
               }


            {/*   <CourseCart
                 studentid={this.props.studentid}
                 coursesincart={this.props.coursesincart}   /> */}



                 { this.props.courses.courses.map(course => (
                   <div>
                   <ViewCourse
                     key={course._id}
                     studentid={ "12345678"  }
                     course={course}
                    // status="selectedcourses" //courses that are already added to the profile
                    //status="addtocart" //add these courses to cart

                     stateInfo={this.state.selectButtonInfo}

                     coursesselected={
                       this.state.coursesselected
                     }
                     coursesincart={
                       this.state.coursesincart
                     }
                   />
                   </div>
                 ))}




              {/* </div>  */}



    </div>
  </div>


</div>
    );
  }
}
const mapStateToProps = state => {
  return {
    studentinfo: state.studentinfo,
    studentinfobyname: state.studentsinfo,
    courses: state.courses,
    paymentinfo: state.paymentinfo
  };
};
export default connect(
  mapStateToProps,
  { getStudentInfoByName, getCourses, postPayment, removeCourseFromCart}
)(Payment);

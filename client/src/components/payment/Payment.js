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
//  componentDidMount() {
  //  this.props.getStudentInfoByName(this.props.username);  }
state = {

  selectButtonInfo: {
    add: 0,
    swap: {
      ind: 0,
      courseId: "h",
      courseName: ""
    }
  }
};

  submitFunction = (e) => {
    e.preventDefault();
    const namecard = e.target.elements.nameoncard.value;
    const cardnum = e.target.elements.creditcardnumber.value;
    const expirmonth = e.target.elements.expirationmonth.value;
    const expiryear = e.target.elements.expirationyear.value;
    const cvv = e.target.elements.cardcvv.value;
    const email = e.target.elements.emailaddress.value;
    const buttonSubmitted = 'Submitted!';
    if( email && namecard && expirmonth && expiryear && cvv && cardnum ){
      const info = {email, namecard, expirmonth, expiryear, cvv, cardnum };
      const data = JSON.stringify(info);
      // console.log("const info after JSON.stringify: " + info);
    // console.log(buttonSubmitted);


    const completedForm = {
      name: namecard,
      email: email,
      creditcardnumber: cardnum,
      expirationmonth: expirmonth,
      expirationyear: expiryear,
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


<NewForm   formSubmitted = {this.state.formSubmitted}
submitFunction={this.submitFunction}
error = {this.state.error}   />


{/* /// this was included before using adityas form
  <div className="row">
              <div className="thecontainer"> <br/>
                 <br/>

                   <div id="first">
                      <NewForm   formSubmitted = {this.state.formSubmitted}
                      submitFunction={this.submitFunction}
                      error = {this.state.error}   />
                   </div>

               </div> <br/>

          <div id="second">
*/}

          {/*     <div className="containerRight">
                 <FinancialAid applyChangesFunction = {this.applyChangesFunction}
                   finaidchanged = {this.state.finaidchanged}
                     error = {this.state.error} />
               </div>
                <br/> */}


              { /*  /// this was included before using adityas form  <div className="containerRight">  <Cart  printFunction = {this.printFunction} />  </div>  */}

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

               {/*
               <div className="col-md-9">
                 {this.props.courses.courses.map(course => (
                   <div>
                   <ViewCourse
                     key={course._id}
                     studentid={ "12345678"  }
                     course={course}
                     status="selectedcourses" //courses that are already added to the profile
                   />
                   </div>
                 ))}
               </div>
               */}

{/*
    </div>
  </div>
*/}

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
  { getStudentInfoByName, getCourses, postPayment }
)(Payment);

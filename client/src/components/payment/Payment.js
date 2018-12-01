import React from "react";
import Cart from "./Cart";
import "./TheForm.css";
import NewForm from "./NewForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getStudentInfoByName,
  postCourses
} from "../../actions/studentinfoActions";
import { removeCourseFromCart } from "../../actions/studentinfoActions";
import { getCourses } from "../../actions/courseActions";
import { postPayment } from "../../actions/paymentActions";
import Sidebar from "../layout/Sidebar";
import ConfirmationPage from "./ConfirmationPage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";




class Payment extends React.Component {




  state = {
    finaidchanged: undefined,
    formSubmitted: undefined,
    error: undefined,
    receiptInfo: undefined

  };

  state = {
    enteredfinancialaid: undefined,
    error: undefined,
    newpricetotal: undefined
  };

  componentDidMount() {
    this.props.getStudentInfoByName(this.props.auth.user.name);


  }



  submitFunction = e => {
    // e.preventDefault();
    const namecard = e.target.elements.nameoncard.value;
    const cardnum = e.target.elements.creditcardnumber.value;
    const expirmonthyear = e.target.elements.expirationmonthyear.value;
    //const expiryear = e.target.elements.expirationyear.value;
    const cvv = e.target.elements.cardcvv.value;
    const email = e.target.elements.emailaddress.value;
    const buttonSubmitted = "Submitted!";
    if (email && namecard && expirmonthyear && cvv && cardnum) {
      const info = { email, namecard, expirmonthyear, cvv, cardnum };
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
      };
      console.log(
        " This is completedForm before JSON.stringify " + completedForm
      );

      const formStringJson = JSON.stringify(completedForm);
      console.log(
        " This is completedForm AFTER JSON.stringify " + completedForm
      );

      console.log(" email: " + email);

      this.props.postPayment("", completedForm);

      this.setState({
        formSubmitted: "Submitted!",
        error: " "
      });


      ////////////// VVV //SAVES THE COURSES IN CART
            if (this.props.studentinfobyname.studentinfo.coursesincart) {
              const numofcoursesincart = this.props.studentinfobyname.studentinfo.coursesincart.length;
              console.log("Cart size: ", numofcoursesincart);
              const costperCourse = 1000;
              const totalcostCourses = 0;
              console.log("Inside the cart: ", this.props);

              const receiptInfo = [ ];
             const a2 = [ { grade: "i am item1"} ];
             //receiptInfo.push.apply( receiptInfo , a2 );
             const a3 = [  "i am item3"];

             this.props.studentinfobyname.studentinfo.coursesincart.map(course => (
                receiptInfo.push.apply( receiptInfo, [course.name] )
             ))

               console.log("receiptInfo: ", receiptInfo);
               console.log("a3: ", a3);



      ///////////////  ^^^//SAVES THE COURSES IN CART

      this.setState({
        receiptInfo: this.props.studentinfobyname.studentinfo.coursesincart
      });
      console.log(" this.state.receiptInfo: ", this.state.receiptInfo);
    }
    ///////////////  closing brace




      this.props.postCourses(
        this.props.auth.user.name,
        this.props.studentinfobyname.studentinfo.coursesincart
      );


{/*
      this.props.history.push({
        pathname: "/confirmationpage",
        state: {detail: this.state.receiptInfo}

      });
*/}

      //this.props.history.push("/confirmationpage");

      //     return( <div> <ConfirmationPage receiptInfo={this.props.receiptInfo} />  </div>);

      return( <div> <Redirect to={"/confirmationpage" + this.state.receiptInfo}  />  </div>);

    }

    else {
      this.setState({
        error: "Form is missing information",
        formSubmitted: undefined
      });
    }
  };





  funcfinaid = e => {
    e.preventDefault();

    const finaidamount = e.target.elements.financialAidAmount.value;
    const newtotal =
      1000 * this.props.studentinfobyname.studentinfo.coursesincart.length -
      finaidamount;
    console.log(" finaidamount: " + finaidamount);
    console.log(" newtotal: " + newtotal);

    if (finaidamount) {
      this.setState({
        enteredfinancialaid: finaidamount,
        newpricetotal: newtotal,
        error: " "
      });
    } else {
      this.setState({
        error: "No Financial Aid Entered",
        enteredfinancialaid: undefined,
        newpricetotal: undefined
      });
    }
  };

  printFunction = e => {
    e.preventDefault();
    window.print();
  };


  render() {


    ////////////// VVV //SAVES THE COURSES IN CART
          if (this.props.studentinfobyname.studentinfo.coursesincart) {
            const numofcoursesincart = this.props.studentinfobyname.studentinfo.coursesincart.length;
            console.log("Cart size: ", numofcoursesincart);
            const costperCourse = 1000;
            const totalcostCourses = 0;
            console.log("Inside the cart: ", this.props);

            const receiptInfo = [ ];
           const a2 = [ { grade: "i am item1"} ];
           //receiptInfo.push.apply( receiptInfo , a2 );
           const a3 = [  "i am item3"];

           this.props.studentinfobyname.studentinfo.coursesincart.map(course => (
              receiptInfo.push.apply( receiptInfo, [course.name] )
           ))

             console.log("receiptInfo: ", receiptInfo);
             console.log("a3: ", a3);



    ///////////////  ^^^//SAVES THE COURSES IN CART

      const tryReceiptInfoProps = this.props.studentinfobyname.studentinfo.coursesincart;

    console.log(" tryReceiptInfoProps: ", tryReceiptInfoProps );
  }
  ///////////////  closing brace



    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-10">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <NewForm
                      formSubmitted={this.state.formSubmitted}
                      submitFunction={this.submitFunction}
                      error={this.state.error}
                    />
                  </div>

                  <div className="col-md-6">
                    <Cart
                      funcfinaid={this.funcfinaid}
                      enteredfinancialaid={this.state.enteredfinancialaid}
                      newpricetotal={this.state.newpricetotal}
                      error={this.state.error}
                      printFunction={this.printFunction}
                      coursesincart={
                        this.props.studentinfobyname.studentinfo.coursesincart
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
    studentinfo: state.studentinfo,
    studentinfobyname: state.studentsinfo,
    paymentinfo: state.paymentinfo,
    receiptInfo: state.receiptInfo
  };
};

Payment.propTypes = {
  auth: PropTypes.object.isRequired
  // profile: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,

  {
    getStudentInfoByName,
    postPayment,
    postCourses
  }
)(Payment);

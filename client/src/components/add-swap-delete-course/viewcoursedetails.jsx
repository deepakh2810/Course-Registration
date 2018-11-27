import React, { Component } from "react";
import { getCoursesByCourseNumber } from "../../actions/courseActions";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import ReviewCourses from "../reviewcourse/ReviewCourses";

class ViewCourseDetails extends Component {




  state = {
    reviewSubmitted: undefined,
    namereview: undefined,
    error: undefined
  }

reviewFunction = (e) => {
  e.preventDefault();
  const myreview = e.target.elements.textarea.value;
  const nameofReviewer = e.target.elements.nameReviewer.value;
if( myreview ){
  console.log("my review: " + myreview);

  this.setState( {
    reviewSubmitted: myreview,
    namereview: nameofReviewer,
    error: " "
   } );



 }
 else{
   console.log("Form is missing information");

   this.setState( {
   error: "Form is missing information",
   reviewSubmitted: undefined,
   nameofReviewer: undefined
 } );
 }

}

  componentDidMount() {
    let coursenumber = this.props.match.params.coursenumber;
    this.props.getCoursesByCourseNumber(coursenumber);}

  renderCourses() {
    if (this.props.courses.courses._id == null) {
      return <div>Loading..</div>;
    } else {
      return (
        <React.Fragment>
          <h1>{this.props.courses.courses.name}</h1>
          <br />
          <h2>
            Instructor: <strong>{this.props.courses.courses.instructor}</strong>
          </h2>
          <p>{this.props.courses.courses.description}</p>
          <div className="row">
            <div className="col-md-6">
              <h3>Location: {this.props.courses.courses.location}</h3>
              <h4>Schedule: {this.props.courses.courses.schedule}</h4>




            {/*   <TextFieldGroup
                id="emailaddress" name="emailaddress" placeholder="Email Address" type="text" aria-describedby="emailaddressHelpBlock" required="required"
              /> */}



            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">{this.renderCourses()}



                <ReviewCourses  reviewFunction = {this.reviewFunction}
                                reviewSubmitted = {this.state.reviewSubmitted}
                                namereview = {this.state.namereview}
                                error = {this.state.error}   />


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

export default connect(
  mapStateToProps,
  { getCoursesByCourseNumber }
)(ViewCourseDetails);

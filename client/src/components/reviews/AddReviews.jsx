import React, { Component } from "react";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Stars from "./stars";

import {
  getHoldsByUniId,
  postHoldsByUniId,
  deleteByHoldsId
} from "../../actions/addholdsactions";

import {
  getReviewsByCourseNumber,
  postReviewsByCourseNumber,
  deleteReviewsByCourseNumber
} from "../../actions/reviewsActions";
import { getCoursesByCourseNumber } from "../../actions/courseActions";



class AddReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
  //    name: "",
  //    coursenumber: this.props.courses.courses.coursenumber

        };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {

    const coursenumber = this.props.courses.courses.coursenumber;
      this.props.getReviewsByCourseNumber(coursenumber);
      //this.props.getCoursesByCourseNumber(coursenumber);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("On submit");
    console.log("The state: ", this.state);
    console.log("Checking for the user:", this.props.auth.user.name);


    const reviewsData = {
    //  University_ID: "1996",
    studentname: this.props.auth.user.name,
    coursenumber: this.props.courses.courses.coursenumber,
    description: this.state.description
  //  name: this.state.name,
    };



    console.log("reviewsData: ", reviewsData);

    //this.props.reviews.reviews.push( reviewsData );
    console.log("this.props: ", this.props);
  //  console.log("this.props.history: ", this.props.history);

    this.props.postReviewsByCourseNumber(reviewsData, this.props.history);
    //console.log("after: this.props.history: ", this.props.history);

  }

  onChange(e) {
    console.log("onchange");
    console.log("target: ", e.target.name);
    console.log("value: ", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  renderReviewsTextBox() {
    return (
      <React.Fragment>
      <br/><br/><br/><br/>
        <h2>Write a Review</h2>
        <form onSubmit={this.onSubmit}>

{/*
            <label for="nameReviewer" class="control-label" >Enter Your Name  (Optional)</label>
            <input id="nameReviewer" name="nameReviewer" type="text" class="form-control"
            placeholder="Leave name entry blank to leave an anonymous review"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            info="Leave name entry blank to leave an anonymous review"
            />
      */}
      <br/>

          <TextAreaFieldGroup
            placeholder="* Description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            // error={errors.description}
            info="Add a new Review"
          />
          <br/><br/>

          <input
            type="submit"
             value="Submit Review"
            className="btn btn-info"
          />


          <br/><br/><br/><br/>

        </form>
      </React.Fragment>
    );
  }

  render() {
    console.log("In Reviews", this.props);
    return (
      <React.Fragment>
      {this.renderReviewsTextBox()}
      </React.Fragment>
    );
  }
}

AddReviews.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    name: state.name,
    courses: state.courses,
    auth: state.auth

  };
};

export default connect(
  mapStateToProps,
  { getHoldsByUniId, postHoldsByUniId, deleteByHoldsId,    getReviewsByCourseNumber, postReviewsByCourseNumber, deleteReviewsByCourseNumber, getCoursesByCourseNumber }
)(AddReviews);

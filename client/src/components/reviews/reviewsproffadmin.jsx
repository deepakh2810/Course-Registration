import React, { Component } from "react";
//import { getHoldsByUniId } from "../../actions/addholdsactions";
import { getReviewsByCourseNumber } from "../../actions/reviewsActions";

import { connect } from "react-redux";
import PropTypes from "prop-types";


class ReviewsProffAdmin extends Component {


  componentDidMount() {
    //const university_id = this.props.auth.user.university_id;
    //const name = this.props.auth.user.name;

    const coursenumber = this.props.courses.courses.coursenumber;
    console.log("checking the coursenumber: ", coursenumber);
    this.props.getReviewsByCourseNumber(coursenumber);

  }
  renderExistingContent() {
    // return <h2>In here</h2>;
    console.log("render existinng this.props: ", this.props);

    if (this.props.reviews) {
      console.log("this.props.reviews: ", this.props.reviews);
      console.log("this.props.reviews.reviews: ", this.props.reviews.reviews);

      console.log("In the render component: ");
      return (
        <React.Fragment>
          <h2>Reviews from students who have taken this course:</h2> <br/>
          {this.props.reviews.reviews.map(reviews => (
            <div className="card w-90 m-2">
              <div className="card-body">
                <div className="card-title">
                  <div className="row">
                    <div className="col col-md-12">
                    <h4>{reviews.studentname}</h4>
                      <p >{reviews.Reviews_Comment}</p>

                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </React.Fragment>

      );
    }
  }

  render() {
    console.log("In Proff-student Reviews", this.props);
    return (
      <div>
         <div className="container-fluid">{this.renderExistingContent()}</div>
      </div>
    );
  }
}
ReviewsProffAdmin.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    auth: state.auth,
    name: state.name,
    courses: state.courses

  };
};

export default connect(
  mapStateToProps,
  { getReviewsByCourseNumber }
)(ReviewsProffAdmin);

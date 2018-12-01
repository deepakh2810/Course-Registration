import React, { Component } from "react";
import PropTypes from "prop-types";
import AddReviews from "./AddReviews";
import ReviewsProffAdmin from "./reviewsproffadmin";
import { connect } from "react-redux";


class Reviews extends Component {

  // populateContent() {
  //   if (this.props.auth.user.user_type === "STUDENT") {
  //     return (
  //       <React.Fragment>
  //         <AddReviews />
  //       </React.Fragment>
  //     );
  //   }
  // }

  render() {


console.log("inside review: ", this.props);
if (this.props.auth.user.user_type === "STUDENT") {
  return (
    <React.Fragment>

    <AddReviews />
    <ReviewsProffAdmin/>

    </React.Fragment>
  );
} else{
  return(<React.Fragment>
    <ReviewsProffAdmin/>
    </React.Fragment>)
}
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

Reviews.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Reviews);

import React, { Component } from "react";
//import { getHoldsByUniId } from "../../actions/addholdsactions";
import { getReviewsByCourseNumber } from "../../actions/reviewsActions";

import { connect } from "react-redux";
import PropTypes from "prop-types";


{/*  /////THIS CODE SNIPPET GOES IN THE RETURN OF   renderExistingContent() , RIGHT ABOVE <p>{reviews.rating}</p>
                    { if(reviews.rating =="1"){  }  }

                                                                  <div className="wrapper">
                                                                    <input type="checkbox" id="st1" defaultValue={1}  name="rating" checked="tr"  />
                                                                    <label htmlFor="st1" />
                                                                  </div>
*/}

class ReviewsProffAdmin extends Component {


renderStars(){


    if (this.props.reviews) {
      console.log("this.props.reviews: ", this.props.reviews);
      console.log("this.props.reviews.reviews: ", this.props.reviews.reviews);

      //  if(this.props.reviews.reviews.rating  == 10) {
          if( 1 ==2 ){
      return (
                                      <React.Fragment>
                                            <form >
                                            <div>
                                              <meta charSet="utf-8" />
                                              <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                                              <meta name="viewport" content="width=device-width, initial-scale=1" />
                                              <link href="http://www.cssscript.com/wp-includes/css/sticky.css" rel="stylesheet" type="text/css" />
                                              <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                                              <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

                                              <style dangerouslySetInnerHTML={{__html: "\nbody { background-color:#fafafa;}\n.content {\n  text-align: center;\n  margin-top:150px;\n}\n.content h1 {\n  font-family: 'Sansita', sans-serif;\n  letter-spacing: 1px;\n  font-size: 50px;\n  color: #282828;\n  margin-bottom: 10px;\n}\n.content  i {\n  color: #FFC107;\n}\n.content span {\n  position: relative;\n  display: inline-block;\n}\n.content  span:before, .content  span:after {\n  position: absolute;\n  content: \"\";\n  background-color: #282828;\n  width: 40px;\n  height: 2px;\n  top: 40%;\n}\n.content  span:before {\n  left: -45px;\n}\n.content  span:after {\n  right: -45px;\n}\n.content p {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 18px;\n  letter-spacing: 1px;\n}\n.wrapper {\n  position: relative;\n  display: inline-block;\n  border: none;\n  font-size: 14px;\n  margin: 50px auto;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.wrapper input {\n  border: 0;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  position: absolute !important;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  opacity: 0;\n}\n\n.wrapper label {\n  position: relative;\n  float: right;\n  color: #C8C8C8;\n}\n\n.wrapper label:before {\n  margin: 5px;\n  content: \"\\f005\";\n  font-family: FontAwesome;\n  display: inline-block;\n  font-size: 1.5em;\n  color: #ccc;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.wrapper input:checked ~ label:before {\n  color: #FFC107;\n}\n\n.wrapper label:hover ~ label:before {\n  color: #ffdb70;\n}\n\n.wrapper label:hover:before {\n  color: #FFC107;\n}\n" }} />


                                              <div className="wrapper">
                                                <input type="checkbox" id="st1" defaultValue={1}  name="rating"   />
                                                <label htmlFor="st1" />
                                                <input type="checkbox" id="st2" defaultValue={2}  name="rating"   />
                                                <label htmlFor="st2" />
                                                <input type="checkbox" id="st3" defaultValue={3}  name="rating"  />
                                                <label htmlFor="st3" />
                                                <input type="checkbox" id="st4" defaultValue={4}  name="rating" />
                                                <label htmlFor="st4" />
                                                <input type="checkbox" id="st5" defaultValue={5}  name="rating"  />
                                                <label htmlFor="st5" />
                                              </div>


                                            </div>
                                            </form>
                                      </React.Fragment>
                                    );
                                    }



                                  }
                              }




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

        <form >
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="http://www.cssscript.com/wp-includes/css/sticky.css" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

          <style dangerouslySetInnerHTML={{__html: "\nbody { background-color:#fafafa;}\n.content {\n  text-align: center;\n  margin-top:150px;\n}\n.content h1 {\n  font-family: 'Sansita', sans-serif;\n  letter-spacing: 1px;\n  font-size: 50px;\n  color: #282828;\n  margin-bottom: 10px;\n}\n.content  i {\n  color: #FFC107;\n}\n.content span {\n  position: relative;\n  display: inline-block;\n}\n.content  span:before, .content  span:after {\n  position: absolute;\n  content: \"\";\n  background-color: #282828;\n  width: 40px;\n  height: 2px;\n  top: 40%;\n}\n.content  span:before {\n  left: -45px;\n}\n.content  span:after {\n  right: -45px;\n}\n.content p {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 18px;\n  letter-spacing: 1px;\n}\n.wrapper {\n  position: relative;\n  display: inline-block;\n  border: none;\n  font-size: 14px;\n  margin: 50px auto;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.wrapper input {\n  border: 0;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  position: absolute !important;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  opacity: 0;\n}\n\n.wrapper label {\n  position: relative;\n  float: right;\n  color: #C8C8C8;\n}\n\n.wrapper label:before {\n  margin: 5px;\n  content: \"\\f005\";\n  font-family: FontAwesome;\n  display: inline-block;\n  font-size: 1.5em;\n  color: #ccc;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.wrapper input:checked ~ label:before {\n  color: #FFC107;\n}\n\n.wrapper label:hover ~ label:before {\n  color: #ffdb70;\n}\n\n.wrapper label:hover:before {\n  color: #FFC107;\n}\n" }} />


          <h2>Reviews from students who have taken this course:</h2> <br/>
          {this.props.reviews.reviews.map(reviews => (
            <div className="card w-90 m-2">
              <div className="card-body">
                <div className="card-title">
                  <div className="row">
                    <div className="col col-md-12">
                    <h4>{reviews.studentname}</h4>



                    <div className="wrapper">
                      <input type="checkbox" id="st1" defaultValue={1}  name="rating" checked="true"  />
                      <label htmlFor="st1" />
                      <input type="checkbox" id="st2" defaultValue={2}  name="rating"   />
                      <label htmlFor="st2" />
                      <input type="checkbox" id="st3" defaultValue={3}  name="rating"  />
                      <label htmlFor="st3" />
                      <input type="checkbox" id="st4" defaultValue={4}  name="rating" />
                      <label htmlFor="st4" />
                      <input type="checkbox" id="st5" defaultValue={5}  name="rating"  />
                      <label htmlFor="st5" />
                    </div>




                      <p> {"Amount of Stars given by this Student: "} { reviews.rating }  </p>
                      <p>{reviews.Reviews_Comment}</p>

                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
          </div>
          </form >

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

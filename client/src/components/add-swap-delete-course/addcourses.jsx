import React, { Component } from "react";
import { connect } from "react-redux";
import CourseCart from "./coursecart";
import { getCourses } from "../../actions/courseActions";
import ViewCourse from "./viewcourse";
// import { log } from "util";

class AddCourses extends Component {
  componentDidMount() {
    this.props.getCourses();
  }

  renderAddCourses() {
    if (this.props.courses.courses.length > 0) {
      return (
        <React.Fragment>
          <main className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                {this.props.courses.courses.map(course => (
                  <ViewCourse
                    key={course.coursenumber}
                    course={course}
                    onAdd={this.handleAddToCart}
                  />
                ))}
              </div>
              <div className="col-md-3">
                <CourseCart
                // coursesAdded={this.state.courses.filter(c => c.Added === 1)}
                // onDelete={this.handleRemoveFromCart}
                />
                <button
                  onClick={() => this.props.onBack("add")}
                  className="btn btn-primary float-right m-2"
                >
                  Back
                </button>
              </div>
            </div>
          </main>
        </React.Fragment>
      );
    } else {
      return <div>Nothing Offered yet</div>;
    }
  }

  render() {
    return <div>{this.renderAddCourses()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

export default connect(
  mapStateToProps,
  { getCourses }
)(AddCourses);

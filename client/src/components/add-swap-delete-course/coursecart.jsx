import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCourseFromCart } from "../../actions/studentinfoActions";
import Payment from "../payment/Payment";
import { Link } from "react-router-dom";
import Cart from "../payment/Cart";

class CourseCart extends Component {
  handleRemove = course => {
    this.props.removeCourseFromCart(this.props.studentid, course);
  };

  paynowhandle = () => {
    return (
      <React.Fragment>
      <Link className="nav-link" to="/payment">
        {" "}
        Checkout
      </Link>
        </React.Fragment>
      )};

  renderTable() {
    if (this.props.coursesincart.length === 0)
      return <p className="text-center">No courses in the cart yet.</p>;

    return (
      <React.Fragment>
        <table className="table table-dark">
          {this.props.coursesincart.map(course => (
            <tbody key={course._id}>
              <tr>
                <td>{course.name}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => this.handleRemove(course)}
                    className="btn btn-danger btn-sm float-right"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          ))}

        </table>
          <button className="btn btn-success w-100">Pay Now</button>
       </React.Fragment>
    );
  }

  render() {

//<Payment coursesincart = {this.props.coursesincart} />

    return (
      <React.Fragment>

        <div className="container-fluid">

          <h3 className="text-center">Cart</h3>
          {this.renderTable()}

          <Cart
          coursesselected={
            this.props.coursesselected
          }
          coursesincart={
            this.props.coursesincart
          }
           />


        </div>

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    studentinfo: state.studentinfo
  };
};

export default connect(
  mapStateToProps,
  { removeCourseFromCart }
)(CourseCart);

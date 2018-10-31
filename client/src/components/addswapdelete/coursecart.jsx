import React, { Component } from "react";

class CourseCart extends Component {
  renderTable() {
    if (this.props.coursesAdded.length === 0)
      return <p className="text-center">No courses in the cart yet.</p>;

    return (
      <React.Fragment>
        <table className="table table-dark">
          {this.props.coursesAdded.map(course => (
            <tbody key={course.id}>
              <tr>
                <td>{course.name}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => this.props.onDelete(course)}
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
    return (
      <React.Fragment>
        <div className="container-fluid ">
          <h3 className="text-center">Cart</h3>
          {this.renderTable()}
        </div>
      </React.Fragment>
    );
  }
}

export default CourseCart;

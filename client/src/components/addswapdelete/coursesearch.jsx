import React, { Component } from "react";

class CourseSearch extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>

        <div className="dropdown m-2">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            Department
            <span className="caret" />
          </button>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Computer Science</a>
            </li>
            <li>
              <a href="#">Informatics</a>
            </li>
            <li>
              <a href="#">Engineering</a>
            </li>
            <li>
              <a href="#">Information Science</a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default CourseSearch;

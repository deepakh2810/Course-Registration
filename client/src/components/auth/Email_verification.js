import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import axios from "axios";

class Email_verification extends Component {
  constructor() {
    super();
    this.state = {
      secrettoken: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userActivity = {
      secrettoken: this.state.secrettoken
    };
    axios
      .post("/api/users/verify", userActivity)
      .then(res => res.redirect("/login"))
      .catch(err => this.setState({ errors: err.response.data }));
  }
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Verify your account</h1>
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Secret Token"
                    name="secrettoken"
                    type="text"
                    value={this.state.secrettoken}
                    onChange={this.onChange}
                    error={errors.secrettoken}
                  />
                  {errors.message && (
                    <div className="text-danger">{errors.message}</div>
                  )}
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Email_verification;

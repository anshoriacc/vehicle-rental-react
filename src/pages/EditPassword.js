import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default class EditPassword extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    const body = {
      oldpassword: e.target.oldpassword.value,
      newpassword: e.target.newpassword.value,
    };

    
  };

  render() {
    return (
      <>
        <Header
        // isAuthed={isAuthed}
        // accessToken={accessToken}
        // path={this.props.match.path}
        />
        <section className="content">
          <h2 className="h2-page-title">Edit Password</h2>
          <form className="form-login-register" onSubmit={this.submitHandler}>
            <input
              type="password"
              className="form-edit-password"
              placeholder="Password"
              name="oldPassword"
              required
            />
            <input
              type="password"
              className="form-edit-password"
              placeholder="Password"
              name="newPassword"
              required
            />
          </form>
        </section>
        <Footer />
      </>
    );
  }
}

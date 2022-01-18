import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/ForgotPassword.css";

import Footer from "../components/Footer";

function ForgotPassword() {
  return (
    <>
      <section className="main-forgot">
        <Link to="/login" className="link-back">
          <button className="icon-button transparent-button">
            <i className="icon-previous"></i> Back
          </button>
        </Link>
        <h1>Don't worry, we got your back!</h1>

        <form className="form-forgotpassword" onSubmit>
          <input
            type="email"
            className="custom-form custom-size"
            placeholder="Enter your email address"
            name="email"
            id="email"
            required
          />
          <button type="submit" className="btn btn-warning custom-size fw-900">
            Send Link
          </button>
        </form>
        <p>You will receive a link to reset your password.</p>
        <p>
          If you haven't received any link, click <Link to="">here</Link> to
          resend it.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default ForgotPassword;

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../assets/css/LoginRegister.css";

import { loginAction } from "../redux/actions/auth";

import Footer from "../components/Footer";

class Login extends React.Component {
  submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    this.props.loginDispatch(body);
  };

  componentDidUpdate() {
    if (this.props.auth.isFulfilled === true) {
      localStorage.setItem(
        "vehicle-rental-token",
        JSON.stringify(this.props.auth.userData.token)
      );
      localStorage.setItem(
        "vehicle-rental-name",
        JSON.stringify(this.props.auth.userData.name)
      );
      localStorage.setItem(
        "vehicle-rental-role",
        JSON.stringify(this.props.auth.userData.role)
      );
      localStorage.setItem(
        "vehicle-rental-photo",
        JSON.stringify(this.props.auth.userData.photo)
      );
      this.props.history.push("/");
    }
    if (this.props.auth.isRejected === true) {
      // console.log("wakwawww");
    }
  }

  render() {
    return (
      <>
        <section className="main">
          <section className="left-section">
            <h1>
              <p>Let's Explore</p>
              <p>The World</p>
            </h1>
            <p className="register1">Don't have an account?</p>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button
                style={{ maxWidth: "375px" }}
                className="btn bg-dark text-warning fixed-width register1"
              >
                Register
              </button>
            </Link>
          </section>
          <section className="right-section">
            <form className="form-login-register" onSubmit={this.submitHandler}>
              <input
                type="email"
                className="custom-form fixed-width"
                placeholder="Email"
                name="email"
                id="email"
                required
              />
              <input
                type="password"
                className="custom-form fixed-width"
                placeholder="Password"
                name="password"
                id="Password"
                required
              />
              <Link to="/forgot" style={{ fontFamily: "'Mulish', sans-serif" }}>
                Forgot password?
              </Link>
              <button type="submit" className="btn btn-warning fixed-width">
                Login
              </button>
            </form>
            <button className="btn bg-light fixed-width icon-button">
              <i className="icon-google"></i>Login with Google
            </button>
            <p className="register2 text-center">
              Don't have account? <Link to="/register">Register</Link> now
            </p>
          </section>
        </section>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginDispatch: (body) => {
      dispatch(loginAction(body));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

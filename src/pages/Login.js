import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/LoginRegister.css";

import { login } from "../utils/auth";

import Footer from "../components/Footer";

function Login(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    login(body)
      .then((response) => {
        const token = response.data.result.data.token;
        localStorage.setItem("vehicle-rental-token", JSON.stringify(token));
        props.history.push("/");
      })
      .catch((err) => console.error(err));
  };
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
          <form onSubmit={submitHandler}>
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
            <Link to="" style={{ fontFamily: "'Mulish', sans-serif" }}>
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

export default Login;

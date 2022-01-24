import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/LoginRegister.css";

import { register } from "../utils/auth";

import Footer from "../components/Footer";

function Register(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    register(body)
      .then((response) => {
        // const token = response.data.result.data.token;
        // localStorage.setItem("web-starter-token", JSON.stringify(token));
        props.history.push("/login");
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

          <p className="login1">Already have an account?</p>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button
              style={{ maxWidth: "375px" }}
              className="btn bg-dark text-warning fixed-width login1"
            >
              Login
            </button>
          </Link>
        </section>
        <section className="right-section">
          <form className="form-login-register" onSubmit={submitHandler}>
            <input
              type="name"
              className="custom-form fixed-width"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
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
            <button type="submit" className="btn btn-warning fixed-width">
              Register
            </button>
          </form>
          <button className="btn bg-light fixed-width icon-button">
            <i className="icon-google"></i>Register with Google
          </button>
          <p className="login2 text-center">
            Already have an account? <Link to="/login">Login</Link> now
          </p>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Register;

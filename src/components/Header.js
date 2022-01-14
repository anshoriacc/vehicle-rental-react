import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import axios from "axios";

class Header extends React.Component {
  state = {
    accessToken: "",
  };

  logout = () => {
    localStorage.removeItem("vehicle-rental-token");
    this.setState({
      accessToken: "",
    });
    console.log("logout");
  };

  // componentDidUpdate() {
  //   console.log("update");
  // }

  // componentDidMount() {
  //   const { isAuthed } = this.state;
  //   // if (isAuthed) this.getUserData();
  //   if (isAuthed) {
  //     const accessToken = JSON.parse(
  //       localStorage.getItem("vehicle-rental-token")
  //     );
  //     const URL = `${process.env.REACT_APP_HOST}/users/detail`;
  //     axios
  //       .get(URL, { headers: { "x-access-token": accessToken } })
  //       .then((response) => {
  //         const { photo } = response.data.result.data[0];
  //         console.log(photo);
  //         if (photo)
  //           this.setState({
  //             accessToken: accessToken,
  //             isAuthed: true,
  //             profilePicture: `${process.env.REACT_APP_HOST}/${photo}`,
  //           });
  //         console.log(isAuthed);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }

  componentDidMount() {
    const accessToken = JSON.parse(
      localStorage.getItem("vehicle-rental-token")
    );

    this.setState({ token: accessToken });
  }

  render() {
    const accessToken = JSON.parse(
      localStorage.getItem("vehicle-rental-token")
    );
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-light p-0">
          <div className="container-fluid p-0 expanded">
            <Link to="/" className="icon-home hide-text">
              <i className="logo" alt="logo"></i>Home
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link ${
                      this.props.path === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/vehicle"
                    className={`nav-link ${
                      this.props.path === "/vehicle" ? "active" : ""
                    }`}
                    aria-current="page"
                  >
                    Vehicle Type
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/history"
                    className={`nav-link ${
                      this.props.path === "/history" ? "active" : ""
                    }`}
                    aria-current="page"
                  >
                    History
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link" aria-current="page">
                    About
                  </Link>
                </li>
                <hr className="line-nav" />
                {!accessToken ? (
                  <div className="button-login-register">
                    <Link to="/login">
                      <button className="btn btn-outline-warning">Login</button>
                    </Link>
                    <Link to="/register">
                      <button className="btn btn-warning">Register</button>
                    </Link>
                  </div>
                ) : (
                  <div className="button-email-profile">
                    <Link to="" className="hide-text">
                      <i className="icon-email email"></i>Email
                    </Link>
                    <div className="dropdown">
                      <img
                        src={
                          !this.props.auth.userData.photo
                            ? require("../assets/images/default.jpg")
                            : `${process.env.REACT_APP_HOST}/${this.props.auth.userData.photo}`
                        }
                        className="icon-profile dropbtn"
                        alt="profile"
                        onClick={() => {
                          document
                            .getElementById("myDropdown")
                            .classList.toggle("show");
                        }}
                      />
                      <div id="myDropdown" className="dropdown-list">
                        <Link to="/profile">My Profile</Link>
                        <div className="logout" onClick={this.logout}>
                          Logout
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Header);

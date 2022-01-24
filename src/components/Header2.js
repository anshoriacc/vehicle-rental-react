import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

export default function Header2(path) {
  // const history = useHistory();
  const [token, setToken] = useState("");
  // const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  // const [role, setRole] = useState(0);

  const accessToken = JSON.parse(localStorage.getItem("vehicle-rental-token"));
  // const userName = JSON.parse(localStorage.getItem("vehicle-rental-name"));
  // const userRole = JSON.parse(localStorage.getItem("vehicle-rental-role"));
  const userPhoto = JSON.parse(localStorage.getItem("vehicle-rental-photo"));

  setToken(accessToken);
  // setName(userName);
  // setRole(userRole);
  setPhoto(userPhoto);
  // useEffect(() => {});

  const logout = () => {
    localStorage.removeItem("vehicle-rental-token");
    localStorage.removeItem("vehicle-rental-name");
    localStorage.removeItem("vehicle-rental-role");
    localStorage.removeItem("vehicle-rental-photo");
    // localStorage.clear();

    setToken("");
    // setName("");
    // setRole(0);
    setPhoto("");

    console.log("logout");
  };

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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${path === "/" ? "active" : ""}`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/vehicle"
                  className={`nav-link ${path === "/vehicle" ? "active" : ""}`}
                  aria-current="page"
                >
                  Vehicle Type
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/history"
                  className={`nav-link ${path === "/history" ? "active" : ""}`}
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
              {!token ? (
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
                        photo
                          ? `${process.env.REACT_APP_HOST}/${photo}`
                          : require("../assets/images/default.jpg")
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
                      <div className="logout" onClick={logout}>
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

import React, { Component } from "react";
import "../assets/css/Detail.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Detail extends Component {
  state = {
    accessToken: "",
    isAuthed: false,
    vehiclesData: "",
  };

  componentDidMount() {
    const accessToken = JSON.parse(
      localStorage.getItem("vehicle-rental-token")
    );
    // console.log(accessToken);
    if (accessToken) {
      this.setState({
        accessToken: accessToken,
        isAuthed: true,
      });
    }
  }

  render() {
    const { isAuthed, accessToken } = this.state;
    return (
      <main>
        <Header
          isAuthed={isAuthed}
          accessToken={accessToken}
          path={this.props.match.path}
        />
        <section className="content">
          <h2>Detail</h2>
          <section className="vehicle">
            <section className="photo">
              <div
                id="carousel-thumb"
                className="carousel slide carousel-fade carousel-thumbnails"
                data-ride="carousel"
              >
                {/* <!--Slides--> */}
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={require("../assets/images/fixie.jpg")}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={require("../assets/images/fixie.jpg")}
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={require("../assets/images/fixie.jpg")}
                      alt="Third slide"
                    />
                  </div>
                </div>
                {/* <!--/.Slides-->
              <!--Controls--> */}
                <a
                  className="carousel-control-prev"
                  href="#carousel-thumb"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-thumb"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
                {/* <!--/.Controls--> */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-thumb"
                    data-slide-to="0"
                    className="active"
                  >
                    <img
                      className="d-block w-100 img-fluid"
                      src={require("../assets/images/fixie.jpg")}
                      alt="first thumbnail"
                    />
                  </li>
                  <li data-target="#carousel-thumb" data-slide-to="1">
                    <img
                      className="d-block w-100 img-fluid"
                      src={require("../assets/images/fixie.jpg")}
                      alt="second thumbnail"
                    />
                  </li>
                  <li data-target="#carousel-thumb" data-slide-to="2">
                    <img
                      className="d-block w-100 img-fluid"
                      src={require("../assets/images/fixie.jpg")}
                      alt="third thumbnail"
                    />
                  </li>
                </ol>
              </div>
            </section>
            <section className="detail">
              <h1>Fixie - Gray Only</h1>
              <h2 className="location">Yogyakarta</h2>
              <p className="availability">Available</p>
              <p className="payment">No Prepayment</p>
              <p className="info">Capacity: 1 person</p>
              <p className="info">Type: Bike</p>
              <p className="info">Reservation before 2 PM</p>
              <p className="price">Rp.78.000/day</p>
              <div className="count">
                <button className="btn btn-light count-button">-</button>
                <p>2</p>
                <button className="btn btn-warning count-button">+</button>
              </div>
            </section>
          </section>
          <section className="action">
            <button className="btn btn-dark text-warning button action-button">
              Chat Admin
            </button>
            <button className="btn btn-warning button action-button">
              Book
            </button>
            <button className="btn btn-dark text-warning button action-button icon-button">
              <i className="icon-like"></i> Like
            </button>
          </section>
        </section>
        <Footer />
      </main>
    );
  }
}

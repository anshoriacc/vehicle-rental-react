import React from "react";
import { Link } from "react-router-dom";

export default function VehicleDetailContent({
  vehiclesData,
  counter,
  decrement,
  increment,
  history,
}) {
  // console.log(counter);
  return (
    <>
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
                    src={require("../assets/images/default-vehicle.jpeg")}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={require("../assets/images/default-vehicle.jpeg")}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={require("../assets/images/default-vehicle.jpeg")}
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
                    src={require("../assets/images/default-vehicle.jpeg")}
                    alt="first thumbnail"
                  />
                </li>
                <li data-target="#carousel-thumb" data-slide-to="1">
                  <img
                    className="d-block w-100 img-fluid"
                    src={require("../assets/images/default-vehicle.jpeg")}
                    alt="second thumbnail"
                  />
                </li>
                <li data-target="#carousel-thumb" data-slide-to="2">
                  <img
                    className="d-block w-100 img-fluid"
                    src={require("../assets/images/default-vehicle.jpeg")}
                    alt="third thumbnail"
                  />
                </li>
              </ol>
            </div>
          </section>
          <section className="detail">
            <h1>{vehiclesData.name}</h1>
            <h2 className="location">
              {/* {vehiclesData.location.charAt(0).toUpperCase() +
                vehiclesData.location.slice(1)} */}
              {vehiclesData.location}
            </h2>
            <p className="availability">Available</p>
            <p className="payment">No Prepayment</p>
            <p className="info">Stock: {vehiclesData.stock}</p>
            <p className="info">
              Type:{" "}
              <Link
                to={`/vehicle/${vehiclesData.category}`}
                style={{ color: "inherit" }}
              >
                {vehiclesData.category}
              </Link>
            </p>
            {/* <p className="info">Reservation before 2 PM</p> */}
            <p className="price">Rp. {vehiclesData.price}/day</p>
            <div className="count">
              <button
                className="btn btn-light count-button"
                onClick={decrement}
              >
                -
              </button>
              <p>{counter}</p>
              <button
                className="btn btn-warning count-button"
                onClick={increment}
              >
                +
              </button>
            </div>
          </section>
        </section>
        <section className="action">
          <button className="btn btn-dark text-warning button action-button">
            Chat Admin
          </button>
          <button
            className="btn btn-warning button action-button"
            onClick={() => history.push()}
          >
            Book
          </button>
          <button className="btn btn-dark text-warning button action-button icon-button">
            <i className="icon-like"></i> Like
          </button>
        </section>
      </section>
    </>
  );
}

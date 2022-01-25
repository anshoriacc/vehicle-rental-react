import React from "react";
import { Link } from "react-router-dom";

export default function VehicleDetailContent({
  vehiclesData,
  counter,
  decrement,
  increment,
  history,
}) {
  // const photo = JSON.parse(vehiclesData.photo);
  // console.log(photo);
  return (
    <>
      <section className="content">
        <h2>Detail</h2>
        <section className="vehicle">
          <section className="vehicle-photo">
            <img
              src={
                vehiclesData.photo
                  ? `${process.env.REACT_APP_HOST}/${vehiclesData.photo[0]}`
                  : require("../assets/images/default-vehicle.jpg")
              }
              id="vehicle-photo1"
              alt="vehiclePhoto"
            ></img>
            <img
              src={
                vehiclesData.photo
                  ? `${process.env.REACT_APP_HOST}/${vehiclesData.photo[1]}`
                  : require("../assets/images/default-vehicle.jpg")
              }
              id="vehicle-photo2"
              alt="vehiclePhoto"
            ></img>
            <img
              src={
                vehiclesData.photo
                  ? `${process.env.REACT_APP_HOST}/${vehiclesData.photo[2]}`
                  : require("../assets/images/default-vehicle.jpg")
              }
              id="vehicle-photo3"
              alt="vehiclePhoto"
            ></img>
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
